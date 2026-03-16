import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  addSubscriber: vi.fn(),
  getSubscriberCount: vi.fn(),
  getAllSubscribers: vi.fn(),
  getSubscriberStats: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
  getDb: vi.fn(),
}));

import { addSubscriber, getSubscriberCount, getAllSubscribers, getSubscriberStats } from "./db";

const mockedAddSubscriber = vi.mocked(addSubscriber);
const mockedGetSubscriberCount = vi.mocked(getSubscriberCount);
const mockedGetAllSubscribers = vi.mocked(getAllSubscribers);
const mockedGetSubscriberStats = vi.mocked(getSubscriberStats);

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createAdminContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "admin-user",
      email: "admin@handyswap.com",
      name: "Admin",
      loginMethod: "manus",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createRegularUserContext(): TrpcContext {
  return {
    user: {
      id: 2,
      openId: "regular-user",
      email: "user@example.com",
      name: "Regular User",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("subscriber.subscribe", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("saves a new subscriber and returns success", async () => {
    mockedAddSubscriber.mockResolvedValue({ success: true, alreadyExists: false });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscriber.subscribe({
      email: "test@example.com",
      locale: "de",
      source: "landing",
    });

    expect(result).toEqual({ success: true, alreadyExists: false });
    expect(mockedAddSubscriber).toHaveBeenCalledWith({
      email: "test@example.com",
      locale: "de",
      source: "landing",
    });
  });

  it("handles duplicate email gracefully", async () => {
    mockedAddSubscriber.mockResolvedValue({ success: true, alreadyExists: true });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscriber.subscribe({
      email: "existing@example.com",
      locale: "en",
      source: "landing",
    });

    expect(result).toEqual({ success: true, alreadyExists: true });
  });

  it("normalizes email to lowercase", async () => {
    mockedAddSubscriber.mockResolvedValue({ success: true, alreadyExists: false });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await caller.subscriber.subscribe({
      email: "Test@EXAMPLE.COM",
      locale: "nl",
      source: "landing",
    });

    expect(mockedAddSubscriber).toHaveBeenCalledWith({
      email: "test@example.com",
      locale: "nl",
      source: "landing",
    });
  });

  it("rejects invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.subscriber.subscribe({
        email: "not-an-email",
        locale: "de",
        source: "landing",
      })
    ).rejects.toThrow();
  });

  it("defaults locale to 'de' when not provided", async () => {
    mockedAddSubscriber.mockResolvedValue({ success: true, alreadyExists: false });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await caller.subscriber.subscribe({
      email: "test@example.com",
    });

    expect(mockedAddSubscriber).toHaveBeenCalledWith(
      expect.objectContaining({ locale: "de" })
    );
  });
});

describe("subscriber.count", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns the subscriber count", async () => {
    mockedGetSubscriberCount.mockResolvedValue(42);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscriber.count();

    expect(result).toEqual({ count: 42 });
  });

  it("returns zero when no subscribers", async () => {
    mockedGetSubscriberCount.mockResolvedValue(0);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscriber.count();

    expect(result).toEqual({ count: 0 });
  });
});

describe("admin.subscriberStats", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns stats for admin users", async () => {
    mockedGetSubscriberStats.mockResolvedValue({
      total: 150,
      byLocale: [
        { locale: "de", count: 80 },
        { locale: "en", count: 50 },
        { locale: "nl", count: 20 },
      ],
      today: 5,
    });

    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.subscriberStats();

    expect(result.total).toBe(150);
    expect(result.today).toBe(5);
    expect(result.byLocale).toHaveLength(3);
  });

  it("rejects non-admin users", async () => {
    const ctx = createRegularUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.subscriberStats()).rejects.toThrow();
  });

  it("rejects unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.subscriberStats()).rejects.toThrow();
  });
});

describe("admin.subscriberList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns subscriber list for admin", async () => {
    const mockSubs = [
      {
        id: 1,
        email: "test@example.com",
        locale: "de",
        source: "landing",
        discountCodeSent: false,
        createdAt: new Date("2026-03-01"),
      },
      {
        id: 2,
        email: "user@example.com",
        locale: "en",
        source: "landing",
        discountCodeSent: false,
        createdAt: new Date("2026-03-02"),
      },
    ];
    mockedGetAllSubscribers.mockResolvedValue(mockSubs);

    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.subscriberList();

    expect(result).toHaveLength(2);
    expect(result[0].email).toBe("test@example.com");
  });

  it("rejects non-admin users", async () => {
    const ctx = createRegularUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.subscriberList()).rejects.toThrow();
  });
});

describe("admin.subscriberCsv", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns CSV string for admin", async () => {
    const mockSubs = [
      {
        id: 1,
        email: "test@example.com",
        locale: "de",
        source: "landing",
        discountCodeSent: false,
        createdAt: new Date("2026-03-01T10:00:00Z"),
      },
    ];
    mockedGetAllSubscribers.mockResolvedValue(mockSubs);

    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.subscriberCsv();

    expect(result.count).toBe(1);
    expect(result.csv).toContain("id,email,locale,source,discountCodeSent,createdAt");
    expect(result.csv).toContain("test@example.com");
  });

  it("returns empty CSV when no subscribers", async () => {
    mockedGetAllSubscribers.mockResolvedValue([]);

    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.subscriberCsv();

    expect(result.count).toBe(0);
    expect(result.csv).toContain("id,email,locale,source,discountCodeSent,createdAt");
  });

  it("rejects non-admin users", async () => {
    const ctx = createRegularUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.subscriberCsv()).rejects.toThrow();
  });
});

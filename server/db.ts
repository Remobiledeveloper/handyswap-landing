import { eq, desc, sql, count } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, InsertSubscriber, subscribers, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/* ---- Subscriber helpers ---- */

export async function addSubscriber(data: InsertSubscriber): Promise<{ success: boolean; alreadyExists: boolean }> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  try {
    await db.insert(subscribers).values(data);
    return { success: true, alreadyExists: false };
  } catch (err: any) {
    // MySQL duplicate entry error code
    if (err?.code === "ER_DUP_ENTRY" || err?.errno === 1062) {
      return { success: true, alreadyExists: true };
    }
    throw err;
  }
}

export async function getSubscriberCount(): Promise<number> {
  const db = await getDb();
  if (!db) return 0;
  const result = await db.select({ value: count() }).from(subscribers);
  return result[0]?.value ?? 0;
}

export async function getAllSubscribers() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(subscribers).orderBy(desc(subscribers.createdAt));
}

export async function getSubscriberStats() {
  const db = await getDb();
  if (!db) return { total: 0, byLocale: [], today: 0 };

  const totalResult = await db.select({ value: count() }).from(subscribers);
  const total = totalResult[0]?.value ?? 0;

  const byLocale = await db
    .select({ locale: subscribers.locale, count: count() })
    .from(subscribers)
    .groupBy(subscribers.locale);

  // Count subscribers from today (UTC)
  const todayStart = new Date();
  todayStart.setUTCHours(0, 0, 0, 0);
  const todayResult = await db
    .select({ value: count() })
    .from(subscribers)
    .where(sql`${subscribers.createdAt} >= ${todayStart}`);
  const today = todayResult[0]?.value ?? 0;

  return { total, byLocale, today };
}

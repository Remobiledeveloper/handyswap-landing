import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { addSubscriber, getAllSubscribers, getSubscriberCount, getSubscriberStats } from "./db";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  subscriber: router({
    subscribe: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          locale: z.enum(["de", "en", "nl"]).default("de"),
          source: z.string().default("landing"),
        })
      )
      .mutation(async ({ input }) => {
        const result = await addSubscriber({
          email: input.email.toLowerCase().trim(),
          locale: input.locale,
          source: input.source,
        });
        return result;
      }),
    count: publicProcedure.query(async () => {
      const count = await getSubscriberCount();
      return { count };
    }),
  }),

  admin: router({
    subscriberStats: adminProcedure.query(async () => {
      return getSubscriberStats();
    }),
    subscriberList: adminProcedure.query(async () => {
      return getAllSubscribers();
    }),
    subscriberCsv: adminProcedure.query(async () => {
      const subs = await getAllSubscribers();
      const header = "id,email,locale,source,discountCodeSent,createdAt";
      const rows = subs.map((s) =>
        `${s.id},"${s.email}","${s.locale}","${s.source}",${s.discountCodeSent},"${s.createdAt.toISOString()}"`
      );
      return { csv: [header, ...rows].join("\n"), count: subs.length };
    }),
  }),
});

export type AppRouter = typeof appRouter;

import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";
import {
  Users,
  Download,
  Globe,
  TrendingUp,
  Mail,
  Calendar,
  ArrowLeft,
  LogOut,
  Loader2,
  ShieldAlert,
} from "lucide-react";
import { useCallback } from "react";

const LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663337882967/2Sz8JEY8PPAs458tHGBkme/handyswap-logo_8e24ea7d.png";

export default function AdminDashboard() {
  const { user, loading: authLoading, isAuthenticated, logout } = useAuth();

  const statsQuery = trpc.admin.subscriberStats.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
    retry: false,
    refetchInterval: 30000, // refresh every 30s
  });

  const listQuery = trpc.admin.subscriberList.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
    retry: false,
    refetchInterval: 30000,
  });

  const csvQuery = trpc.admin.subscriberCsv.useQuery(undefined, {
    enabled: false, // only fetch on demand
    retry: false,
  });

  const handleExportCsv = useCallback(async () => {
    const result = await csvQuery.refetch();
    if (result.data) {
      const blob = new Blob([result.data.csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `handyswap-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }, [csvQuery]);

  // Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-hs-blue animate-spin" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-card border border-border/50 rounded-2xl p-8 sm:p-12 text-center max-w-md mx-4">
          <ShieldAlert className="w-12 h-12 text-hs-amber mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-white mb-3">Admin Access Required</h1>
          <p className="text-muted-foreground mb-6">Please sign in with your admin account to access the dashboard.</p>
          <a
            href={getLoginUrl("/admin")}
            className="inline-flex items-center gap-2 bg-hs-blue hover:bg-hs-blue/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  // Not admin
  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-card border border-border/50 rounded-2xl p-8 sm:p-12 text-center max-w-md mx-4">
          <ShieldAlert className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-white mb-3">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You do not have admin privileges. Please contact the site owner.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-hs-blue hover:text-hs-blue/80 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const stats = statsQuery.data;
  const subscribers = listQuery.data ?? [];

  const localeFlags: Record<string, string> = { de: "🇩🇪", en: "🇬🇧", nl: "🇳🇱" };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-4 h-4 text-muted-foreground" />
              <img src={LOGO} alt="Handyswap" className="h-6 w-auto" />
            </a>
            <div className="h-6 w-px bg-border/50" />
            <h1 className="font-display text-lg font-bold text-white">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.name || user?.email}
            </span>
            <button
              onClick={() => logout()}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Subscribers */}
          <div className="bg-card border border-border/40 rounded-xl p-5 hover:border-hs-blue/30 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Total Subscribers</span>
              <Users className="w-5 h-5 text-hs-blue" />
            </div>
            <p className="font-display text-3xl font-bold text-white">
              {statsQuery.isLoading ? "..." : (stats?.total ?? 0)}
            </p>
          </div>

          {/* Today */}
          <div className="bg-card border border-border/40 rounded-xl p-5 hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Today</span>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="font-display text-3xl font-bold text-white">
              {statsQuery.isLoading ? "..." : (stats?.today ?? 0)}
            </p>
          </div>

          {/* By Locale */}
          {stats?.byLocale?.map((item) => (
            <div
              key={item.locale}
              className="bg-card border border-border/40 rounded-xl p-5 hover:border-hs-amber/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">
                  {localeFlags[item.locale] || ""} {item.locale.toUpperCase()}
                </span>
                <Globe className="w-5 h-5 text-hs-amber" />
              </div>
              <p className="font-display text-3xl font-bold text-white">{item.count}</p>
            </div>
          ))}

          {/* Placeholder cards when no locale data yet */}
          {(!stats?.byLocale || stats.byLocale.length === 0) && !statsQuery.isLoading && (
            <>
              <div className="bg-card border border-border/40 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">By Locale</span>
                  <Globe className="w-5 h-5 text-hs-amber" />
                </div>
                <p className="text-sm text-muted-foreground">No data yet</p>
              </div>
            </>
          )}
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Subscriber List</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {subscribers.length} subscriber{subscribers.length !== 1 ? "s" : ""} collected
            </p>
          </div>
          <button
            onClick={handleExportCsv}
            disabled={csvQuery.isFetching || subscribers.length === 0}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            {csvQuery.isFetching ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            Export CSV
          </button>
        </div>

        {/* Subscriber Table */}
        <div className="bg-card border border-border/40 rounded-xl overflow-hidden">
          {listQuery.isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-6 h-6 text-hs-blue animate-spin" />
            </div>
          ) : subscribers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Mail className="w-10 h-10 text-muted-foreground/40" />
              <p className="text-muted-foreground">No subscribers yet</p>
              <p className="text-sm text-muted-foreground/60">
                Emails will appear here as visitors sign up on the landing page.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/40 bg-card/80">
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">#</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Locale</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Source</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Discount Sent</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Signed Up</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {subscribers.map((sub, i) => (
                    <tr
                      key={sub.id}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-3 px-4 text-muted-foreground">{i + 1}</td>
                      <td className="py-3 px-4 text-white font-medium">{sub.email}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1.5 bg-white/5 border border-border/30 rounded-full px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                          {localeFlags[sub.locale] || ""} {sub.locale.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{sub.source}</td>
                      <td className="py-3 px-4">
                        {sub.discountCodeSent ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Sent
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-muted-foreground/60 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                            Pending
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(sub.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                          <span className="text-muted-foreground/50 ml-1">
                            {new Date(sub.createdAt).toLocaleTimeString("en-GB", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rate Limiting - Tenet Documentation",
    description:
        "Protect your API resources from abuse and ensure fair usage with Tenet's advanced rate limiting module",
};

export default function RateLimitingPage() {
    return (
        <div className="flex flex-1 max-w-[1600px] w-full mx-auto">


            {/* Main Content */}
            <main className="flex-1 min-w-0 py-8 px-6 lg:px-12 xl:px-16 pb-20">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                    <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                        Docs
                    </a>
                    <span
                        className="text-text-secondary/50 material-symbols-outlined"
                        style={{ fontSize: "16px" }}
                    >
                        chevron_right
                    </span>
                    <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                        Security
                    </a>
                    <span
                        className="text-text-secondary/50 material-symbols-outlined"
                        style={{ fontSize: "16px" }}
                    >
                        chevron_right
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">Rate Limiting</span>
                </div>

                {/* Page Heading */}
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                        Rate Limiting
                    </h1>
                    <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                        Protect your API resources from abuse and ensure fair usage with Tenet's advanced rate
                        limiting module. Configure granular limits across endpoints, users, and tenants with
                        support for distributed environments.
                    </p>
                </div>

                <hr className="border-gray-200 dark:border-border-dark mb-10" />

                {/* Content Body */}
                <div className="flex flex-col gap-12 max-w-4xl">
                    {/* Overview */}
                    <section className="scroll-mt-24" id="overview">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">security</span>
                            </div>
                            <h2 className="text-2xl font-bold">Overview</h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-7 mb-6">
                            Tenet's rate limiter is built on top of Redis to provide high-performance, distributed
                            tracking of request frequencies. It acts as a middleware layer that intercepts requests
                            before they reach your business logic, enforcing quotas based on configurable keys.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-5 rounded-xl bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    Distributed
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    Syncs limits across multiple server instances using Redis.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    Multi-Tenant
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    Set different limits for different tenant tiers or user roles.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    Adaptive
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    Automatically adjusts limits based on system load (optional).
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Strategies */}
                    <section className="scroll-mt-24" id="strategies">
                        <h2 className="text-2xl font-bold mb-4">Strategies</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Tenet supports multiple algorithms to suit different API patterns. The default is{" "}
                            <strong>Sliding Window</strong>, which offers a balance between accuracy and
                            performance.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark/50">
                                <div className="flex-shrink-0 mt-1">
                                    <span className="material-symbols-outlined text-primary">timelapse</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Fixed Window</h3>
                                    <p className="text-sm text-text-secondary mt-1">
                                        Counts requests in fixed time blocks (e.g., 10:00-10:01). Susceptible to bursts
                                        at window boundaries.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl border-l-4 border-l-primary border-y border-r border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-surface-dark">
                                <div className="flex-shrink-0 mt-1">
                                    <span className="material-symbols-outlined text-primary">blur_on</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">
                                        Sliding Window (Recommended)
                                    </h3>
                                    <p className="text-sm text-text-secondary mt-1">
                                        Smoothes out bursts by considering the previous window's weight. Best for general
                                        purpose APIs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark/50">
                                <div className="flex-shrink-0 mt-1">
                                    <span className="material-symbols-outlined text-primary">token</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Token Bucket</h3>
                                    <p className="text-sm text-text-secondary mt-1">
                                        Allows for bursts of traffic while enforcing a constant rate of flow over time.
                                        Ideal for file uploads or heavy processing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Implementation */}
                    <section className="scroll-mt-24" id="implementation">
                        <h2 className="text-2xl font-bold mb-4">Implementation</h2>
                        <div className="flex flex-col gap-8">
                            {/* Global Configuration */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Global Configuration
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                                    Configure the default rate limiting behavior in your{" "}
                                    <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-surface-dark border border-gray-200 dark:border-border-dark font-mono text-primary">
                                        tenet.config.ts
                                    </code>{" "}
                                    file.
                                </p>
                                <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-border-dark bg-[#0d1117] group">
                                    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
                                        <span className="text-xs font-mono text-gray-400">tenet.config.ts</span>
                                        <button className="text-xs text-gray-400 hover:text-white">Copy</button>
                                    </div>
                                    <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed custom-scrollbar text-gray-300">
                                        {`export default {
  security: {
    rateLimit: {
      enabled: true,
      driver: 'redis',
      strategy: 'sliding-window',
      // Default: 100 requests per minute per IP
      global: {
        windowMs: 60 * 1000,
        max: 100,
        message: 'Too many requests, please try again later.'
      }
    }
  }
}`}
                                    </pre>
                                </div>
                            </div>

                            {/* Per-Endpoint Limits */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Per-Endpoint Limits
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                                    Apply stricter limits to sensitive endpoints like authentication or payment
                                    processing using the route decorator.
                                </p>
                                <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-border-dark bg-[#0d1117] group">
                                    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
                                        <span className="text-xs font-mono text-gray-400">
                                            src/modules/auth/auth.controller.ts
                                        </span>
                                        <button className="text-xs text-gray-400 hover:text-white">Copy</button>
                                    </div>
                                    <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed custom-scrollbar text-gray-300">
                                        {`import { Controller, Post, RateLimit } from '@tenet/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  @RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,                    // Limit each IP to 5 login attempts
    keyGenerator: (req) => req.body.email // Limit by email instead of IP
  })
  async login(req: Request, res: Response) {
    // Login logic...
  }
}`}
                                    </pre>
                                </div>
                            </div>

                            {/* Dynamic Tenant Limits */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Dynamic Tenant Limits
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                                    Configure limits dynamically based on the authenticated user's tenant plan (e.g.
                                    Free vs Enterprise).
                                </p>
                                <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-border-dark bg-[#0d1117] group">
                                    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
                                        <span className="text-xs font-mono text-gray-400">
                                            src/middleware/tenant-limiter.ts
                                        </span>
                                        <button className="text-xs text-gray-400 hover:text-white">Copy</button>
                                    </div>
                                    <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed custom-scrollbar text-gray-300">
                                        {`const tenantRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: async (req) => {
    const tenant = req.tenant;
    if (tenant.plan === 'ENTERPRISE') {
      return 10000;
    }
    return 100; // Default for free tier
  },
  keyGenerator: (req) => req.tenant.id
});`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Response Headers */}
                    <section
                        className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 scroll-mt-24"
                        id="response-headers"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-primary">http</span>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Response Headers</h2>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                            When enabled, Tenet automatically adds standard{" "}
                            <code className="font-mono text-xs bg-gray-100 dark:bg-surface-dark px-1 rounded">
                                X-RateLimit-*
                            </code>{" "}
                            headers to all responses so clients can track their usage.
                        </p>
                        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-border-dark">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 dark:bg-surface-dark text-text-secondary font-medium border-b border-gray-200 dark:border-border-dark">
                                    <tr>
                                        <th className="px-4 py-3">Header</th>
                                        <th className="px-4 py-3">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-border-dark bg-white dark:bg-background-dark">
                                    <tr>
                                        <td className="px-4 py-3 font-mono text-primary">X-RateLimit-Limit</td>
                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                            The maximum number of requests allowed in the current window.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-mono text-primary">X-RateLimit-Remaining</td>
                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                            The number of requests remaining in the current window.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-mono text-primary">X-RateLimit-Reset</td>
                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                            The time at which the current window resets (UTC timestamp).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-mono text-primary">Retry-After</td>
                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                            Sent only when limit is exceeded. Seconds to wait before retrying.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Navigation Footer */}
                    <div className="flex justify-between mt-8 pt-8 border-t border-gray-200 dark:border-border-dark">
                        <a
                            className="group flex flex-col items-start gap-1 p-4 -ml-4 rounded-xl hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors"
                            href="#"
                        >
                            <span className="text-xs text-text-secondary uppercase tracking-wider font-semibold">
                                Previous
                            </span>
                            <div className="flex items-center gap-2 text-primary font-medium group-hover:underline">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Authorization
                            </div>
                        </a>
                        <a
                            className="group flex flex-col items-end gap-1 p-4 -mr-4 rounded-xl hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors"
                            href="#"
                        >
                            <span className="text-xs text-text-secondary uppercase tracking-wider font-semibold">
                                Next
                            </span>
                            <div className="flex items-center gap-2 text-primary font-medium group-hover:underline">
                                Compliance: GDPR
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </a>
                    </div>
                </div>
            </main>

            {/* Right Sidebar (Table of Contents) */}
            <aside className="hidden xl:block w-72 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto py-8 pr-8 pl-4">
                <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                        On this page
                    </h5>
                    <div className="flex flex-col gap-1 relative border-l border-gray-200 dark:border-border-dark pl-4">
                        <div className="absolute left-[-1px] top-1 h-5 w-[2px] bg-primary rounded-full transition-all duration-300 ease-out"></div>
                        <a
                            className="text-sm py-1 text-primary font-medium transition-colors"
                            href="#overview"
                        >
                            Overview
                        </a>
                        <a
                            className="text-sm py-1 text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
                            href="#strategies"
                        >
                            Strategies
                        </a>
                        <a
                            className="text-sm py-1 text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors pl-2"
                            href="#implementation"
                        >
                            Implementation
                        </a>
                        <a
                            className="text-sm py-1 text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors pl-2"
                            href="#response-headers"
                        >
                            Response Headers
                        </a>
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-gray-100 dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
                        <div className="flex flex-col gap-2">
                            <p className="text-xs font-semibold uppercase text-text-secondary">Security Alert?</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Report vulnerabilities directly to our security team.
                            </p>
                            <button className="mt-2 w-full py-2 px-4 bg-white dark:bg-[#2b2f3b] border border-gray-200 dark:border-border-dark rounded-lg text-sm font-medium hover:text-primary transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-base">shield</span>
                                Security Center
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

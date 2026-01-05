import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Audit Logging - Tenet Documentation",
    description:
        "Track user actions, data modifications, and system events to maintain compliance and security observability",
};

export default function AuditLoggingPage() {
    return (
        <>
            {/* Main Content */}
            <main className="flex min-w-0 flex-1 flex-col overflow-y-auto" id="main-content">
                <div className="mx-auto flex w-full max-w-[1200px] flex-1 items-start gap-10 px-4 py-8 sm:px-6 lg:px-8 xl:gap-20">
                    {/* Content Column */}
                    <div className="flex min-w-0 flex-1 flex-col gap-10">
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="flex">
                            <ol className="flex items-center space-x-2">
                                <li>
                                    <a
                                        className="text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-300"
                                        href="#"
                                    >
                                        Docs
                                    </a>
                                </li>
                                <li>
                                    <span className="text-slate-400 dark:text-gray-600">/</span>
                                </li>
                                <li>
                                    <a
                                        className="text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-300"
                                        href="#"
                                    >
                                        Security
                                    </a>
                                </li>
                                <li>
                                    <span className="text-slate-400 dark:text-gray-600">/</span>
                                </li>
                                <li>
                                    <span aria-current="page" className="text-sm font-medium text-primary">
                                        Audit Logging
                                    </span>
                                </li>
                            </ol>
                        </nav>

                        {/* Page Header */}
                        <div className="space-y-4 border-b border-gray-200 dark:border-border-dark pb-8">
                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                Security: Audit Logging
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                                Track user actions, data modifications, and system events to maintain compliance and
                                security observability within your multi-tenant environments.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                                    <span className="size-1.5 rounded-full bg-blue-400"></span> Enterprise
                                </span>
                                <span className="inline-flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                                    v2.4.0+
                                </span>
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            {/* What is Audited */}
                            <section className="scroll-mt-24 space-y-6" id="what-is-audited">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white group flex items-center gap-2">
                                    What is Audited?
                                    <a
                                        className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                        href="#what-is-audited"
                                    >
                                        #
                                    </a>
                                </h2>
                                <p className="text-slate-600 dark:text-gray-300 leading-7">
                                    Tenet's audit system automatically captures a wide range of activities. These logs
                                    are immutable and stored separately from your application data to ensure integrity.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                                    <div className="rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6 shadow-sm">
                                        <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-400">
                                            <span className="material-symbols-outlined">person</span>
                                        </div>
                                        <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                                            User Actions
                                        </h3>
                                        <ul className="space-y-2 text-sm text-slate-600 dark:text-gray-400">
                                            <li className="flex items-center gap-2">
                                                <span className="size-1 rounded-full bg-gray-500"></span> Login / Logout
                                                events
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="size-1 rounded-full bg-gray-500"></span> Password resets
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="size-1 rounded-full bg-gray-500"></span> 2FA configuration
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6 shadow-sm">
                                        <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                                            <span className="material-symbols-outlined">database</span>
                                        </div>
                                        <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                                            Data Changes
                                        </h3>
                                        <ul className="space-y-2 text-sm text-slate-600 dark:text-gray-400">
                                            <li className="flex items-center gap-2">
                                                <span className="size-1 rounded-full bg-gray-500"></span> Record creation
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="size-1 rounded-full bg-gray-500"></span> Updates (with
                                                diffs)
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="size-1 rounded-full bg-gray-500"></span> Hard & soft
                                                deletes
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6 shadow-sm">
                                        <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-purple-500/10 p-2 text-purple-400">
                                            <span className="material-symbols-outlined">settings_suggest</span>
                                        </div>
                                        <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                                            System Events
                                        </h3>
                                        <ul className="space-y-2 text-sm text-slate-600 dark:text-gray-400">
                                            <li className="flex items-center gap-2">
                                                <span className="size-1 rounded-full bg-gray-500"></span> API Key rotation
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="size-1 rounded-full bg-gray-500"></span> Webhook failures
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="size-1 rounded-full bg-gray-500"></span> Rate limit
                                                breaches
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Configuration */}
                            <section className="scroll-mt-24 space-y-6 pt-8" id="configuration">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white group flex items-center gap-2">
                                    Configuration
                                    <a
                                        className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                        href="#configuration"
                                    >
                                        #
                                    </a>
                                </h2>
                                <p className="text-slate-600 dark:text-gray-300 leading-7">
                                    Enable audit logging in your global configuration file. You can specify retention
                                    policies and which PII fields should be redacted automatically.
                                </p>
                                <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-border-dark bg-[#0d1117] shadow-xl">
                                    <div className="flex items-center justify-between border-b border-gray-800 bg-[#161b22] px-4 py-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="size-2.5 rounded-full bg-[#ff5f56]"></div>
                                                <div className="size-2.5 rounded-full bg-[#ffbd2e]"></div>
                                                <div className="size-2.5 rounded-full bg-[#27c93f]"></div>
                                            </div>
                                            <span className="ml-2 font-mono text-xs text-gray-400">
                                                config/tenet.config.ts
                                            </span>
                                        </div>
                                        <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[14px]">content_copy</span>{" "}
                                            Copy
                                        </button>
                                    </div>
                                    <div className="p-4 overflow-x-auto">
                                        <pre className="font-mono text-sm leading-6 text-gray-300">
                                            {`import { defineConfig } from '@tenet/core';

export default defineConfig({
  security: {
    audit: {
      enabled: true,
      // Log retention in days
      retentionPeriod: 90,
      // Fields to automatically redact from diffs
      piiRedaction: ['password', 'ssn', 'creditCard'],
      // Storage provider (database, s3, or external service)
      storage: 'database' 
    }
  }
});`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-amber-500 mt-0.5">
                                            warning
                                        </span>
                                        <div className="text-sm text-slate-700 dark:text-amber-100">
                                            <p className="font-semibold text-amber-600 dark:text-amber-400">
                                                Storage Considerations
                                            </p>
                                            <p className="mt-1 opacity-90">
                                                Audit logs can grow rapidly in high-traffic applications. For production
                                                environments, we recommend configuring an external storage provider like S3
                                                or a dedicated logging service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Querying Logs */}
                            <section className="scroll-mt-24 space-y-6 pt-8" id="querying-logs">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white group flex items-center gap-2">
                                    Querying Logs
                                    <a
                                        className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                        href="#querying-logs"
                                    >
                                        #
                                    </a>
                                </h2>
                                <p className="text-slate-600 dark:text-gray-300 leading-7">
                                    The `AuditService` provides a programmatic way to retrieve logs. You can filter by
                                    actor, action type, date range, or specific resource IDs.
                                </p>
                                <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-border-dark bg-[#0d1117] shadow-xl">
                                    <div className="flex items-center justify-between border-b border-gray-800 bg-[#161b22] px-4 py-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="size-2.5 rounded-full bg-[#ff5f56]"></div>
                                                <div className="size-2.5 rounded-full bg-[#ffbd2e]"></div>
                                                <div className="size-2.5 rounded-full bg-[#27c93f]"></div>
                                            </div>
                                            <span className="ml-2 font-mono text-xs text-gray-400">
                                                controllers/admin.controller.ts
                                            </span>
                                        </div>
                                        <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[14px]">content_copy</span>{" "}
                                            Copy
                                        </button>
                                    </div>
                                    <div className="p-4 overflow-x-auto">
                                        <pre className="font-mono text-sm leading-6 text-gray-300">
                                            {`import { AuditService } from '@tenet/security';

const logs = await AuditService.find({
  where: {
    // Filter by user ID
    actorId: 'user_123',
    // Filter by action type
    action: {
      in: ['DATA_UPDATE', 'DATA_DELETE']
    },
    // Date range
    createdAt: {
      gte: new Date('2023-01-01')
    }
  },
  // Pagination
  take: 20,
  skip: 0
});`}
                                        </pre>
                                    </div>
                                </div>
                            </section>

                            {/* Event Reference Table */}
                            <section className="scroll-mt-24 space-y-6 pt-8 pb-20" id="event-reference">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white group flex items-center gap-2">
                                    Event Reference
                                    <a
                                        className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                        href="#event-reference"
                                    >
                                        #
                                    </a>
                                </h2>
                                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-border-dark">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-border-dark">
                                        <thead className="bg-gray-50 dark:bg-[#161b22]">
                                            <tr>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400"
                                                    scope="col"
                                                >
                                                    Event Code
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400"
                                                    scope="col"
                                                >
                                                    Severity
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400"
                                                    scope="col"
                                                >
                                                    Description
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-border-dark bg-white dark:bg-[#0d1117]">
                                            <tr>
                                                <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-primary">
                                                    AUTH_LOGIN_SUCCESS
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                                                        Info
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-300">
                                                    Successful user login attempt.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-primary">
                                                    AUTH_LOGIN_FAILED
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-500/20">
                                                        Warning
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-300">
                                                    Failed login attempt (bad password/username).
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-primary">
                                                    DATA_DELETE_HARD
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-500/20">
                                                        Critical
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-300">
                                                    Permanent deletion of a record from the database.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>

                        {/* Footer Navigation */}
                        <div className="flex justify-between border-t border-gray-200 dark:border-border-dark py-8">
                            <a className="group flex flex-col gap-1 text-left" href="#">
                                <span className="text-xs font-medium text-slate-500 dark:text-gray-500 uppercase tracking-wider">
                                    Previous
                                </span>
                                <span className="text-lg font-semibold text-primary group-hover:underline">
                                    Authentication
                                </span>
                            </a>
                            <a className="group flex flex-col gap-1 text-right" href="#">
                                <span className="text-xs font-medium text-slate-500 dark:text-gray-500 uppercase tracking-wider">
                                    Next
                                </span>
                                <span className="text-lg font-semibold text-primary group-hover:underline">
                                    Role Based Access
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Sidebar / Table of Contents */}
                    <aside className="hidden xl:flex w-64 flex-none flex-col gap-4 sticky top-8">
                        <div className="flex flex-col gap-3 pl-4 border-l border-gray-200 dark:border-border-dark">
                            <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                                On this page
                            </h5>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a
                                        className="text-sm text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors block"
                                        href="#what-is-audited"
                                    >
                                        What is Audited?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors block"
                                        href="#configuration"
                                    >
                                        Configuration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors block"
                                        href="#querying-logs"
                                    >
                                        Querying Logs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors block"
                                        href="#event-reference"
                                    >
                                        Event Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-5 border border-primary/20">
                            <h6 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Need Help?</h6>
                            <p className="text-xs text-slate-600 dark:text-gray-300 mb-4 leading-relaxed">
                                Join our community discord to discuss security best practices.
                            </p>
                            <button className="w-full rounded-lg bg-primary hover:bg-primary/90 py-2 text-xs font-bold text-white transition-colors">
                                Join Discord
                            </button>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}

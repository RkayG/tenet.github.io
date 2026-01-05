import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Monitoring: Logging - Tenet Documentation",
    description:
        "Implement structured, context-aware logging for better observability and debugging in distributed multi-tenant environments",
};

export default function LoggingPage() {
    return (
        <>
            {/* Main Content */}
            <main className="flex-1 md:ml-64 min-w-0 py-8 px-6 lg:px-12 xl:pr-64">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                        <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                            Docs
                        </a>
                        <span className="text-text-secondary">/</span>
                        <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                            Observability
                        </a>
                        <span className="text-text-secondary">/</span>
                        <span className="text-slate-900 dark:text-white font-medium">Logging</span>
                    </div>

                    {/* Page Header */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                            Monitoring: Logging
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-text-secondary leading-relaxed">
                            Implement structured, context-aware logging for better observability and debugging in
                            distributed multi-tenant environments.
                        </p>
                    </div>

                    {/* Intro Section */}
                    <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
                        <p className="text-slate-600 dark:text-text-secondary mb-6">
                            Tenet ships with a high-performance logger built on top of Pino. It is pre-configured
                            to output JSON logs that are automatically enriched with request context, making it
                            ideal for high-traffic Node.js applications.
                        </p>

                        {/* Callout */}
                        <div className="flex gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 mb-8">
                            <span className="material-symbols-outlined text-primary shrink-0">info</span>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                                    Performance Note
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-blue-100/70">
                                    By default, logging is asynchronous to minimize the impact on the event loop.
                                    Ensure your log transport (e.g., Filebeat, Fluentd) handles buffer flushing
                                    properly.
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-200 dark:border-border-dark mb-12" />

                    {/* Structured Logging Section */}
                    <section className="mb-16 scroll-mt-24" id="structured-logging">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            Structured Logging
                        </h2>
                        <p className="text-slate-600 dark:text-text-secondary mb-6">
                            Tenet forces structured logging. Instead of unstructured strings, logs are emitted as
                            JSON objects. This allows log aggregation tools to easily parse fields like{" "}
                            <code>level</code>, <code>time</code>, and custom properties.
                        </p>

                        {/* Code Block */}
                        <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-border-dark shadow-xl">
                            <div className="flex items-center justify-between px-4 py-2 bg-surface-dark/50 border-b border-border-dark">
                                <span className="text-xs font-mono text-text-secondary">
                                    example-log-output.json
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-text-secondary">JSON</span>
                                    <button className="text-text-secondary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                                    </button>
                                </div>
                            </div>
                            <div className="p-5 overflow-x-auto custom-scrollbar">
                                <pre className="font-mono text-sm leading-relaxed text-gray-300">
                                    <code>
                                        {`{\n`}
                                        {"  "}
                                        <span className="code-string">"level"</span>:{" "}
                                        <span className="code-accent">30</span>,{"\n"}
                                        {"  "}
                                        <span className="code-string">"time"</span>:{" "}
                                        <span className="code-accent">1638367200000</span>,{"\n"}
                                        {"  "}
                                        <span className="code-string">"pid"</span>:{" "}
                                        <span className="code-accent">142</span>,{"\n"}
                                        {"  "}
                                        <span className="code-string">"hostname"</span>:{" "}
                                        <span className="code-string">"tenet-api-worker-1"</span>,{"\n"}
                                        {"  "}
                                        <span className="code-string">"reqId"</span>:{" "}
                                        <span className="code-string">"req-123abc456"</span>,{"\n"}
                                        {"  "}
                                        <span className="code-string">"msg"</span>:{" "}
                                        <span className="code-string">"User authentication successful"</span>,{"\n"}
                                        {"  "}
                                        <span className="code-string">"context"</span>: {`{\n`}
                                        {"    "}
                                        <span className="code-string">"userId"</span>:{" "}
                                        <span className="code-string">"u-892"</span>,{"\n"}
                                        {"    "}
                                        <span className="code-string">"tenantId"</span>:{" "}
                                        <span className="code-string">"t-acme-corp"</span>,{"\n"}
                                        {"    "}
                                        <span className="code-string">"role"</span>:{" "}
                                        <span className="code-string">"admin"</span>
                                        {"\n"}
                                        {"  "}
                                        {`}\n`}
                                        {`}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Log Levels Section */}
                    <section className="mb-16 scroll-mt-24" id="log-levels">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Log Levels</h2>
                        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-border-dark">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 dark:bg-surface-dark text-slate-900 dark:text-white">
                                    <tr>
                                        <th className="px-6 py-3 font-semibold">Level</th>
                                        <th className="px-6 py-3 font-semibold">Value</th>
                                        <th className="px-6 py-3 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-border-dark bg-white dark:bg-background-dark text-slate-600 dark:text-text-secondary">
                                    <tr>
                                        <td className="px-6 py-4 font-mono text-red-500">fatal</td>
                                        <td className="px-6 py-4 font-mono">60</td>
                                        <td className="px-6 py-4">
                                            The application is in a critical state and cannot continue.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-mono text-orange-400">error</td>
                                        <td className="px-6 py-4 font-mono">50</td>
                                        <td className="px-6 py-4">
                                            Runtime errors that do not require immediate termination.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-mono text-yellow-400">warn</td>
                                        <td className="px-6 py-4 font-mono">40</td>
                                        <td className="px-6 py-4">
                                            Exceptional occurrences that are not errors (e.g., deprecated usage).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-mono text-blue-400">info</td>
                                        <td className="px-6 py-4 font-mono">30</td>
                                        <td className="px-6 py-4">
                                            Standard events (startup, incoming requests).{" "}
                                            <span className="opacity-50">(Default)</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-mono text-gray-400">debug</td>
                                        <td className="px-6 py-4 font-mono">20</td>
                                        <td className="px-6 py-4">Detailed information for debugging purposes.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Context Logging Section */}
                    <section className="mb-16 scroll-mt-24" id="context-logging">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Context Logging
                        </h2>
                        <p className="text-slate-600 dark:text-text-secondary mb-6">
                            Tenet uses{" "}
                            <a className="text-primary hover:underline" href="#">
                                AsyncLocalStorage
                            </a>{" "}
                            to maintain request context across the lifetime of an API call. You don't need to
                            pass the logger instance down to every function.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                Usage Example
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-text-secondary mb-4">
                                Use the global <code>Log</code> facade to log from anywhere in your application. It
                                automatically grabs the current Trace ID and User Context.
                            </p>
                        </div>

                        {/* Code Block */}
                        <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-border-dark shadow-xl">
                            <div className="flex items-center justify-between px-4 py-2 bg-surface-dark/50 border-b border-border-dark">
                                <span className="text-xs font-mono text-text-secondary">
                                    services/payment.service.ts
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-text-secondary">TypeScript</span>
                                    <button className="text-text-secondary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                                    </button>
                                </div>
                            </div>
                            <div className="p-5 overflow-x-auto custom-scrollbar">
                                <pre className="font-mono text-sm leading-relaxed text-gray-300">
                                    <code>
                                        <span className="code-keyword">import</span> {`{ Log } `}
                                        <span className="code-keyword">from</span>{" "}
                                        <span className="code-string">'@tenet/core'</span>;{"\n\n"}
                                        <span className="code-keyword">export class</span>{" "}
                                        <span className="code-accent">PaymentService</span> {`{\n`}
                                        {"  "}
                                        <span className="code-keyword">async</span>{" "}
                                        <span className="code-function">processPayment</span>(amount:{" "}
                                        <span className="code-accent">number</span>, currency:{" "}
                                        <span className="code-accent">string</span>) {`{\n`}
                                        {"    "}
                                        <span className="code-comment">
                      // Automatically includes tenantId and userId from the request context
                                        </span>
                                        {"\n"}
                                        {"    "}Log.<span className="code-function">info</span>(
                                        <span className="code-string">'Initiating payment processing'</span>
                                        {`, { amount, currency });\n\n`}
                                        {"    "}
                                        <span className="code-keyword">try</span> {`{\n`}
                                        {"      "}
                                        <span className="code-keyword">const</span> result ={" "}
                                        <span className="code-keyword">await</span>{" "}
                                        <span className="code-function">stripeCharge</span>(amount, currency);{"\n"}
                                        {"      \n"}
                                        {"      "}Log.<span className="code-function">info</span>(
                                        <span className="code-string">'Payment successful'</span>
                                        {`, { \n`}
                                        {"        "}
                                        <span className="code-variable">transactionId</span>: result.id {"\n"}
                                        {"      "}
                                        {`});\n`}
                                        {"      \n"}
                                        {"      "}
                                        <span className="code-keyword">return</span> result;{"\n"}
                                        {"    "}
                                        {`} `}
                                        <span className="code-keyword">catch</span> (err) {`{\n`}
                                        {"      "}
                                        <span className="code-comment">
                      // Logs the error stack trace automatically
                                        </span>
                                        {"\n"}
                                        {"      "}Log.<span className="code-function">error</span>(
                                        <span className="code-string">'Payment failed'</span>, err);{"\n"}
                                        {"      "}
                                        <span className="code-keyword">throw</span> err;{"\n"}
                                        {"    "}
                                        {`}\n`}
                                        {"  "}
                                        {`}\n`}
                                        {`}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Aggregation Section */}
                    <section className="mb-16 scroll-mt-24" id="log-aggregation">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Aggregation &amp; Integration
                        </h2>
                        <p className="text-slate-600 dark:text-text-secondary mb-6">
                            For production environments, you should stream your logs to an aggregation service.
                            Tenet supports standardized output that can be easily piped to tools like Datadog, ELK
                            Stack, or Splunk.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <a
                                className="block p-4 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors group"
                                href="#"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-bold text-slate-900 dark:text-white">Datadog</h5>
                                    <span className="material-symbols-outlined text-text-secondary group-hover:text-primary">
                                        open_in_new
                                    </span>
                                </div>
                                <p className="text-xs text-text-secondary">
                                    View the integration guide for Datadog Logs.
                                </p>
                            </a>

                            <a
                                className="block p-4 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors group"
                                href="#"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-bold text-slate-900 dark:text-white">Elasticsearch (ELK)</h5>
                                    <span className="material-symbols-outlined text-text-secondary group-hover:text-primary">
                                        open_in_new
                                    </span>
                                </div>
                                <p className="text-xs text-text-secondary">
                                    Configure Logstash/Filebeat for Tenet JSON logs.
                                </p>
                            </a>
                        </div>
                    </section>

                    {/* Footer Navigation */}
                    <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-12 border-t border-gray-200 dark:border-border-dark gap-4">
                        <a
                            className="flex flex-col items-start gap-1 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors w-full sm:w-auto"
                            href="#"
                        >
                            <span className="text-xs font-medium text-text-secondary">Previous</span>
                            <div className="flex items-center gap-2 text-primary font-bold">
                                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                                Metrics
                            </div>
                        </a>

                        <a
                            className="flex flex-col items-end gap-1 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors w-full sm:w-auto"
                            href="#"
                        >
                            <span className="text-xs font-medium text-text-secondary">Next</span>
                            <div className="flex items-center gap-2 text-primary font-bold">
                                Tracing
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </div>
                        </a>
                    </div>

                    {/* Page Footer */}
                    <footer className="mt-20 py-8 text-center text-sm text-text-secondary">
                        <p>© 2023 Tenet Framework. Released under MIT License.</p>
                    </footer>
                </div>
            </main>

            {/* Right Sidebar (On This Page) */}
            <aside className="hidden xl:block w-64 fixed right-0 top-[65px] bottom-0 overflow-y-auto py-8 px-6">
                <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                    On This Page
                </h5>
                <nav className="flex flex-col gap-3 border-l border-gray-200 dark:border-border-dark pl-4">
                    <a
                        className="text-sm text-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 block"
                        href="#structured-logging"
                    >
                        Structured Logging
                    </a>
                    <a
                        className="text-sm text-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 block"
                        href="#log-levels"
                    >
                        Log Levels
                    </a>
                    <a
                        className="text-sm text-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 block"
                        href="#context-logging"
                    >
                        Context Logging
                    </a>
                    <a
                        className="text-sm text-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 block"
                        href="#log-aggregation"
                    >
                        Aggregation
                    </a>
                </nav>

                <div className="mt-8 p-4 rounded-lg bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
                    <h6 className="text-xs font-bold text-slate-900 dark:text-white mb-2">
                        Have a question?
                    </h6>
                    <p className="text-xs text-text-secondary mb-3">
                        Join our community discord to get help.
                    </p>
                    <a
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                        href="#"
                    >
                        Join Discord <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                </div>
            </aside>
        </>
    );
}

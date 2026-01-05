import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Architecture - Tenet Documentation",
    description:
        "Understand Tenet's handler-centric architecture with built-in authentication, authorization, validation, and audit logging",
};

export default function ArchitecturePage() {
    return (
        <>
            {/* Main Content */}
            <main className="flex-1 min-w-0 py-8 px-4 sm:px-12 lg:px-16">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                    <a className="hover:text-primary transition-colors" href="#">
                        Docs
                    </a>
                    <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
                    <a className="hover:text-primary transition-colors" href="#">
                        Getting Started
                    </a>
                    <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
                    <span className="font-medium text-slate-900 dark:text-white">Architecture</span>
                </div>

                {/* Page Title */}
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                        Architecture Overview
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                        Tenet's architecture centers around <strong className="text-primary">Handler Functions</strong> —
                        powerful, composable abstractions that encapsulate routing, authentication, authorization, validation,
                        rate limiting, and audit logging into declarative, type-safe interfaces.
                    </p>
                </div>

                {/* Hero Diagram */}
                <div className="mb-16 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5 p-8">
                    <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white mb-8">
                        Handler-Centric Architecture
                    </h2>

                    <div className="flex flex-col items-center gap-6">
                        {/* Handler Types */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
                            <div className="flex flex-col items-center gap-3 p-5 rounded-xl border-2 border-blue-500/30 bg-white dark:bg-[#111318]">
                                <span className="material-symbols-outlined text-blue-500 text-3xl">public</span>
                                <div className="text-center">
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Public</h3>
                                    <code className="text-xs text-blue-500">createPublicHandler</code>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-3 p-5 rounded-xl border-2 border-green-500/30 bg-white dark:bg-[#111318]">
                                <span className="material-symbols-outlined text-green-500 text-3xl">lock</span>
                                <div className="text-center">
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Authenticated</h3>
                                    <code className="text-xs text-green-500">createAuthenticatedHandler</code>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-3 p-5 rounded-xl border-2 border-purple-500/30 bg-white dark:bg-[#111318]">
                                <span className="material-symbols-outlined text-purple-500 text-3xl">admin_panel_settings</span>
                                <div className="text-center">
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Admin</h3>
                                    <code className="text-xs text-purple-500">createAdminHandler</code>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-3 p-5 rounded-xl border-2 border-cyan-500/30 bg-white dark:bg-[#111318]">
                                <span className="material-symbols-outlined text-cyan-500 text-3xl">apartment</span>
                                <div className="text-center">
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Tenant</h3>
                                    <code className="text-xs text-cyan-500">createTenantHandler</code>
                                </div>
                            </div>
                        </div>

                        {/* Built-in Features */}
                        <div className="mt-4 text-center">
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">All handlers include:</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                                    Validation
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-[16px]">speed</span>
                                    Rate Limiting
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-[16px]">fact_check</span>
                                    Audit Logging
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-[16px]">monitoring</span>
                                    Observability
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Handler Types */}
                <section className="mb-16" id="handler-types">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">category</span>
                        Handler Types
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 mb-8">
                        Tenet provides four specialized handler functions, each optimized for different security requirements.
                        Choose the right handler based on your endpoint's authentication and authorization needs.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Public Handler */}
                        <div className="rounded-xl border border-border-dark bg-white dark:bg-[#0d1117] p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/10">
                                    <span className="material-symbols-outlined text-blue-500">public</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">createPublicHandler</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">No authentication required</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                For public endpoints like health checks, documentation, or unauthenticated API calls.
                            </p>
                            <div className="rounded bg-slate-100 dark:bg-[#161b22] p-3">
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                    <span className="code-keyword">createPublicHandler</span>({`({ ... })`})
                                </code>
                            </div>
                        </div>

                        {/* Authenticated Handler */}
                        <div className="rounded-xl border border-border-dark bg-white dark:bg-[#0d1117] p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-green-500/10">
                                    <span className="material-symbols-outlined text-green-500">lock</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">createAuthenticatedHandler</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Requires valid JWT token</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                For authenticated endpoints accessible to any logged-in user, regardless of role.
                            </p>
                            <div className="rounded bg-slate-100 dark:bg-[#161b22] p-3">
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                    <span className="code-keyword">createAuthenticatedHandler</span>({`({ ... })`})
                                </code>
                            </div>
                        </div>

                        {/* Admin Handler */}
                        <div className="rounded-xl border border-border-dark bg-white dark:bg-[#0d1117] p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-purple-500/10">
                                    <span className="material-symbols-outlined text-purple-500">admin_panel_settings</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">createAdminHandler</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Admin role required</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                For administrative endpoints. Automatically enforces <code className="text-xs">allowedRoles: ['admin']</code>.
                            </p>
                            <div className="rounded bg-slate-100 dark:bg-[#161b22] p-3">
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                    <span className="code-keyword">createAdminHandler</span>({`({ ... })`})
                                </code>
                            </div>
                        </div>

                        {/* Tenant Handler */}
                        <div className="rounded-xl border border-border-dark bg-white dark:bg-[#0d1117] p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-cyan-500/10">
                                    <span className="material-symbols-outlined text-cyan-500">apartment</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">createTenantHandler</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Multi-tenant isolation</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                For tenant-scoped endpoints. Automatically enforces tenant isolation and prevents data leakage.
                            </p>
                            <div className="rounded bg-slate-100 dark:bg-[#161b22] p-3">
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                    <span className="code-keyword">createTenantHandler</span>({`({ ... })`})
                                </code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Basic Example */}
                <section className="mb-16" id="basic-example">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        Basic Example
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Here's a simple public endpoint using <code className="text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">createPublicHandler</code>:
                    </p>

                    {/* Code Block */}
                    <div className="rounded-xl overflow-hidden border border-border-dark bg-[#0d1117] shadow-lg mb-6">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-border-dark">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm text-slate-400">code</span>
                                <span className="text-xs font-mono text-slate-300">Public Handler Example</span>
                            </div>
                            <button className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                                <span className="material-symbols-outlined text-sm">content_copy</span> Copy
                            </button>
                        </div>
                        <div className="p-4 overflow-x-auto custom-scrollbar">
                            <pre className="font-mono text-sm leading-6 text-[#e6edf3]">
                                <code>
                                    <span className="code-keyword">import</span> {`{ createPublicHandler } `}
                                    <span className="code-keyword">from</span>{" "}
                                    <span className="code-string">'@tenet/core'</span>;{"\n\n"}
                                    <span className="code-keyword">export const</span> healthCheck ={" "}
                                    <span className="code-function">createPublicHandler</span>({`({\n`}
                                    {"  "}
                                    <span className="code-variable">handler</span>:{" "}
                                    <span className="code-keyword">async</span> () =&gt; {`{\n`}
                                    {"    "}
                                    <span className="code-keyword">return</span> {`{\n`}
                                    {"      "}status:{" "}
                                    <span className="code-string">'healthy'</span>,{"\n"}
                                    {"      "}timestamp:{" "}
                                    <span className="code-keyword">new</span>{" "}
                                    <span className="code-function">Date</span>().
                                    <span className="code-function">toISOString</span>(){"\n"}
                                    {"    "}
                                    {`};\n`}
                                    {"  "}
                                    {`}\n`}
                                    {`});`}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50">
                        <span className="material-symbols-outlined text-primary shrink-0">info</span>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                                No Boilerplate
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-blue-100/70">
                                Notice how clean this is. No manual error handling, no response formatting, no middleware chains.
                                Tenet handles all of that automatically.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tenant Handler Example */}
                <section className="mb-16" id="tenant-example">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        Multi-Tenant Example
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        The <code className="text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">createTenantHandler</code> automatically
                        enforces tenant isolation, validates input with Zod, and provides type-safe access to the current user and tenant context:
                    </p>

                    {/* Code Block */}
                    <div className="rounded-xl overflow-hidden border border-border-dark bg-[#0d1117] shadow-lg">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-border-dark">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm text-slate-400">code</span>
                                <span className="text-xs font-mono text-slate-300">
                                    modules/tasks/routes.ts
                                </span>
                            </div>
                            <button className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                                <span className="material-symbols-outlined text-sm">content_copy</span> Copy
                            </button>
                        </div>
                        <div className="p-4 overflow-x-auto custom-scrollbar">
                            <pre className="font-mono text-sm leading-6 text-[#e6edf3]">
                                <code>
                                    <span className="code-keyword">import</span> {`{ Router } `}
                                    <span className="code-keyword">from</span>{" "}
                                    <span className="code-string">'express'</span>;{"\n"}
                                    <span className="code-keyword">import</span> {`{ createTenantHandler } `}
                                    <span className="code-keyword">from</span>{" "}
                                    <span className="code-string">'../core/handler'</span>;{"\n"}
                                    <span className="code-keyword">import</span> {`{ z } `}
                                    <span className="code-keyword">from</span>{" "}
                                    <span className="code-string">'zod'</span>;{"\n\n"}
                                    <span className="code-keyword">const</span> router ={" "}
                                    <span className="code-function">Router</span>();{"\n\n"}
                                    <span className="code-comment">// Schema for input validation</span>
                                    {"\n"}
                                    <span className="code-keyword">const</span> createTaskSchema = z.
                                    <span className="code-function">object</span>({`({\n`}
                                    {"  "}title: z.<span className="code-function">string</span>().
                                    <span className="code-function">min</span>(3).
                                    <span className="code-function">max</span>(200),{"\n"}
                                    {"  "}priority: z.<span className="code-function">enum</span>([
                                    <span className="code-string">'LOW'</span>,{" "}
                                    <span className="code-string">'MEDIUM'</span>,{" "}
                                    <span className="code-string">'HIGH'</span>,{" "}
                                    <span className="code-string">'URGENT'</span>]),{"\n"}
                                    {`});\n\n`}
                                    <span className="code-comment">// Protected, tenant-scoped endpoint</span>
                                    {"\n"}
                                    router.<span className="code-function">post</span>(
                                    <span className="code-string">'/tasks'</span>,{" "}
                                    <span className="code-function">createTenantHandler</span>({`({\n`}
                                    {"  "}
                                    <span className="code-variable">schema</span>: createTaskSchema,{"\n"}
                                    {"  "}
                                    <span className="code-variable">handler</span>:{" "}
                                    <span className="code-keyword">async</span> ({`{ input, user, prisma }`}) =&gt; {`{\n`}
                                    {"    "}
                                    <span className="code-comment">// user.tenant_id is automatically available</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="code-keyword">const</span> task ={" "}
                                    <span className="code-keyword">await</span> prisma.task.
                                    <span className="code-function">create</span>({`({\n`}
                                    {"      "}data: {`{\n`}
                                    {"        "}...input,{"\n"}
                                    {"        "}tenantId: user!.tenant_id,{"\n"}
                                    {"        "}createdById: user!.id,{"\n"}
                                    {"      "}
                                    {`},\n`}
                                    {"    "}
                                    {`});\n\n`}
                                    {"    "}
                                    <span className="code-keyword">return</span> task;{"\n"}
                                    {"  "}
                                    {`},\n`}
                                    {"  "}
                                    <span className="code-variable">successStatus</span>: 201,{"\n"}
                                    {`}));\n\n`}
                                    <span className="code-keyword">export default</span> router;
                                </code>
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Built-in Features */}
                <section className="mb-16" id="features">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        Built-in Features
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Every handler automatically includes these powerful features. Configure them declaratively in your handler config:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Validation */}
                        <div className="rounded-xl border border-border-dark bg-white dark:bg-[#0d1117] p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-green-500/10">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Schema Validation</h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                Validate request body, query params, and path params using Zod schemas. Invalid requests are rejected automatically with detailed error messages.
                            </p>
                            <div className="rounded bg-slate-100 dark:bg-[#161b22] p-3">
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                    schema: createUserSchema
                                </code>
                            </div>
                        </div>

                        {/* Rate Limiting */}
                        <div className="rounded-xl border border-border-dark bg-white dark:bg-[#0d1117] p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-orange-500/10">
                                    <span className="material-symbols-outlined text-orange-500">speed</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Rate Limiting</h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                Protect your API from abuse with per-user or per-IP rate limits. Backed by Redis for distributed systems.
                            </p>
                            <div className="rounded bg-slate-100 dark:bg-[#161b22] p-3">
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                    rateLimit: {`{ max: 100, window: '1h' }`}
                                </code>
                            </div>
                        </div>

                        {/* Audit Logging */}
                        <div className="rounded-xl border border-border-dark bg-white dark:bg-[#0d1117] p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-red-500/10">
                                    <span className="material-symbols-outlined text-red-500">fact_check</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Audit Logging</h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                Automatically log who did what, when, and from where. Essential for compliance (SOC2, HIPAA, GDPR).
                            </p>
                            <div className="rounded bg-slate-100 dark:bg-[#161b22] p-3">
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                    auditConfig: {`{ enabled: true }`}
                                </code>
                            </div>
                        </div>

                        {/* Monitoring */}
                        <div className="rounded-xl border border-border-dark bg-white dark:bg-[#0d1117] p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/10">
                                    <span className="material-symbols-outlined text-blue-500">monitoring</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Observability</h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                Built-in tracing, metrics, and logging. Integrates with Jaeger, Prometheus, and popular APM tools.
                            </p>
                            <div className="rounded bg-slate-100 dark:bg-[#161b22] p-3">
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                    monitoring: {`{ enableTracing: true }`}
                                </code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next Steps */}
                <div className="mt-16 border-t border-border-dark pt-8">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <a
                            className="group flex flex-col gap-2 rounded-lg border border-border-dark p-4 hover:border-primary transition-colors text-right sm:text-left"
                            href="#"
                        >
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                Previous
                            </span>
                            <span className="text-lg font-semibold text-primary group-hover:text-blue-400">
                                Quick Start
                            </span>
                        </a>

                        <a
                            className="group flex flex-col gap-2 rounded-lg border border-border-dark p-4 hover:border-primary transition-colors text-right"
                            href="#"
                        >
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Next</span>
                            <span className="text-lg font-semibold text-primary group-hover:text-blue-400">
                                Handlers Deep Dive
                            </span>
                        </a>
                    </div>
                </div>
            </main>

            {/* Right Sidebar (TOC) */}
            <aside className="hidden xl:block w-64 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto py-8 pr-8 pl-4">
                <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">On this page</h5>
                <ul className="flex flex-col gap-2.5 text-sm">
                    <li>
                        <a
                            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors block"
                            href="#handler-types"
                        >
                            Handler Types
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors block"
                            href="#basic-example"
                        >
                            Basic Example
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors block"
                            href="#tenant-example"
                        >
                            Multi-Tenant Example
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors block"
                            href="#features"
                        >
                            Built-in Features
                        </a>
                    </li>
                </ul>

                {/* Help Widget */}
                <div className="mt-8 pt-6 border-t border-border-dark">
                    <div className="rounded-lg bg-blue-50 dark:bg-primary/5 p-4 border border-blue-100 dark:border-primary/10">
                        <h5 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">help</span>
                            Need Help?
                        </h5>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                            Join our Discord server to chat with the Tenet team and community.
                        </p>
                        <a
                            className="block text-center rounded bg-white dark:bg-border-dark py-2 text-xs font-bold text-slate-900 dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
                            href="#"
                        >
                            Join Discord
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}

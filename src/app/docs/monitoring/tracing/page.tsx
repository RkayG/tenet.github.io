import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Monitoring: Tracing - Tenet Documentation",
    description:
        "Visualize the lifecycle of requests across your distributed architecture with built-in instrumentation",
};

export default function TracingPage() {
    return (
        <>
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto scroll-smooth">
                <div className="max-w-[1200px] mx-auto flex gap-12 px-8 py-10">
                    {/* Content Column */}
                    <div className="flex-1 min-w-0">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap items-center gap-2 mb-8">
                            <a className="text-text-secondary text-sm font-medium hover:text-white transition-colors" href="#">
                                Docs
                            </a>
                            <span className="material-symbols-outlined text-text-secondary text-[14px]">
                                chevron_right
                            </span>
                            <a className="text-text-secondary text-sm font-medium hover:text-white transition-colors" href="#">
                                Observability
                            </a>
                            <span className="material-symbols-outlined text-text-secondary text-[14px]">
                                chevron_right
                            </span>
                            <span className="text-primary text-sm font-medium px-2 py-0.5 rounded bg-primary/10">
                                Tracing
                            </span>
                        </div>

                        {/* Header */}
                        <div className="mb-10">
                            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                                Monitoring: Tracing
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed font-light">
                                Visualize the lifecycle of requests across your distributed architecture. Tenet
                                provides built-in instrumentation to help you debug latency and understand system
                                dependencies.
                            </p>
                        </div>

                        {/* Section: Core Concepts */}
                        <section className="mb-16" id="concepts">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">hub</span>
                                Core Concepts
                            </h2>
                            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 mb-6">
                                <p className="text-text-secondary mb-4 leading-relaxed">
                                    In a distributed system, a single user action might trigger requests to multiple
                                    services. <strong className="text-white">Distributed Tracing</strong> helps you
                                    stitch these requests together.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div className="bg-[#15181f] p-5 rounded-lg border border-border-dark">
                                        <div className="flex items-center gap-2 mb-2 text-accent-gold font-mono text-sm">
                                            <span className="material-symbols-outlined text-[16px]">tag</span> Trace ID
                                        </div>
                                        <p className="text-sm text-text-secondary">
                                            A unique identifier assigned to the initial incoming request. This ID is
                                            propagated to all downstream services, allowing you to view the full journey.
                                        </p>
                                    </div>
                                    <div className="bg-[#15181f] p-5 rounded-lg border border-border-dark">
                                        <div className="flex items-center gap-2 mb-2 text-primary font-mono text-sm">
                                            <span className="material-symbols-outlined text-[16px]">segment</span> Span ID
                                        </div>
                                        <p className="text-sm text-text-secondary">
                                            Represents a single operation within the trace (e.g., a database query, an
                                            HTTP request). Spans have start/end times and can be nested.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Accessing Context */}
                        <section className="mb-16" id="context">
                            <h2 className="text-2xl font-bold text-white mb-4">Accessing Trace Context</h2>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                Tenet automatically initiates a trace for every incoming HTTP request. You can
                                access the current{" "}
                                <code className="bg-surface-dark px-1.5 py-0.5 rounded text-white text-sm font-mono border border-border-dark">
                                    Trace ID
                                </code>{" "}
                                and{" "}
                                <code className="bg-surface-dark px-1.5 py-0.5 rounded text-white text-sm font-mono border border-border-dark">
                                    Span ID
                                </code>{" "}
                                anywhere in your application using the context API.
                            </p>

                            {/* Code Block */}
                            <div className="rounded-lg bg-surface-dark border border-border-dark overflow-hidden shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-2 bg-[#1a1f29] border-b border-border-dark">
                                    <div className="flex items-center gap-2">
                                        <span className="size-3 rounded-full bg-[#ff5f56]"></span>
                                        <span className="size-3 rounded-full bg-[#ffbd2e]"></span>
                                        <span className="size-3 rounded-full bg-[#27c93f]"></span>
                                        <span className="ml-2 text-xs font-mono text-text-secondary">
                                            controllers/user.controller.ts
                                        </span>
                                    </div>
                                    <button className="text-xs text-text-secondary hover:text-white flex items-center gap-1 transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">content_copy</span> Copy
                                    </button>
                                </div>
                                <div className="p-6 overflow-x-auto bg-[#101217]">
                                    <pre className="text-sm font-mono leading-relaxed text-gray-300">
                                        <code>
                                            <span className="code-keyword">import</span>{" "}
                                            {`{ tenet } `}
                                            <span className="code-keyword">from</span>{" "}
                                            <span className="code-string">'@tenet/core'</span>;{"\n"}
                                            <span className="code-keyword">import</span>{" "}
                                            {`{ Request, Response } `}
                                            <span className="code-keyword">from</span>{" "}
                                            <span className="code-string">'express'</span>;{"\n\n"}
                                            <span className="code-keyword">export const</span>{" "}
                                            <span className="code-function">getUserProfile</span> ={" "}
                                            <span className="code-keyword">async</span> (req:{" "}
                                            <span className="code-accent">Request</span>, res:{" "}
                                            <span className="code-accent">Response</span>) =&gt; {`{`}
                                            {"\n"}
                                            {"  "}
                                            <span className="code-comment">
                        // Retrieve the current Trace ID for logging or external calls
                                            </span>
                                            {"\n"}
                                            {"  "}
                                            <span className="code-keyword">const</span> traceId = tenet.
                                            <span className="code-function">context</span>().
                                            <span className="code-function">getTraceId</span>();{"\n"}
                                            {"  \n"}
                                            {"  "}
                                            <span className="code-keyword">const</span> userId = req.params.id;{"\n\n"}
                                            {"  "}
                                            <span className="code-keyword">try</span> {`{`}
                                            {"\n"}
                                            {"    "}
                                            <span className="code-keyword">const</span> user ={" "}
                                            <span className="code-keyword">await</span> tenet.
                                            <span className="code-function">db</span>.user.
                                            <span className="code-function">findUnique</span>
                                            {`({ where: { id: userId } });`}
                                            {"\n"}
                                            {"    \n"}
                                            {"    "}
                                            <span className="code-comment">
                        // Add custom attributes to the current span
                                            </span>
                                            {"\n"}
                                            {"    "}tenet.<span className="code-function">trace</span>().
                                            <span className="code-function">setAttribute</span>(
                                            <span className="code-string">'user.role'</span>, user.role);{"\n\n"}
                                            {"    "}res.<span className="code-function">json</span>
                                            {`({ data: user, meta: { traceId } });`}
                                            {"\n"}
                                            {"  "}
                                            {`} `}
                                            <span className="code-keyword">catch</span> (error) {`{`}
                                            {"\n"}
                                            {"    "}tenet.<span className="code-function">logger</span>.
                                            <span className="code-function">error</span>(
                                            <span className="code-string">'Failed to fetch user'</span>
                                            {`, { traceId, error });`}
                                            {"\n"}
                                            {"    "}res.<span className="code-function">status</span>(500).
                                            <span className="code-function">send</span>();{"\n"}
                                            {"  "}
                                            {`}`}
                                            {"\n"}
                                            {`};`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Section: Custom Spans */}
                        <section className="mb-16" id="custom-spans">
                            <h2 className="text-2xl font-bold text-white mb-4">Creating Custom Spans</h2>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                While Tenet auto-instruments HTTP routes and Prisma queries, you may want to wrap
                                complex business logic or external API calls in their own spans to track their
                                duration specifically.
                            </p>

                            {/* Warning Callout */}
                            <div className="flex items-start gap-4 p-4 mb-6 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200">
                                <span className="material-symbols-outlined text-amber-400 mt-0.5">warning</span>
                                <div className="text-sm">
                                    <strong className="block mb-1 text-amber-400 font-bold">
                                        Performance Impact
                                    </strong>
                                    Creating excessive spans in a tight loop can add overhead. Use custom spans for
                                    significant operations like external API calls or heavy computations.
                                </div>
                            </div>

                            {/* Code Block */}
                            <div className="rounded-lg bg-surface-dark border border-border-dark overflow-hidden shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-2 bg-[#1a1f29] border-b border-border-dark">
                                    <div className="flex items-center gap-2">
                                        <span className="ml-2 text-xs font-mono text-text-secondary">
                                            services/payment.service.ts
                                        </span>
                                    </div>
                                    <button className="text-xs text-text-secondary hover:text-white flex items-center gap-1 transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">content_copy</span> Copy
                                    </button>
                                </div>
                                <div className="p-6 overflow-x-auto bg-[#101217]">
                                    <pre className="text-sm font-mono leading-relaxed text-gray-300">
                                        <code>
                                            <span className="code-keyword">export const</span>{" "}
                                            <span className="code-function">processPayment</span> ={" "}
                                            <span className="code-keyword">async</span> (amount:{" "}
                                            <span className="code-accent">number</span>) =&gt; {`{`}
                                            {"\n"}
                                            {"  "}
                                            <span className="code-keyword">return await</span> tenet.
                                            <span className="code-function">trace</span>().
                                            <span className="code-function">startActiveSpan</span>(
                                            <span className="code-string">'external.stripe.charge'</span>,{" "}
                                            <span className="code-keyword">async</span> (span) =&gt; {`{`}
                                            {"\n"}
                                            {"    "}
                                            <span className="code-keyword">try</span> {`{`}
                                            {"\n"}
                                            {"      "}span.<span className="code-function">setAttribute</span>(
                                            <span className="code-string">'payment.amount'</span>, amount);{"\n"}
                                            {"      \n"}
                                            {"      "}
                                            <span className="code-comment">// Simulate external API call</span>
                                            {"\n"}
                                            {"      "}
                                            <span className="code-keyword">const</span> result ={" "}
                                            <span className="code-keyword">await</span> stripe.charges.
                                            <span className="code-function">create</span>
                                            {`({ amount });`}
                                            {"\n"}
                                            {"      \n"}
                                            {"      "}span.<span className="code-function">setStatus</span>
                                            {`({ code: `}
                                            <span className="code-string">'OK'</span>
                                            {` });`}
                                            {"\n"}
                                            {"      "}
                                            <span className="code-keyword">return</span> result;{"\n"}
                                            {"    "}
                                            {`} `}
                                            <span className="code-keyword">catch</span> (err) {`{`}
                                            {"\n"}
                                            {"      "}span.<span className="code-function">recordException</span>(err);
                                            {"\n"}
                                            {"      "}span.<span className="code-function">setStatus</span>
                                            {`({ code: `}
                                            <span className="code-string">'ERROR'</span>, message: err.message
                                            {` });`}
                                            {"\n"}
                                            {"      "}
                                            <span className="code-keyword">throw</span> err;{"\n"}
                                            {"    "}
                                            {`} `}
                                            <span className="code-keyword">finally</span> {`{`}
                                            {"\n"}
                                            {"      "}
                                            <span className="code-comment">// Ensure span is ended!</span>
                                            {"\n"}
                                            {"      "}span.<span className="code-function">end</span>();{"\n"}
                                            {"    "}
                                            {`}`}
                                            {"\n"}
                                            {"  "}
                                            {`});`}
                                            {"\n"}
                                            {`};`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Section: Integration */}
                        <section className="mb-20" id="integration">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Integration with Jaeger / Zipkin
                            </h2>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                Tenet uses the OpenTelemetry standard. To visualize your traces, configure the
                                exporter in your{" "}
                                <code className="text-accent-gold font-mono text-sm">tenet.config.json</code> file.
                            </p>

                            <div className="rounded-lg bg-surface-dark border border-border-dark overflow-hidden shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-2 bg-[#1a1f29] border-b border-border-dark">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-text-secondary text-[16px]">
                                            data_object
                                        </span>
                                        <span className="text-xs font-mono text-text-secondary">
                                            tenet.config.json
                                        </span>
                                    </div>
                                    <button className="text-xs text-text-secondary hover:text-white flex items-center gap-1 transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">content_copy</span> Copy
                                    </button>
                                </div>
                                <div className="p-6 overflow-x-auto bg-[#101217]">
                                    <pre className="text-sm font-mono leading-relaxed text-gray-300">
                                        <code>
                                            {`{\n`}
                                            {"  "}
                                            <span className="code-string">"observability"</span>: {`{\n`}
                                            {"    "}
                                            <span className="code-string">"tracing"</span>: {`{\n`}
                                            {"      "}
                                            <span className="code-string">"enabled"</span>:{" "}
                                            <span className="code-keyword">true</span>,{"\n"}
                                            {"      "}
                                            <span className="code-string">"provider"</span>:{" "}
                                            <span className="code-string">"jaeger"</span>,{"\n"}
                                            {"      "}
                                            <span className="code-string">"endpoint"</span>:{" "}
                                            <span className="code-string">
                                                "http://localhost:14268/api/traces"
                                            </span>
                                            ,{"\n"}
                                            {"      "}
                                            <span className="code-string">"samplingRate"</span>:{" "}
                                            <span className="code-accent">1.0</span>
                                            {"\n"}
                                            {"    "}
                                            {`}\n`}
                                            {"  "}
                                            {`}\n`}
                                            {`}`}
                                        </code>
                                    </pre>
                                </div>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <a className="inline-flex items-center justify-center rounded-lg bg-surface-dark border border-border-dark px-5 py-3 text-sm font-medium text-white hover:bg-border-dark transition-all" href="#">
                                    <span className="material-symbols-outlined mr-2">open_in_new</span>
                                    Setup Jaeger Locally
                                </a>
                                <a className="inline-flex items-center justify-center rounded-lg bg-surface-dark border border-border-dark px-5 py-3 text-sm font-medium text-white hover:bg-border-dark transition-all" href="#">
                                    <span className="material-symbols-outlined mr-2">menu_book</span>
                                    OpenTelemetry Specs
                                </a>
                            </div>
                        </section>

                        {/* Footer / Navigation */}
                        <div className="border-t border-border-dark pt-8 flex justify-between">
                            <a className="group flex flex-col items-start gap-1" href="#">
                                <span className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                                    Previous
                                </span>
                                <span className="text-white text-lg font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="material-symbols-outlined">arrow_back</span>
                                    Security
                                </span>
                            </a>
                            <a className="group flex flex-col items-end gap-1" href="#">
                                <span className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                                    Next
                                </span>
                                <span className="text-white text-lg font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                                    Logging
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Sidebar: On this page (Hidden on mobile/tablet) */}
                    <aside className="w-64 flex-none hidden xl:block">
                        <div className="sticky top-10">
                            <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                                On this page
                            </h5>
                            <ul className="space-y-3 text-sm border-l border-border-dark">
                                <li>
                                    <a
                                        className="block pl-4 text-text-secondary hover:text-white border-l-2 border-transparent hover:border-text-secondary transition-all"
                                        href="#concepts"
                                    >
                                        Core Concepts
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block pl-4 text-primary font-medium border-l-2 border-primary -ml-[2px] transition-all"
                                        href="#context"
                                    >
                                        Accessing Context
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block pl-4 text-text-secondary hover:text-white border-l-2 border-transparent hover:border-text-secondary transition-all"
                                        href="#custom-spans"
                                    >
                                        Custom Spans
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block pl-4 text-text-secondary hover:text-white border-l-2 border-transparent hover:border-text-secondary transition-all"
                                        href="#integration"
                                    >
                                        Integration
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-8 p-4 rounded-lg bg-surface-dark border border-border-dark">
                                <p className="text-xs text-text-secondary mb-3 font-medium">
                                    Need help with tracing?
                                </p>
                                <a className="text-xs text-white flex items-center gap-2 font-bold hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined text-[16px]">chat</span>
                                    Join our Discord
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}

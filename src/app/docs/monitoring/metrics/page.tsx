import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Monitoring: Metrics - Tenet Documentation",
    description:
        "Track the health, performance, and usage of your API with Tenet's comprehensive metrics collection system",
};

export default function MetricsPage() {
    return (
        <>
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto scroll-smooth">
                <div className="layout-container flex justify-center w-full">
                    <div className="w-full max-w-[1440px] flex px-6 md:px-12 py-10 gap-12">
                        {/* Content */}
                        <article className="flex-1 min-w-0 max-w-[860px]">
                            {/* Breadcrumbs */}
                            <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
                                <a className="hover:text-white transition-colors" href="#">
                                    Docs
                                </a>
                                <span className="material-symbols-outlined text-[16px] text-border-dark">
                                    chevron_right
                                </span>
                                <a className="hover:text-white transition-colors" href="#">
                                    Monitoring
                                </a>
                                <span className="material-symbols-outlined text-[16px] text-border-dark">
                                    chevron_right
                                </span>
                                <span className="text-primary font-medium">Metrics</span>
                            </nav>

                            {/* Page Header */}
                            <div className="mb-10 border-b border-border-dark pb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="material-symbols-outlined text-[40px] text-primary">
                                        monitoring
                                    </span>
                                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                                        Monitoring: Metrics
                                    </h1>
                                </div>
                                <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                                    Tenet provides a comprehensive metrics collection system out of the box, helping
                                    you track the health, performance, and usage of your API. Learn how to access
                                    built-in metrics, record custom business logic events, and export data to
                                    Prometheus.
                                </p>
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-12">
                                {/* Section: Built-in Metrics */}
                                <section className="scroll-mt-24" id="built-in-metrics">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
                                        <a className="hover:text-primary transition-colors" href="#built-in-metrics">
                                            Built-in Metrics
                                        </a>
                                        <span className="opacity-0 group-hover:opacity-100 text-text-secondary text-lg transition-opacity">
                                            #
                                        </span>
                                    </h2>
                                    <p className="text-text-secondary mb-6 leading-relaxed">
                                        By default, Tenet instruments your application middleware to capture essential
                                        operational data without any configuration. These metrics are available
                                        immediately upon server start.
                                    </p>
                                    <div className="w-full overflow-hidden rounded-lg border border-border-dark bg-[#1c212c]">
                                        <table className="w-full text-left text-sm">
                                            <thead>
                                                <tr className="border-b border-border-dark bg-[#161b24]">
                                                    <th className="px-6 py-4 font-semibold text-white">Metric Name</th>
                                                    <th className="px-6 py-4 font-semibold text-white">Type</th>
                                                    <th className="px-6 py-4 font-semibold text-white">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border-dark">
                                                <tr>
                                                    <td className="px-6 py-4 font-mono text-primary">http_request_count</td>
                                                    <td className="px-6 py-4 text-text-secondary">
                                                        <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-xs font-mono border border-blue-500/20">
                                                            Counter
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-text-secondary">
                                                        Total number of HTTP requests received, labeled by method, path, and
                                                        status code.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 font-mono text-primary">http_response_time</td>
                                                    <td className="px-6 py-4 text-text-secondary">
                                                        <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded text-xs font-mono border border-purple-500/20">
                                                            Histogram
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-text-secondary">
                                                        Response latency distribution in milliseconds.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 font-mono text-primary">error_rate</td>
                                                    <td className="px-6 py-4 text-text-secondary">
                                                        <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded text-xs font-mono border border-red-500/20">
                                                            Gauge
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-text-secondary">
                                                        Current ratio of 5xx errors to total requests over the last 1 minute
                                                        window.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 font-mono text-primary">cache_hit_rate</td>
                                                    <td className="px-6 py-4 text-text-secondary">
                                                        <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-xs font-mono border border-green-500/20">
                                                            Gauge
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-text-secondary">
                                                        Percentage of requests served from the internal Redis cache.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                {/* Section: Custom Metrics */}
                                <section className="scroll-mt-24" id="custom-metrics">
                                    <h2 className="text-2xl font-bold text-white mb-4 group">
                                        <a className="hover:text-primary transition-colors" href="#custom-metrics">
                                            Recording Custom Metrics
                                        </a>
                                    </h2>
                                    <p className="text-text-secondary mb-6 leading-relaxed">
                                        You can extend Tenet's monitoring capabilities by recording custom business
                                        metrics within your controllers or services. Use the{" "}
                                        <code className="bg-[#282e39] text-white px-1.5 py-0.5 rounded font-mono text-sm">
                                            tenet.metrics
                                        </code>{" "}
                                        API.
                                    </p>

                                    {/* Callout */}
                                    <div className="flex gap-4 p-4 rounded-lg bg-blue-500/5 border-l-4 border-blue-500 mb-8">
                                        <span className="material-symbols-outlined text-blue-400 mt-0.5">info</span>
                                        <div className="flex flex-col gap-1">
                                            <p className="font-bold text-blue-400 text-sm">Metric Types</p>
                                            <p className="text-sm text-text-secondary">
                                                Choose <strong>Counter</strong> for values that only go up (e.g.,
                                                registrations), <strong>Gauge</strong> for values that fluctuate (e.g.,
                                                queue size), and <strong>Histogram</strong> for distributions (e.g., file
                                                upload size).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-lg overflow-hidden border border-border-dark bg-[#0d1117] shadow-2xl">
                                        <div className="flex items-center justify-between px-4 py-2 bg-[#161b24] border-b border-border-dark">
                                            <span className="text-xs font-mono text-text-secondary">
                                                controllers/tenant.controller.js
                                            </span>
                                            <div className="flex gap-2">
                                                <button className="text-xs text-text-secondary hover:text-white transition-colors flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[14px]">
                                                        content_copy
                                                    </span>{" "}
                                                    Copy
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                                            <pre>
                                                <code>
                                                    {`const tenet = require('@tenet/core');

// Define metrics once, usually at startup
const tenantCounter = tenet.metrics.createCounter('new_tenant_registrations', {
  help: 'Total number of new tenants registered'
});

const onboardingDuration = tenet.metrics.createHistogram('onboarding_duration_seconds', {
  buckets: [0.1, 0.5, 1, 5]
});

async function registerTenant(req, res) {
  const timer = onboardingDuration.startTimer();
  
  // ... business logic ...
  await db.tenants.create(req.body);

  // Record the metric with labels
  tenantCounter.inc({ plan: req.body.plan });
  
  timer(); // Stops timer and records duration
  
  res.json({ success: true });
}`}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Exporting */}
                                <section className="scroll-mt-24" id="exporting">
                                    <h2 className="text-2xl font-bold text-white mb-4 group">
                                        <a className="hover:text-primary transition-colors" href="#exporting">
                                            Exporting to Prometheus
                                        </a>
                                    </h2>
                                    <p className="text-text-secondary mb-6 leading-relaxed">
                                        Tenet exposes a{" "}
                                        <code className="bg-[#282e39] text-white px-1.5 py-0.5 rounded font-mono text-sm">
                                            /metrics
                                        </code>{" "}
                                        endpoint compatible with Prometheus scraping. To enable this endpoint securely,
                                        configure the exporter in your initialization options.
                                    </p>

                                    <div className="rounded-lg overflow-hidden border border-border-dark bg-[#0d1117] mb-6">
                                        <div className="flex items-center justify-between px-4 py-2 bg-[#161b24] border-b border-border-dark">
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                                </div>
                                                <span className="text-xs font-mono text-text-secondary ml-2">app.js</span>
                                            </div>
                                            <button className="text-xs text-text-secondary hover:text-white transition-colors flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">content_copy</span>{" "}
                                                Copy
                                            </button>
                                        </div>
                                        <div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                                            <pre>
                                                <code>
                                                    {`const app = tenet({
  security: { csrf: true },
  monitoring: {
    prometheus: {
      enabled: true,
      path: '/metrics',
      // Protect endpoint with basic auth or internal network check
      protect: async (req) => req.ip === '10.0.0.5'
    }
  }
});

app.start(3000);`}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>

                                    <p className="text-text-secondary">
                                        Once configured, you can point your Prometheus scraper to{" "}
                                        <code className="text-primary font-mono text-sm">
                                            http://localhost:3000/metrics
                                        </code>
                                        .
                                    </p>
                                </section>

                                {/* Footer Meta */}
                                <div className="pt-10 border-t border-border-dark mt-16 flex justify-between items-center">
                                    <p className="text-text-secondary text-sm">Last updated: Oct 24, 2023</p>
                                    <a className="text-primary hover:text-white text-sm font-medium flex items-center gap-1 transition-colors" href="#">
                                        Edit this page on GitHub
                                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                        </article>

                        {/* Right Table of Contents (Desktop Only) */}
                        <aside className="hidden xl:block w-64 flex-none">
                            <div className="sticky top-6">
                                <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                                    On this page
                                </h5>
                                <ul className="space-y-3 border-l border-border-dark">
                                    <li>
                                        <a
                                            className="block pl-4 text-sm text-primary border-l-2 border-primary -ml-[1px] font-medium"
                                            href="#built-in-metrics"
                                        >
                                            Built-in Metrics
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="block pl-4 text-sm text-text-secondary hover:text-white border-l-2 border-transparent hover:border-text-secondary -ml-[1px] transition-colors"
                                            href="#custom-metrics"
                                        >
                                            Custom Metrics
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="block pl-4 text-sm text-text-secondary hover:text-white border-l-2 border-transparent hover:border-text-secondary -ml-[1px] transition-colors"
                                            href="#exporting"
                                        >
                                            Exporting
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-8 p-4 bg-[#1c212c] rounded-lg border border-border-dark">
                                    <p className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[16px] text-accent-gold">
                                            lightbulb
                                        </span>
                                        Pro Tip
                                    </p>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                        Connect Tenet to Grafana using our pre-built dashboard template #1042 for
                                        instant visualization.
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}

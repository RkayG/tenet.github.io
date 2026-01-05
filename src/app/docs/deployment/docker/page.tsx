import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deployment: Docker - Tenet Documentation",
    description:
        "Learn how to containerize your Tenet application for production with optimized Dockerfiles and secure orchestration",
};

export default function DockerPage() {
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
                        Deployment
                    </a>
                    <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
                    <span className="font-medium text-slate-900 dark:text-white">Docker</span>
                </div>

                {/* Page Title */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                        Deployment: Docker
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                        Learn how to containerize your Tenet application for production with optimized
                        Dockerfiles and secure orchestration. This guide covers multi-stage builds and
                        environment configuration.
                    </p>
                </div>

                {/* Prerequisites Section */}
                <div className="mb-12">
                    <h2
                        className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"
                        id="prerequisites"
                    >
                        <span className="material-symbols-outlined text-primary">checklist</span> Prerequisites
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Before proceeding, ensure you have the following tools installed in your environment:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 rounded-xl border border-border-dark bg-slate-50 dark:bg-[#151b26]">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                <span className="material-symbols-outlined">deployed_code</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white">Docker Engine</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">v20.10+</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-xl border border-border-dark bg-slate-50 dark:bg-[#151b26]">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                <span className="material-symbols-outlined text-primary">terminal</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white">Docker Compose</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">v2.0+</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dockerfile Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4" id="dockerfile">
                        The Optimized Dockerfile
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Tenet recommends using a{" "}
                        <strong className="text-slate-900 dark:text-white">multi-stage build</strong> to keep
                        your production images lightweight and secure. This approach separates the build tools
                        (TypeScript compiler, Prisma generation) from the runtime environment.
                    </p>

                    {/* Code Block */}
                    <div className="rounded-xl overflow-hidden border border-border-dark bg-[#0d1117] shadow-lg">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-border-dark">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm text-slate-400">
                                    description
                                </span>
                                <span className="text-xs font-mono text-slate-300">Dockerfile</span>
                            </div>
                            <button className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                                <span className="material-symbols-outlined text-sm">content_copy</span> Copy
                            </button>
                        </div>
                        <div className="p-4 overflow-x-auto custom-scrollbar">
                            <pre className="font-mono text-sm leading-6 text-[#e6edf3]">
                                <code>
                                    <span className="code-comment"># Stage 1: Builder</span>
                                    {"\n"}
                                    <span className="code-keyword">FROM</span> node:18-alpine{" "}
                                    <span className="code-keyword">AS</span> builder{"\n\n"}
                                    <span className="code-keyword">WORKDIR</span> /app{"\n\n"}
                                    <span className="code-comment"># Install dependencies</span>
                                    {"\n"}
                                    <span className="code-keyword">COPY</span> package.json package-lock.json ./
                                    {"\n"}
                                    <span className="code-keyword">COPY</span> prisma ./prisma/{"\n"}
                                    <span className="code-keyword">RUN</span> npm ci{"\n\n"}
                                    <span className="code-keyword">COPY</span> . .{"\n"}
                                    <span className="code-keyword">RUN</span> npx prisma generate{"\n"}
                                    <span className="code-keyword">RUN</span> npm run build{"\n\n"}
                                    <span className="code-comment"># Stage 2: Runner</span>
                                    {"\n"}
                                    <span className="code-keyword">FROM</span> node:18-alpine{" "}
                                    <span className="code-keyword">AS</span> runner{"\n\n"}
                                    <span className="code-keyword">WORKDIR</span> /app{"\n\n"}
                                    <span className="code-keyword">ENV</span> NODE_ENV=
                                    <span className="code-string">"production"</span>
                                    {"\n\n"}
                                    <span className="code-comment">
                                        # Copy only necessary files from builder
                                    </span>
                                    {"\n"}
                                    <span className="code-keyword">COPY</span> --from=builder /app/dist ./dist{"\n"}
                                    <span className="code-keyword">COPY</span> --from=builder /app/package.json
                                    ./package.json{"\n"}
                                    <span className="code-keyword">COPY</span> --from=builder /app/node_modules
                                    ./node_modules{"\n\n"}
                                    <span className="code-keyword">EXPOSE</span> 3000{"\n\n"}
                                    <span className="code-keyword">CMD</span> [
                                    <span className="code-string">"node"</span>,{" "}
                                    <span className="code-string">"dist/main.js"</span>]
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Callout */}
                <div className="my-8 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 flex gap-3">
                    <span className="material-symbols-outlined text-amber-500 shrink-0">warning</span>
                    <div className="flex-1">
                        <h4 className="font-semibold text-amber-500 mb-1 text-sm">Security Note</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                            Never include your <code>.env</code> file in your Docker image build. Use build
                            arguments or runtime environment injection to keep your secrets secure.
                        </p>
                    </div>
                </div>

                {/* Docker Compose Section */}
                <div className="mb-12">
                    <h2
                        className="text-2xl font-bold text-slate-900 dark:text-white mb-4"
                        id="docker-compose"
                    >
                        Docker Compose Setup
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        For local development or simple deployments, Docker Compose orchestrates the Tenet API
                        alongside its dependencies like PostgreSQL and Redis.
                    </p>

                    {/* Code Block */}
                    <div className="rounded-xl overflow-hidden border border-border-dark bg-[#0d1117] shadow-lg flex flex-col">
                        <div className="flex border-b border-border-dark bg-[#161b22]">
                            <button className="px-6 py-3 text-sm font-medium text-white border-b-2 border-primary bg-[#0d1117]">
                                docker-compose.yml
                            </button>
                        </div>
                        <div className="p-4 overflow-x-auto custom-scrollbar">
                            <pre className="font-mono text-sm leading-6 text-[#e6edf3]">
                                <code>
                                    <span className="code-keyword">version:</span>{" "}
                                    <span className="code-string">'3.8'</span>
                                    {"\n\n"}
                                    <span className="code-keyword">services:</span>
                                    {"\n"}
                                    {"  "}
                                    <span className="code-function">api:</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="code-keyword">build:</span>
                                    {"\n"}
                                    {"      "}
                                    <span className="code-keyword">context:</span> .{"\n"}
                                    {"      "}
                                    <span className="code-keyword">target:</span> development{"\n"}
                                    {"    "}
                                    <span className="code-keyword">ports:</span>
                                    {"\n"}
                                    {"      - "}
                                    <span className="code-string">"3000:3000"</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="code-keyword">environment:</span>
                                    {"\n"}
                                    {"      - "}DATABASE_URL=postgresql://user:password@db:5432/tenet{"\n"}
                                    {"      - "}REDIS_URL=redis://redis:6379{"\n"}
                                    {"    "}
                                    <span className="code-keyword">volumes:</span>
                                    {"\n"}
                                    {"      - "}.:/app{"\n"}
                                    {"    "}
                                    <span className="code-keyword">depends_on:</span>
                                    {"\n"}
                                    {"      - "}db{"\n"}
                                    {"      - "}redis{"\n\n"}
                                    {"  "}
                                    <span className="code-function">db:</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="code-keyword">image:</span> postgres:14-alpine{"\n"}
                                    {"    "}
                                    <span className="code-keyword">environment:</span>
                                    {"\n"}
                                    {"      - "}POSTGRES_USER=user{"\n"}
                                    {"      - "}POSTGRES_PASSWORD=password{"\n"}
                                    {"      - "}POSTGRES_DB=tenet{"\n"}
                                    {"    "}
                                    <span className="code-keyword">volumes:</span>
                                    {"\n"}
                                    {"      - "}postgres_data:/var/lib/postgresql/data{"\n\n"}
                                    {"  "}
                                    <span className="code-function">redis:</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="code-keyword">image:</span> redis:7-alpine{"\n\n"}
                                    <span className="code-keyword">volumes:</span>
                                    {"\n"}
                                    {"  "}
                                    <span className="code-function">postgres_data:</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Environment Variables */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4" id="env-vars">
                        Environment Variables
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Tenet enforces strict schema validation on environment variables at startup. Ensure
                        these variables are present in your container environment.
                    </p>

                    <div className="overflow-hidden rounded-lg border border-border-dark">
                        <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                            <thead className="bg-slate-100 dark:bg-[#1c222e] text-slate-900 dark:text-white font-semibold">
                                <tr>
                                    <th className="px-6 py-3">Variable</th>
                                    <th className="px-6 py-3">Description</th>
                                    <th className="px-6 py-3">Required</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-dark bg-white dark:bg-[#111318]">
                                <tr>
                                    <td className="px-6 py-4 font-mono text-primary">DATABASE_URL</td>
                                    <td className="px-6 py-4">Connection string for PostgreSQL</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">
                                            Yes
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-primary">JWT_SECRET</td>
                                    <td className="px-6 py-4">Secret key for signing tokens</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">
                                            Yes
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-primary">PORT</td>
                                    <td className="px-6 py-4">Port to listen on (default 3000)</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-slate-500/10 px-2 py-1 text-xs font-medium text-slate-500 ring-1 ring-inset ring-slate-500/20">
                                            No
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Next Steps Footer */}
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
                                Production Checklist
                            </span>
                        </a>

                        <a
                            className="group flex flex-col gap-2 rounded-lg border border-border-dark p-4 hover:border-primary transition-colors text-right"
                            href="#"
                        >
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Next</span>
                            <span className="text-lg font-semibold text-primary group-hover:text-blue-400">
                                Serverless Deployment
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
                            href="#prerequisites"
                        >
                            Prerequisites
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors block"
                            href="#dockerfile"
                        >
                            Optimized Dockerfile
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors block"
                            href="#docker-compose"
                        >
                            Docker Compose
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors block"
                            href="#env-vars"
                        >
                            Environment Variables
                        </a>
                    </li>
                </ul>

                {/* Feedback */}
                <div className="mt-8 pt-6 border-t border-border-dark">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                        Was this page helpful?
                    </p>
                    <div className="flex gap-2">
                        <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors">
                            <span className="material-symbols-outlined !text-[18px]">thumb_up</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors">
                            <span className="material-symbols-outlined !text-[18px]">thumb_down</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}

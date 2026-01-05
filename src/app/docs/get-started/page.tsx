import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get Started - Tenet Framework",
    description: "Learn how to set up and use the Tenet multi-tenant API framework in under 5 minutes",
};

export default function GetStartedPage() {
    return (
        <div className="flex min-h-screen">


            {/* Main Content */}
            <main className="flex-1">
                <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12">
                    {/* Hero Section */}
                    <div className="mb-16" id="intro">

                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                            Get Started with Tenet
                        </h1>
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
                            A secure, multi-tenant API framework for Node.js. Follow this walkthrough to set up
                            your environment and build your first compliant endpoint in under 5 minutes.
                        </p>
                    </div>

                    {/* Prerequisites */}
                    <div
                        className="mb-16 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
                        id="prerequisites"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-primary">fact_check</span>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Prerequisites</h2>
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group">
                                <input
                                    checked
                                    className="size-5 rounded border-slate-300 bg-transparent text-primary focus:ring-primary/50 disabled:checked:bg-primary disabled:cursor-not-allowed"
                                    disabled
                                    type="checkbox"
                                    readOnly
                                />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                                    Node.js v18 or higher installed
                                </span>
                            </label>
                            <label className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group">
                                <input
                                    className="size-5 rounded border-slate-300 bg-transparent text-primary focus:ring-primary/50 transition-all checked:bg-primary checked:border-transparent"
                                    type="checkbox"
                                />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                                    PostgreSQL database instance ready
                                </span>
                            </label>
                            <label className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group">
                                <input
                                    className="size-5 rounded border-slate-300 bg-transparent text-primary focus:ring-primary/50 transition-all checked:bg-primary checked:border-transparent"
                                    type="checkbox"
                                />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                                    Basic knowledge of Express/TypeScript
                                </span>
                            </label>
                        </div>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800 mb-16" />

                    {/* Step 1: Installation */}
                    <section className="mb-20 scroll-mt-24" id="installation">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-lg shadow-primary/25">
                                1
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Installation</h2>
                        </div>
                        <p className="mb-6 text-slate-600 dark:text-slate-400">
                            Install the Tenet framework using your preferred package manager. We recommend using
                            TypeScript for the best developer experience.
                        </p>

                        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-code-bg shadow-xl">
                            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 bg-[#161b22]">
                                <div className="flex gap-4">
                                    <button className="text-xs font-medium text-white border-b-2 border-primary pb-2 -mb-2.5">
                                        npm
                                    </button>
                                    <button className="text-xs font-medium text-slate-500 hover:text-slate-300 pb-2 -mb-2.5 transition-colors">
                                        yarn
                                    </button>
                                    <button className="text-xs font-medium text-slate-500 hover:text-slate-300 pb-2 -mb-2.5 transition-colors">
                                        pnpm
                                    </button>
                                </div>
                                <button className="flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-medium text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[14px]">content_copy</span>
                                    Copy
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-slate-300">
                                    <code>
                                        {`# Clone the framework
git clone https://github.com/yourusername/tenet-framework.git
cd tenet-framework

# Install dependencies
npm install

# Set up environment
cp .env.example .env`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Step 2: Configuration */}
                    <section className="mb-20 scroll-mt-24" id="configuration">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-lg shadow-primary/25">
                                2
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Configuration</h2>
                        </div>
                        <p className="mb-6 text-slate-600 dark:text-slate-400">
                            Initialize your environment variables. Tenet requires proper configuration for its
                            security modules to function correctly.
                        </p>

                        <div className="mb-6 rounded-lg border-l-4 border-accent-gold bg-accent-gold/10 p-4">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-accent-gold">warning</span>
                                <div>
                                    <h4 className="text-sm font-bold text-accent-gold uppercase tracking-wide">
                                        Security Check
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                        Ensure your{" "}
                                        <code className="rounded bg-black/10 dark:bg-white/10 px-1 py-0.5 font-mono text-xs">
                                            JWT_SECRET
                                        </code>{" "}
                                        is at least 32 characters long in production environments.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-code-bg shadow-xl">
                            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 bg-[#161b22]">
                                <span className="text-xs font-mono text-slate-400">.env</span>
                                <button className="flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-medium text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[14px]">content_copy</span>
                                    Copy
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-slate-300">
                                    <code>
                                        {`DATABASE_URL="postgresql://user:password@localhost:5432/tenet_db"
JWT_SECRET="your-super-secret-jwt-key-change-this"
NODE_ENV="development"
PORT=3000`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Step 3: First Endpoint */}
                    <section className="mb-20 scroll-mt-24" id="hello-world">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-lg shadow-primary/25">
                                3
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                Create First Endpoint
                            </h2>
                        </div>
                        <p className="mb-6 text-slate-600 dark:text-slate-400">
                            Let's create a basic Express server with Tenet's handler utilities. This
                            automatically sets up security, validation, and multi-tenancy.
                        </p>

                        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-code-bg shadow-xl">
                            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 bg-[#161b22]">
                                <span className="text-xs font-mono text-slate-400">src/index.ts</span>
                                <button className="flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-medium text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[14px]">content_copy</span>
                                    Copy
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-slate-300">
                                    <code>
                                        {`import express from 'express';
import { createPublicHandler } from './core/handler';

const app = express();
app.use(express.json());

// Public endpoint - no authentication required
app.get('/', createPublicHandler({
  handler: async () => {
    return { 
      message: 'Tenet Framework is running!',
      version: '1.0.0'
    };
  },
}));

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Step 4: Adding Security */}
                    <section className="mb-20 scroll-mt-24" id="security">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-lg shadow-primary/25">
                                4
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                Adding Multi-Tenant Authentication
                            </h2>
                        </div>
                        <p className="mb-6 text-slate-600 dark:text-slate-400">
                            Tenet makes multi-tenancy simple. Use{" "}
                            <code className="rounded bg-slate-200 dark:bg-slate-800 px-1 py-0.5 font-mono text-xs text-primary">
                                createTenantHandler
                            </code>{" "}
                            to protect endpoints and automatically enforce tenant isolation.
                        </p>

                        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-code-bg shadow-xl">
                            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 bg-[#161b22]">
                                <span className="text-xs font-mono text-slate-400">src/routes/tasks.ts</span>
                                <button className="flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-medium text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[14px]">content_copy</span>
                                    Copy
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-slate-300">
                                    <code>
                                        {`import { Router } from 'express';
import { createTenantHandler } from '../core/handler';
import { z } from 'zod';

const router = Router();

// Schema for input validation
const createTaskSchema = z.object({
  title: z.string().min(3).max(200),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']),
});

// Protected, tenant-scoped endpoint
router.post('/tasks', createTenantHandler({
  schema: createTaskSchema,
  handler: async ({ input, user, prisma }) => {
    // user.tenant_id is automatically available
    const task = await prisma.task.create({
      data: {
        ...input,
        tenantId: user!.tenant_id,
        createdById: user!.id,
      },
    });
    
    return task;
  },
  successStatus: 201,
}));

export default router;`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Next Steps / Footer CTA */}
                    <div className="rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-slate-900 p-8 shadow-2xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-primary/30 transition-all duration-700"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-4">Ready for production?</h2>
                            <p className="text-slate-300 mb-8 max-w-xl">
                                You have a basic secure API running. Next, explore the module system to build
                                scalable, maintainable applications.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/docs/modules"
                                    className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all"
                                >
                                    Explore Modules
                                </a>
                                <a
                                    href="/docs"
                                    className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all"
                                >
                                    Read Full Docs
                                </a>
                            </div>
                        </div>
                    </div>

                    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-slate-500">© 2024 Tenet Framework. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>
                            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </footer>
                </div>
            </main>

            {/* Decorative Gradient Mesh for Background */}
            <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[100px]"></div>
            </div>
        </div>
    );
}

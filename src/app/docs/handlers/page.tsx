import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Handlers - Tenet Documentation",
    description:
        "Learn about Tenet handlers - the secure bridge between HTTP requests and your business logic",
};

export default function HandlersPage() {
    return (
        <div className="flex w-full max-w-[1440px] mx-auto min-h-screen">


            {/* Main Content */}
            <main className="flex-1 min-w-0">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6">
                        <a className="hover:text-primary transition-colors" href="#">
                            Docs
                        </a>
                        <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
                        <a className="hover:text-primary transition-colors" href="#">
                            Core Concepts
                        </a>
                        <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
                        <span className="text-slate-900 dark:text-white font-medium">Handlers</span>
                    </nav>

                    {/* Page Header */}
                    <div className="mb-10">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                            Handlers
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                            Handlers act as the secure bridge between HTTP requests and your business logic,
                            ensuring compliance, validation, and consistency across your API.
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="space-y-12">
                        {/* Philosophy Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                Philosophy
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">
                                Tenet moves away from raw Express controllers in favor of factory functions. This
                                approach guarantees that every endpoint in your system automatically adheres to your
                                organization's security policies. By wrapping logic in specific handler types, you
                                gain:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <li className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm">
                                    <span className="material-symbols-outlined text-primary mt-0.5">
                                        verified_user
                                    </span>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                                            Automated Security
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            Authentication checks run before your code is ever reached.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm">
                                    <span className="material-symbols-outlined text-primary mt-0.5">rule</span>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                                            Strict Validation
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            Zod schemas ensure incoming data is clean and typed.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm">
                                    <span className="material-symbols-outlined text-primary mt-0.5">apartment</span>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                                            Multi-Tenancy
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            Tenant context is injected automatically based on the request.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm">
                                    <span className="material-symbols-outlined text-primary mt-0.5">error</span>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                                            Error Standardization
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            Exceptions are caught and formatted into RFC-7807 problem details.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* Handler Types Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Handler Types
                            </h2>
                            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark">
                                <table className="min-w-full divide-y divide-slate-200 dark:divide-border-dark">
                                    <thead className="bg-slate-50 dark:bg-surface-dark">
                                        <tr>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                Factory Function
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                Use Case
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                Access Level
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-background-dark divide-y divide-slate-200 dark:divide-border-dark">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-primary">
                                                createPublicHandler
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                                                Registration, login, public health checks.
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Anonymous
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-primary">
                                                createAuthenticatedHandler
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                                                User profile updates, personal settings.
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                                    Logged In
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-primary">
                                                createTenantHandler
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                                                Team resources, projects, billing logic.
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                                                    Tenant Member
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-primary">
                                                createAdminHandler
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                                                System configuration, user management.
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                                                    Super Admin
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Configuration Options */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Configuration Object
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">
                                Every handler factory accepts a configuration object as its first argument.
                            </p>
                            <div className="space-y-4">
                                {/* Config Item */}
                                <div className="group border-l-2 border-slate-200 dark:border-border-dark pl-4 hover:border-primary transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white font-mono flex items-center gap-2">
                                        schema
                                        <span className="text-xs font-sans font-normal text-slate-500 bg-slate-100 dark:bg-surface-dark px-2 py-0.5 rounded">
                                            ZodObject | Optional
                                        </span>
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                        Defines the shape of the request body, query, and params. Tenet automatically
                                        validates the request against this schema and types the{" "}
                                        <code className="bg-slate-100 dark:bg-surface-dark px-1 rounded text-primary">
                                            ctx.input
                                        </code>{" "}
                                        object.
                                    </p>
                                </div>

                                {/* Config Item */}
                                <div className="group border-l-2 border-slate-200 dark:border-border-dark pl-4 hover:border-primary transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white font-mono flex items-center gap-2">
                                        rateLimit
                                        <span className="text-xs font-sans font-normal text-slate-500 bg-slate-100 dark:bg-surface-dark px-2 py-0.5 rounded">
                                            Object | Optional
                                        </span>
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                        Override global rate limits for this specific endpoint. Useful for
                                        resource-intensive operations like exports or AI generation.
                                    </p>
                                </div>

                                {/* Config Item */}
                                <div className="group border-l-2 border-slate-200 dark:border-border-dark pl-4 hover:border-primary transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white font-mono flex items-center gap-2">
                                        auditLog
                                        <span className="text-xs font-sans font-normal text-slate-500 bg-slate-100 dark:bg-surface-dark px-2 py-0.5 rounded">
                                            Boolean | Default: true
                                        </span>
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                        When true, successful executions of this handler are recorded in the system
                                        audit trail, including the user, action, and resource ID.
                                    </p>
                                </div>
                            </div>

                            {/* Warning Callout */}
                            <div className="mt-8 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 flex items-start gap-3">
                                <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500">
                                    warning
                                </span>
                                <div>
                                    <h4 className="text-sm font-bold text-yellow-800 dark:text-yellow-500">
                                        Compliance Warning
                                    </h4>
                                    <p className="text-sm text-yellow-700 dark:text-yellow-600/90 mt-1">
                                        Disabling{" "}
                                        <code className="font-mono text-xs bg-yellow-100 dark:bg-black/20 px-1 rounded">
                                            auditLog
                                        </code>{" "}
                                        on sensitive write operations (create/update/delete) may violate SOC2 compliance
                                        requirements. Only disable for read-only or high-volume non-critical endpoints.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Code Examples Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Examples</h2>

                            {/* Example 1 */}
                            <div className="mb-10">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                                    Basic CRUD Operation
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    Here is how you define a standard authenticated endpoint to fetch user details.
                                    Note how{" "}
                                    <code className="text-primary font-mono bg-slate-100 dark:bg-surface-dark px-1 rounded">
                                        ctx.user
                                    </code>{" "}
                                    is automatically typed and available.
                                </p>

                                {/* Code Block */}
                                <div className="relative rounded-lg overflow-hidden bg-[#1e232d] border border-border-dark group">
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                        <button className="p-1.5 rounded-md bg-white/10 text-slate-300 hover:text-white hover:bg-white/20">
                                            <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                        </div>
                                        <span className="ml-4 text-xs font-mono text-slate-400">
                                            src/handlers/users/get.ts
                                        </span>
                                    </div>
                                    <div className="p-4 overflow-x-auto">
                                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                                            {`import { z } from "zod";
import { createAuthenticatedHandler } from "@tenet/core";

export const getUserHandler = createAuthenticatedHandler(
  {
    schema: z.object({
      params: z.object({
        userId: z.string().uuid(),
      }),
    }),
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100,
    },
  },
  async (ctx) => {
    // ctx.input is typed from the schema above
    const { userId } = ctx.input.params;

    // Security: Ensure user is accessing their own data or is admin
    if (userId !== ctx.user.id && !ctx.user.isAdmin) {
      throw new ForbiddenError("You cannot access other users' data");
    }

    const user = await ctx.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true },
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return user;
  }
);`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            {/* Example 2 */}
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                                    Nested Resource & Multi-Tenancy
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    For tenant-scoped resources, use{" "}
                                    <code className="text-primary font-mono bg-slate-100 dark:bg-surface-dark px-1 rounded">
                                        createTenantHandler
                                    </code>
                                    . This ensures the user is a member of the tenant specified in the URL.
                                </p>

                                {/* Code Block */}
                                <div className="relative rounded-lg overflow-hidden bg-[#1e232d] border border-border-dark group">
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                        <button className="p-1.5 rounded-md bg-white/10 text-slate-300 hover:text-white hover:bg-white/20">
                                            <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                        </div>
                                        <span className="ml-4 text-xs font-mono text-slate-400">
                                            src/handlers/projects/create.ts
                                        </span>
                                    </div>
                                    <div className="p-4 overflow-x-auto">
                                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                                            {`import { z } from "zod";
import { createTenantHandler } from "@tenet/core";

export const createProjectHandler = createTenantHandler(
  {
    schema: z.object({
      // 'tenantId' is automatically validated against the user's memberships
      params: z.object({
        tenantId: z.string(), 
      }),
      body: z.object({
        name: z.string().min(3),
        description: z.string().optional(),
      }),
    }),
  },
  async (ctx) => {
    // ctx.tenant is available and verified
    const { name, description } = ctx.input.body;

    const project = await ctx.prisma.project.create({
      data: {
        name,
        description,
        tenantId: ctx.tenant.id,
        createdById: ctx.user.id,
      },
    });

    ctx.logger.info("Project created", { projectId: project.id });
    
    return project;
  }
);`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Page Navigation Footer */}
                    <div className="mt-20 pt-10 border-t border-slate-200 dark:border-border-dark flex flex-col sm:flex-row justify-between gap-4">
                        <a
                            className="group flex flex-col items-start gap-2 p-4 rounded-lg border border-slate-200 dark:border-border-dark hover:border-primary dark:hover:border-primary/50 transition-all w-full sm:w-1/2"
                            href="#"
                        >
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">
                                Previous
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">
                                    arrow_back
                                </span>
                                <span className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-primary">
                                    Architecture
                                </span>
                            </div>
                        </a>
                        <a
                            className="group flex flex-col items-end gap-2 p-4 rounded-lg border border-slate-200 dark:border-border-dark hover:border-primary dark:hover:border-primary/50 transition-all w-full sm:w-1/2 text-right"
                            href="#"
                        >
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">
                                Next
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-primary">
                                    Middleware
                                </span>
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">
                                    arrow_forward
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </main>

            {/* Right Sidebar (Table of Contents) */}
            <aside className="hidden xl:block w-64 border-l border-slate-200 dark:border-border-dark overflow-y-auto fixed right-0 h-[calc(100vh-4rem)] bg-background-light dark:bg-background-dark">
                <div className="p-6">
                    <h5 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        On this page
                    </h5>
                    <nav>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    className="block text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Philosophy
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Handler Types
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Configuration Object
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Examples
                                </a>
                                <ul className="pl-4 mt-2 space-y-2 border-l border-slate-200 dark:border-border-dark">
                                    <li>
                                        <a
                                            className="block text-xs text-slate-500 hover:text-primary dark:hover:text-primary transition-colors"
                                            href="#"
                                        >
                                            Basic CRUD
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="block text-xs text-slate-500 hover:text-primary dark:hover:text-primary transition-colors"
                                            href="#"
                                        >
                                            Nested Resource
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
}

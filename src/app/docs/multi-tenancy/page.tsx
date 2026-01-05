import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Multi-Tenancy - Tenet Documentation",
    description:
        "Learn how Tenet handles data isolation, row-level security, and tenant context resolution",
};

export default function MultiTenancyPage() {
    return (
        <div className="flex flex-1 overflow-hidden">


            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto px-6 py-8 md:px-12 lg:px-16 scroll-smooth">
                <div className="max-w-[800px] mx-auto flex flex-col gap-10 pb-20">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm">
                        <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                            Docs
                        </a>
                        <span className="text-text-secondary">/</span>
                        <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                            Core Concepts
                        </a>
                        <span className="text-text-secondary">/</span>
                        <span className="text-slate-900 dark:text-white font-medium">Multi-Tenancy</span>
                    </nav>

                    {/* Header */}
                    <div className="flex flex-col gap-4 border-b border-gray-200 dark:border-border-dark pb-8">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                            Multi-Tenancy
                        </h1>
                        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                            Learn how Tenet handles data isolation, row-level security, and tenant context
                            resolution to build secure enterprise-grade SaaS applications.
                        </p>
                    </div>

                    {/* Content: Introduction */}
                    <section className="flex flex-col gap-4" id="introduction">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white group flex items-center gap-2">
                            Introduction
                            <a
                                className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                href="#introduction"
                            >
                                #
                            </a>
                        </h2>
                        <p className="text-slate-700 dark:text-gray-300 leading-7">
                            Multi-tenancy is an architecture in which a single instance of a software application
                            serves multiple customers. Each customer is called a <strong>tenant</strong>. Tenet
                            provides a robust foundation for multi-tenant applications by ensuring that each
                            tenant's data is isolated and invisible to other tenants.
                        </p>
                    </section>

                    {/* Content: Isolation Strategies */}
                    <section className="flex flex-col gap-6" id="isolation-strategies">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white group flex items-center gap-2">
                            Tenant Isolation Strategies
                            <a
                                className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                href="#isolation-strategies"
                            >
                                #
                            </a>
                        </h2>
                        <p className="text-slate-700 dark:text-gray-300 leading-7">
                            Tenet supports two primary strategies for isolating tenant data. The choice depends on
                            your compliance requirements and infrastructure scale.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark">
                                <div className="size-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-primary mb-4">
                                    <span className="material-symbols-outlined">table_rows</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                    Row-Level Security
                                </h3>
                                <p className="text-sm text-text-secondary leading-6">
                                    Shared database schema where every table has a{" "}
                                    <code className="text-xs bg-gray-100 dark:bg-black/30 px-1 py-0.5 rounded border border-gray-200 dark:border-border-dark font-mono text-primary">
                                        tenantId
                                    </code>{" "}
                                    column. Tenet automatically applies WHERE clauses to filter queries.
                                </p>
                            </div>

                            <div className="p-5 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark">
                                <div className="size-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                                    <span className="material-symbols-outlined">dns</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                    Database Isolation
                                </h3>
                                <p className="text-sm text-text-secondary leading-6">
                                    Separate databases per tenant. Tenet handles connection pooling and routing based
                                    on the tenant context at runtime.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Content: Tenant Context */}
                    <section className="flex flex-col gap-6" id="tenant-context">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white group flex items-center gap-2">
                            Tenant Context
                            <a
                                className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                href="#tenant-context"
                            >
                                #
                            </a>
                        </h2>
                        <p className="text-slate-700 dark:text-gray-300 leading-7">
                            Tenet middleware automatically resolves the current tenant based on headers (e.g.,{" "}
                            <code className="text-sm font-mono text-primary bg-gray-100 dark:bg-surface-dark px-1.5 py-0.5 rounded">
                                X-Tenant-ID
                            </code>
                            ) or subdomains. The resolved tenant is attached to the request object.
                        </p>

                        {/* Code Block */}
                        <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#0d1117]">
                            <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
                                <span className="text-xs font-mono text-text-secondary">
                                    middleware/context.ts
                                </span>
                                <button className="text-text-secondary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">content_copy</span>
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm leading-6">
                                    <code className="language-typescript">
                                        {`import { TenetContext } from '@tenet/core';

// Accessing tenant in a route handler
export const getDashboard = async (req: TenetContext, res) => {
  const { id, plan } = req.tenant;

  // Queries are automatically scoped to this tenant
  const users = await req.db.user.findMany();

  return res.json({ 
    tenantId: id, 
    plan: plan,
    userCount: users.length 
  });
};`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Content: Schema Design */}
                    <section className="flex flex-col gap-6" id="schema-design">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white group flex items-center gap-2">
                            Database Schema Design
                            <a
                                className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                href="#schema-design"
                            >
                                #
                            </a>
                        </h2>
                        <p className="text-slate-700 dark:text-gray-300 leading-7">
                            When using Row-Level Security, your Prisma schema must explicitly include the relation
                            to the Tenant model. Tenet's generator will enforce this relationship.
                        </p>

                        {/* Code Block */}
                        <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#0d1117]">
                            <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
                                <span className="text-xs font-mono text-text-secondary">schema.prisma</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm leading-6">
                                    <code className="language-prisma">
                                        {`model Tenant {
  id        String   @id @default(cuid())
  name      String
  users     User[]
}

model User {
  id        String   @id @default(cuid())
  email     String
  
  // Mandatory tenant relation
  tenantId  String
  tenant    Tenant   @relation(fields: [tenantId], references: [id])

  @@index([tenantId])
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Content: Best Practices */}
                    <section className="flex flex-col gap-6" id="best-practices">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white group flex items-center gap-2">
                            Security Best Practices
                            <a
                                className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                href="#best-practices"
                            >
                                #
                            </a>
                        </h2>

                        <div className="flex flex-col gap-4 border-l-4 border-orange-500 bg-orange-500/5 dark:bg-orange-500/10 p-6 rounded-r-lg">
                            <div className="flex items-center gap-3 text-orange-600 dark:text-orange-400 font-bold text-lg">
                                <span className="material-symbols-outlined">warning</span>
                                <h3>Prevent Cross-Tenant Leaks</h3>
                            </div>
                            <p className="text-slate-700 dark:text-gray-300 text-sm leading-6">
                                Never bypass the Tenet repository wrappers (e.g., using raw SQL queries) without
                                manually appending the tenant ID filter. Bypassing the wrapper is the most common
                                cause of data leaks in multi-tenant systems.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-3 mt-2">
                            <li className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-green-500 shrink-0 mt-0.5">
                                    check_circle
                                </span>
                                <span className="text-slate-700 dark:text-gray-300 leading-6">
                                    Always use the{" "}
                                    <code className="bg-gray-100 dark:bg-surface-dark px-1.5 py-0.5 rounded text-sm font-mono border border-gray-200 dark:border-border-dark">
                                        req.tenant.id
                                    </code>{" "}
                                    when logging audit events.
                                </span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-green-500 shrink-0 mt-0.5">
                                    check_circle
                                </span>
                                <span className="text-slate-700 dark:text-gray-300 leading-6">
                                    Ensure all unique constraints (e.g., email) are scoped to the{" "}
                                    <code className="bg-gray-100 dark:bg-surface-dark px-1.5 py-0.5 rounded text-sm font-mono border border-gray-200 dark:border-border-dark">
                                        tenantId
                                    </code>
                                    , allowing the same email to exist in different tenants.
                                </span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-green-500 shrink-0 mt-0.5">
                                    check_circle
                                </span>
                                <span className="text-slate-700 dark:text-gray-300 leading-6">
                                    Run automated penetration tests that explicitly attempt to access resources across
                                    tenant boundaries.
                                </span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Footer Area */}
                <div className="max-w-[800px] mx-auto pt-10 border-t border-gray-200 dark:border-border-dark flex justify-between pb-10">
                    <a className="flex flex-col gap-1 text-right group items-start" href="#">
                        <span className="text-xs text-text-secondary font-medium">Previous</span>
                        <span className="text-primary font-bold group-hover:underline">
                            Architecture Overview
                        </span>
                    </a>
                    <a className="flex flex-col gap-1 text-right group items-end" href="#">
                        <span className="text-xs text-text-secondary font-medium">Next</span>
                        <span className="text-primary font-bold group-hover:underline">
                            Security & Compliance
                        </span>
                    </a>
                </div>
            </main>

            {/* Right Sidebar (TOC) */}
            <aside className="hidden xl:flex w-64 flex-col pt-10 pr-6 overflow-y-auto">
                <div className="fixed w-56 flex flex-col gap-4">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider pl-4">
                        On this page
                    </h3>
                    <nav className="flex flex-col text-sm border-l border-gray-200 dark:border-border-dark">
                        <a
                            className="pl-4 py-1 border-l-2 border-transparent text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors"
                            href="#introduction"
                        >
                            Introduction
                        </a>
                        <a
                            className="pl-4 py-1 border-l-2 border-transparent text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors"
                            href="#isolation-strategies"
                        >
                            Isolation Strategies
                        </a>
                        <a
                            className="pl-4 py-1 border-l-2 border-primary text-primary font-medium transition-colors"
                            href="#tenant-context"
                        >
                            Tenant Context
                        </a>
                        <a
                            className="pl-4 py-1 border-l-2 border-transparent text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors"
                            href="#schema-design"
                        >
                            Database Schema
                        </a>
                        <a
                            className="pl-4 py-1 border-l-2 border-transparent text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors"
                            href="#best-practices"
                        >
                            Security Best Practices
                        </a>
                    </nav>

                    {/* Promo / Extra Link */}
                    <div className="mt-8 ml-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
                        <p className="text-xs font-medium text-slate-900 dark:text-white mb-2">
                            Need help implementing?
                        </p>
                        <a
                            className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
                            href="#"
                        >
                            Join our Discord
                            <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    );
}

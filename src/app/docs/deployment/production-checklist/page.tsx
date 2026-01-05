"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function ProductionChecklistPage() {
    const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
    const totalItems = 9;

    const toggleCheck = (id: number) => {
        setCheckedItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const progress = Math.round((checkedItems.size / totalItems) * 100);

    return (
        <>
            {/* Main Content */}
            <main className="flex flex-1 flex-col overflow-y-auto px-8 py-8 xl:px-12 scroll-smooth">
                <div className="mx-auto w-full max-w-5xl flex flex-col gap-8 pb-20">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <a className="hover:text-primary transition-colors" href="#">
                            Home
                        </a>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        <a className="hover:text-primary transition-colors" href="#">
                            Deployment
                        </a>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        <span className="font-medium text-gray-900 dark:text-white">Production Checklist</span>
                    </nav>

                    {/* Page Header */}
                    <div className="flex flex-col gap-4 border-b border-gray-200 dark:border-border-dark pb-8">
                        <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
                            Deployment: Production Checklist
                        </h1>
                        <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            A comprehensive guide to ensuring security, compliance, and stability before launching
                            your Tenet application to production.
                        </p>

                        {/* Progress Indicator */}
                        <div className="mt-4 flex flex-col gap-2 max-w-md">
                            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
                                <span>Checklist Progress</span>
                                <span>
                                    {checkedItems.size}/{totalItems} Completed
                                </span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-border-dark">
                                <div
                                    className="h-full rounded-full bg-primary transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Content Layout Grid */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_250px]">
                        {/* Left Column: Checklist Content */}
                        <div className="flex flex-col gap-16">
                            {/* Section 1: Environment Variables */}
                            <section className="flex flex-col gap-6" id="env-vars">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/10 text-primary">
                                        <span className="material-symbols-outlined">settings</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Environment Variables
                                    </h2>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Ensure all environment variables are securely configured for a production
                                    environment. Do not use default development values.
                                </p>

                                <div className="flex flex-col gap-4">
                                    {/* Checklist Item 1 */}
                                    <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 dark:hover:border-primary/50">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                                                <input
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-0 dark:border-gray-600"
                                                    type="checkbox"
                                                    checked={checkedItems.has(1)}
                                                    onChange={() => toggleCheck(1)}
                                                />
                                                <span className="material-symbols-outlined pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                    check
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <h3 className="font-bold text-gray-900 dark:text-white select-none">
                                                    Set NODE_ENV to production
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Enables significant performance optimizations in Express and disables stack
                                                    trace leakage.
                                                </p>
                                                <div className="mt-2 rounded-lg bg-gray-900 p-4 relative group/code">
                                                    <div className="absolute right-2 top-2 opacity-0 group-hover/code:opacity-100 transition-opacity">
                                                        <button className="flex items-center justify-center p-1.5 rounded bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700">
                                                            <span className="material-symbols-outlined text-[16px]">
                                                                content_copy
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <code className="font-mono text-sm text-blue-300">
                                                        NODE_ENV<span className="text-white">=</span>
                                                        <span className="text-green-400">production</span>
                                                    </code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Checklist Item 2 */}
                                    <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 dark:hover:border-primary/50">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                                                <input
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-0 dark:border-gray-600"
                                                    type="checkbox"
                                                    checked={checkedItems.has(2)}
                                                    onChange={() => toggleCheck(2)}
                                                />
                                                <span className="material-symbols-outlined pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                    check
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <h3 className="font-bold text-gray-900 dark:text-white select-none">
                                                    Rotate and Secure JWT Secret
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Your{" "}
                                                    <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs dark:bg-gray-800">
                                                        JWT_SECRET
                                                    </code>{" "}
                                                    needs to be a cryptographically strong random string of at least 32
                                                    characters.
                                                </p>

                                                {/* Warning Callout */}
                                                <div className="mt-3 flex gap-3 rounded-lg border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-500/10 p-4">
                                                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-500 shrink-0">
                                                        warning
                                                    </span>
                                                    <div className="flex flex-col gap-1">
                                                        <h4 className="text-sm font-bold text-amber-800 dark:text-amber-500">
                                                            Security Critical
                                                        </h4>
                                                        <p className="text-sm text-amber-900/80 dark:text-amber-200/80">
                                                            Using default or weak secrets allows attackers to forge tokens and take
                                                            over accounts immediately.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 2: Database */}
                            <section className="flex flex-col gap-6" id="database">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                                        <span className="material-symbols-outlined">database</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Database Management
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* Checklist Item 3 */}
                                    <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 dark:hover:border-primary/50">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                                                <input
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-0 dark:border-gray-600"
                                                    type="checkbox"
                                                    checked={checkedItems.has(3)}
                                                    onChange={() => toggleCheck(3)}
                                                />
                                                <span className="material-symbols-outlined pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                    check
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <h3 className="font-bold text-gray-900 dark:text-white select-none">
                                                    Enable Connection Pooling
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Configure PgBouncer or Prisma Data Proxy to handle high concurrent
                                                    connections efficiently.
                                                </p>
                                                <div className="mt-2 rounded-lg bg-gray-900 p-4 relative group/code font-mono text-sm">
                                                    <span className="text-gray-500">// schema.prisma</span>
                                                    <br />
                                                    <span className="text-blue-300">datasource</span>{" "}
                                                    <span className="text-white">db {"{"}</span>
                                                    <br />
                                                    {"  "}
                                                    <span className="text-blue-300">provider</span>{" "}
                                                    <span className="text-white">=</span>{" "}
                                                    <span className="text-green-400">"postgresql"</span>
                                                    <br />
                                                    {"  "}
                                                    <span className="text-blue-300">url</span>{" "}
                                                    <span className="text-white">=</span>{" "}
                                                    <span className="text-white">env(</span>
                                                    <span className="text-green-400">"DATABASE_URL"</span>
                                                    <span className="text-white">)</span>
                                                    <br />
                                                    <span className="text-white">{"}"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Checklist Item 4 */}
                                    <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 dark:hover:border-primary/50">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                                                <input
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-0 dark:border-gray-600"
                                                    type="checkbox"
                                                    checked={checkedItems.has(4)}
                                                    onChange={() => toggleCheck(4)}
                                                />
                                                <span className="material-symbols-outlined pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                    check
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <h3 className="font-bold text-gray-900 dark:text-white select-none">
                                                    Apply Migrations
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Run migrations to ensure the production schema matches your application
                                                    logic.
                                                </p>
                                                <code className="mt-1 block w-fit rounded bg-gray-100 px-3 py-2 font-mono text-sm text-gray-800 dark:bg-gray-900 dark:text-gray-300">
                                                    npx prisma migrate deploy
                                                </code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3: Security */}
                            <section className="flex flex-col gap-6" id="security">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                                        <span className="material-symbols-outlined">shield_lock</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Security Hardening
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* Checklist Item 5 */}
                                    <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 dark:hover:border-primary/50">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                                                <input
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-0 dark:border-gray-600"
                                                    type="checkbox"
                                                    checked={checkedItems.has(5)}
                                                    onChange={() => toggleCheck(5)}
                                                />
                                                <span className="material-symbols-outlined pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                    check
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <h3 className="font-bold text-gray-900 dark:text-white select-none">
                                                    Restrict CORS
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Never use <code className="font-mono text-xs">*</code> in production.
                                                    Whitelist only your frontend domain.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Checklist Item 6 */}
                                    <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 dark:hover:border-primary/50">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                                                <input
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-0 dark:border-gray-600"
                                                    type="checkbox"
                                                    checked={checkedItems.has(6)}
                                                    onChange={() => toggleCheck(6)}
                                                />
                                                <span className="material-symbols-outlined pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                    check
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <h3 className="font-bold text-gray-900 dark:text-white select-none">
                                                    Enforce HTTPS
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Configure your load balancer or reverse proxy to redirect all HTTP traffic
                                                    to HTTPS.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Checklist Item 7 */}
                                    <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 dark:hover:border-primary/50">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                                                <input
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-0 dark:border-gray-600"
                                                    type="checkbox"
                                                    checked={checkedItems.has(7)}
                                                    onChange={() => toggleCheck(7)}
                                                />
                                                <span className="material-symbols-outlined pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                    check
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-bold text-gray-900 dark:text-white select-none">
                                                        Disable Introspection
                                                    </h3>
                                                    <span className="rounded bg-pink-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
                                                        GraphQL
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    If using Apollo Server, ensure introspection is disabled to prevent schema
                                                    scraping.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4: Performance */}
                            <section className="flex flex-col gap-6" id="performance">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                                        <span className="material-symbols-outlined">speed</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Performance Optimization
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* Checklist Item 8 */}
                                    <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 dark:hover:border-primary/50">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                                                <input
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-0 dark:border-gray-600"
                                                    type="checkbox"
                                                    checked={checkedItems.has(8)}
                                                    onChange={() => toggleCheck(8)}
                                                />
                                                <span className="material-symbols-outlined pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                    check
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <h3 className="font-bold text-gray-900 dark:text-white select-none">
                                                    Verify Indexes
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Check that frequently queried fields (foreign keys, search columns) have
                                                    database indexes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Checklist Item 9 */}
                                    <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 dark:hover:border-primary/50">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                                                <input
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-0 dark:border-gray-600"
                                                    type="checkbox"
                                                    checked={checkedItems.has(9)}
                                                    onChange={() => toggleCheck(9)}
                                                />
                                                <span className="material-symbols-outlined pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                    check
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <h3 className="font-bold text-gray-900 dark:text-white select-none">
                                                    Configure Caching
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Ensure Redis or Memcached is reachable and eviction policies are set
                                                    correctly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Table of Contents */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-0 flex flex-col gap-4 pt-2">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                                    On this page
                                </h4>
                                <nav className="flex flex-col gap-3 border-l border-gray-200 dark:border-border-dark pl-4">
                                    <a
                                        className="text-sm text-primary font-medium hover:text-primary transition-colors"
                                        href="#env-vars"
                                    >
                                        Environment Variables
                                    </a>
                                    <a
                                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                        href="#database"
                                    >
                                        Database Management
                                    </a>
                                    <a
                                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                        href="#security"
                                    >
                                        Security Hardening
                                    </a>
                                    <a
                                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                        href="#performance"
                                    >
                                        Performance
                                    </a>
                                </nav>

                                <div className="mt-8 rounded-lg bg-blue-50 dark:bg-primary/5 p-4 border border-blue-100 dark:border-primary/10">
                                    <h5 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
                                        <span className="material-symbols-outlined text-primary text-[20px]">help</span>
                                        Need Help?
                                    </h5>
                                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                                        Join our Discord server to chat with the Tenet team and community.
                                    </p>
                                    <a
                                        className="mt-3 block text-center rounded bg-white dark:bg-border-dark py-2 text-xs font-bold text-gray-900 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                                        href="#"
                                    >
                                        Join Discord
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}

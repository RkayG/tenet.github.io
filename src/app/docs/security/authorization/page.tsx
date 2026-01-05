import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authorization - Tenet Documentation",
    description:
        "Manage access control with Role-Based Access Control (RBAC), fine-grained Permissions, and intelligent Ownership verification strategies",
};

export default function AuthorizationPage() {
    return (
        <>
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative scroll-smooth">
                <div className="max-w-[1000px] mx-auto px-6 py-10 lg:px-12 lg:py-12 flex gap-12">
                    <article className="flex-1 min-w-0">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-sm mb-6 text-slate-500 dark:text-slate-400">
                            <a className="hover:text-primary transition-colors" href="#">
                                Docs
                            </a>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <a className="hover:text-primary transition-colors" href="#">
                                Security
                            </a>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span className="text-slate-900 dark:text-white font-medium">Authorization</span>
                        </div>

                        {/* Page Heading */}
                        <div className="mb-10">
                            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                                Authorization
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                                Manage access control with{" "}
                                <span className="text-primary font-medium">Role-Based Access Control (RBAC)</span>,
                                fine-grained <span className="text-primary font-medium">Permissions</span>, and
                                intelligent <span className="text-primary font-medium">Ownership</span> verification
                                strategies.
                            </p>
                        </div>

                        {/* Quick Overview */}
                        <div className="mb-12 p-6 rounded-xl border border-slate-200 dark:border-surface-border bg-slate-50 dark:bg-surface-dark/50">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                                In this guide
                            </h3>
                            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                                <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark">
                                    <span className="material-symbols-outlined text-primary">badge</span>
                                    <span className="text-sm font-medium dark:text-white">RBAC System</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark">
                                    <span className="material-symbols-outlined text-primary">key</span>
                                    <span className="text-sm font-medium dark:text-white">Permissions</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark">
                                    <span className="material-symbols-outlined text-primary">verified_user</span>
                                    <span className="text-sm font-medium dark:text-white">Ownership</span>
                                </div>
                            </div>
                        </div>

                        {/* Introduction */}
                        <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
                            <p className="text-slate-600 dark:text-slate-400 leading-7">
                                While authentication verifies who a user is, authorization determines what they can
                                do. Tenet provides a layered security model that allows you to mix and match
                                strategies depending on the complexity of your enterprise application.
                            </p>
                        </div>

                        {/* Section 1: RBAC */}
                        <section className="scroll-mt-24 mb-16" id="rbac">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center size-8 rounded bg-primary text-white font-bold text-lg">
                                    1
                                </span>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    Role-Based Access Control
                                </h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-7 mb-6">
                                The simplest way to secure endpoints is by checking the user's role. Tenet
                                automatically hydrates the{" "}
                                <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-surface-border text-sm font-mono text-slate-800 dark:text-slate-300">
                                    req.user
                                </code>{" "}
                                object with roles defined in your provider.
                            </p>

                            {/* Code Block */}
                            <div className="rounded-xl overflow-hidden bg-[#161b26] border border-surface-border shadow-lg mb-6">
                                <div className="flex items-center justify-between px-4 py-2 bg-[#1f2430] border-b border-surface-border">
                                    <span className="text-xs font-mono text-slate-400">
                                        controllers/user.controller.ts
                                    </span>
                                    <button className="text-slate-400 hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                    </button>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <pre className="font-mono text-sm leading-6">
                                        <code className="text-slate-300">
                                            {`import { Controller, Get, Authorize } from '@tenet/core';
import { Role } from '../enums/role.enum';

@Controller('/users')
export class UserController {

  // Only Admins can access this endpoint
  @Authorize([Role.ADMIN])
  @Get('/')
  getAllUsers() {
    return this.userService.findAll();
  }
}`}
                                        </code>
                                    </pre>
                                </div>
                            </div>

                            <div className="flex p-4 rounded-lg bg-primary/10 border-l-4 border-primary">
                                <div className="text-primary mt-0.5 mr-3">
                                    <span className="material-symbols-outlined">info</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                                        Hierarchy Support
                                    </p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                        Tenet supports role hierarchy out of the box. If a user has `SUPER_ADMIN` role,
                                        they automatically inherit permissions from `ADMIN`.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Permission System */}
                        <section className="scroll-mt-24 mb-16" id="permissions">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center size-8 rounded bg-primary text-white font-bold text-lg">
                                    2
                                </span>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    Permission System
                                </h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-7 mb-6">
                                For more granular control, use the permission system. Permissions are strings like{" "}
                                <code className="font-mono text-sm">resource:action</code>. This is useful when you
                                have dynamic roles or need to toggle features for specific users.
                            </p>

                            {/* Code Block */}
                            <div className="rounded-xl overflow-hidden bg-[#161b26] border border-surface-border shadow-lg mb-6">
                                <div className="flex items-center justify-between px-4 py-2 bg-[#1f2430] border-b border-surface-border">
                                    <span className="text-xs font-mono text-slate-400">
                                        services/document.service.ts
                                    </span>
                                    <button className="text-slate-400 hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                    </button>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <pre className="font-mono text-sm leading-6">
                                        <code className="text-slate-300">
                                            {`async publishDocument(user: User, docId: string) {
  if (!user.hasPermission('document:publish')) {
    throw new ForbiddenException('Insufficient permissions');
  }
  
  // Logic to publish document...
}`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Ownership */}
                        <section className="scroll-mt-24 mb-16" id="ownership">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center size-8 rounded bg-primary text-white font-bold text-lg">
                                    3
                                </span>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    Ownership Verification
                                </h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-7 mb-6">
                                A common pattern is verifying that a user owns the resource they are trying to
                                modify. Tenet provides a `OwnsResource` guard that checks the database automatically
                                based on the route parameter ID.
                            </p>

                            {/* Code Block */}
                            <div className="rounded-xl overflow-hidden bg-[#161b26] border border-surface-border shadow-lg mb-6">
                                <div className="flex items-center justify-between px-4 py-2 bg-[#1f2430] border-b border-surface-border">
                                    <span className="text-xs font-mono text-slate-400">
                                        controllers/profile.controller.ts
                                    </span>
                                    <button className="text-slate-400 hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                    </button>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <pre className="font-mono text-sm leading-6">
                                        <code className="text-slate-300">
                                            {`@Patch('/:id')
// Ensures User.id matches :id or user is Admin
@UseGuards(OwnsResource({ 
  entity: User, 
  bypassRoles: [Role.ADMIN] 
}))
updateProfile(@Param('id') id: string, @Body() data: UpdateProfileDto) {
  return this.userService.update(id, data);
}`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Feedback / Footer */}
                        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-surface-border">
                            <div className="flex justify-between items-center mb-10">
                                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                                    Was this page helpful?
                                </h4>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-lg border border-slate-200 dark:border-surface-border hover:bg-slate-50 dark:hover:bg-surface-border transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white">
                                        <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                                    </button>
                                    <button className="p-2 rounded-lg border border-slate-200 dark:border-surface-border hover:bg-slate-50 dark:hover:bg-surface-border transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white">
                                        <span className="material-symbols-outlined text-[20px]">thumb_down</span>
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    className="group flex flex-col p-4 rounded-xl border border-slate-200 dark:border-surface-border hover:border-primary/50 transition-all bg-white dark:bg-surface-dark/30"
                                    href="#"
                                >
                                    <span className="text-xs text-slate-500 mb-1">Previous</span>
                                    <span className="font-semibold text-primary group-hover:underline">
                                        Authentication
                                    </span>
                                </a>
                                <a
                                    className="group flex flex-col items-end p-4 rounded-xl border border-slate-200 dark:border-surface-border hover:border-primary/50 transition-all bg-white dark:bg-surface-dark/30"
                                    href="#"
                                >
                                    <span className="text-xs text-slate-500 mb-1">Next</span>
                                    <span className="font-semibold text-primary group-hover:underline">
                                        Encryption Strategy
                                    </span>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Right Sidebar (TOC) */}
                    <aside className="hidden xl:block w-[240px] flex-none">
                        <div className="sticky top-6">
                            <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
                                On this page
                            </h5>
                            <nav className="flex flex-col border-l border-slate-200 dark:border-surface-border pl-4 gap-3">
                                <a
                                    className="text-sm text-primary font-medium hover:text-primary transition-colors border-l-2 border-primary -ml-[17px] pl-4"
                                    href="#rbac"
                                >
                                    Role-Based Access
                                </a>
                                <a
                                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                    href="#permissions"
                                >
                                    Permission System
                                </a>
                                <a
                                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                    href="#ownership"
                                >
                                    Ownership Check
                                </a>
                            </nav>

                            <div className="mt-8 p-4 bg-gradient-to-br from-primary/20 to-transparent rounded-xl border border-primary/20">
                                <h6 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                                    Need Help?
                                </h6>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                                    Join our Discord community for real-time support.
                                </p>
                                <button className="w-full py-1.5 px-3 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-primary/20">
                                    Join Discord
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}

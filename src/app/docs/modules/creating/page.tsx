import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Creating Modules - Tenet Documentation",
    description:
        "A step-by-step guide to architecting scalable, secure, and self-contained domains within the Tenet framework",
};

export default function CreatingModulesPage() {
    return (
        <div className="flex flex-1 max-w-[1600px] w-full mx-auto">

            {/* Main Content */}
            <main className="flex-1 min-w-0 py-8 px-6 lg:px-12 xl:px-16 pb-20">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                    <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                        Docs
                    </a>
                    <span className="text-text-secondary/50 material-symbols-outlined" style={{ fontSize: "16px" }}>
                        chevron_right
                    </span>
                    <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                        Modules
                    </a>
                    <span className="text-text-secondary/50 material-symbols-outlined" style={{ fontSize: "16px" }}>
                        chevron_right
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">Creating Modules</span>
                </div>

                {/* Page Heading */}
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                        Creating Modules
                    </h1>
                    <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                        A step-by-step guide to architecting scalable, secure, and self-contained domains
                        within the Tenet framework using our CLI and prescribed patterns.
                    </p>
                </div>

                <hr className="border-gray-200 dark:border-border-dark mb-10" />

                {/* Content Body */}
                <div className="flex flex-col gap-12 max-w-4xl">
                    {/* Module Philosophy */}
                    <section className="scroll-mt-24" id="module-philosophy">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">psychology</span>
                            </div>
                            <h2 className="text-2xl font-bold">Module Philosophy</h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-7 mb-6">
                            In Tenet, a <strong>Module</strong> is a self-contained unit of business logic that
                            corresponds to a specific domain (e.g., Users, Billing, Notifications). This
                            architecture ensures that your application remains decoupled and testable as it
                            scales. Each module enforces strict boundaries—routes defined in one module should not
                            directly import services from another without going through the public API or
                            Dependency Injection container.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    Encapsulation
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    Keep database models, DTOs, and internal logic private to the module.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    Single Responsibility
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    A module should solve one specific business problem completely.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Directory Structure */}
                    <section className="scroll-mt-24" id="directory-structure">
                        <h2 className="text-2xl font-bold mb-4">Recommended Structure</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Tenet enforces a consistent directory structure to make navigating large codebases
                            predictable. Every module resides in{" "}
                            <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-surface-dark border border-gray-200 dark:border-border-dark text-sm font-mono text-primary">
                                src/modules/
                            </code>
                            .
                        </p>
                        <div className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-border-dark bg-[#0d1117]">
                            <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
                                <span className="text-xs font-mono text-gray-400">File Structure</span>
                            </div>
                            <pre className="p-5 overflow-x-auto text-sm font-mono text-gray-300 custom-scrollbar">
                                {`src/
└── modules/
    └── users/
        ├── index.ts           // Module entry point (exports)
        ├── users.routes.ts    // Express route definitions
        ├── users.service.ts   // Business logic & DB calls
        ├── users.controller.ts// Request/Response handling
        ├── users.schema.ts    // Zod/Joi validation schemas
        └── dtos/              // Data Transfer Objects`}
                            </pre>
                        </div>
                    </section>

                    {/* Step 1 */}
                    <section className="scroll-mt-24" id="step-1">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm">
                                    1
                                </div>
                                <div className="w-px h-full bg-gray-200 dark:bg-border-dark my-2"></div>
                            </div>
                            <div className="flex-1 pb-8">
                                <h3 className="text-xl font-bold mb-3">Scaffold the Module</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Use the Tenet CLI to generate the boilerplate code. This ensures all necessary
                                    files are created with the correct naming conventions.
                                </p>
                                <div className="relative rounded-lg overflow-hidden bg-[#0d1117] group">
                                    <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-700">
                                            <span className="material-symbols-outlined text-sm">content_copy</span>
                                        </button>
                                    </div>
                                    <pre className="p-4 overflow-x-auto text-sm font-mono text-white custom-scrollbar">
                                        <span className="text-green-400">$</span> tenet generate module users
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center size-8 rounded-full bg-gray-200 dark:bg-surface-dark dark:border dark:border-border-dark text-gray-500 dark:text-gray-300 font-bold text-sm">
                                    2
                                </div>
                                <div className="w-px h-full bg-gray-200 dark:bg-border-dark my-2"></div>
                            </div>
                            <div className="flex-1 pb-8">
                                <h3 className="text-xl font-bold mb-3">Define Routes</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Open <code className="text-sm font-mono bg-gray-100 dark:bg-surface-dark px-1 rounded">users.routes.ts</code>. Tenet uses a fluent router API that integrates
                                    validation middleware automatically.
                                </p>
                                <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-border-dark bg-[#0d1117] group">
                                    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
                                        <span className="text-xs font-mono text-gray-400">
                                            src/modules/users/users.routes.ts
                                        </span>
                                        <button className="text-xs text-gray-400 hover:text-white">Copy</button>
                                    </div>
                                    <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed custom-scrollbar text-gray-300">
                                        {`import { Router } from '@tenet/core';
import { UsersController } from './users.controller';
import { CreateUserSchema } from './users.schema';

export const userRoutes = Router();

userRoutes
  .get('/', UsersController.list)
  .get('/:id', UsersController.get)
  .post('/', {
     schema: CreateUserSchema,
     handler: UsersController.create
  });`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center size-8 rounded-full bg-gray-200 dark:bg-surface-dark dark:border dark:border-border-dark text-gray-500 dark:text-gray-300 font-bold text-sm">
                                    3
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3">Implement Service Logic</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Services should contain all business rules. Inject the Prisma client or other
                                    repositories via the constructor.
                                </p>
                                <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-border-dark bg-[#0d1117] group">
                                    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
                                        <span className="text-xs font-mono text-gray-400">
                                            src/modules/users/users.service.ts
                                        </span>
                                        <button className="text-xs text-gray-400 hover:text-white">Copy</button>
                                    </div>
                                    <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed custom-scrollbar text-gray-300">
                                        {`import { Service, Inject } from '@tenet/di';
import { PrismaClient } from '@prisma/client';

@Service()
export class UsersService {
  constructor(
    @Inject('PRISMA') private prisma: PrismaClient
  ) {}

  async createUser(data: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        ...data,
        active: true
      }
    });
  }
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section
                        className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 scroll-mt-24"
                        id="best-practices"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-primary">verified</span>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Best Practices</h2>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="size-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Use <strong>kebab-case</strong> for folder names (e.g.,{" "}
                                    <code className="text-xs font-mono bg-gray-100 dark:bg-surface-dark px-1 rounded">user-profiles</code>) and <strong>PascalCase</strong> for class names.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="size-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Keep controllers "thin". They should only handle HTTP concerns (status codes,
                                    headers) and delegate logic to services.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="size-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Always define Zod schemas for request body validation to ensure type safety from
                                    runtime to compile time.
                                </p>
                            </li>
                        </ul>
                    </section>

                    {/* Navigation Footer */}
                    <div className="flex justify-between mt-8 pt-8 border-t border-gray-200 dark:border-border-dark">
                        <a
                            className="group flex flex-col items-start gap-1 p-4 -ml-4 rounded-xl hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors"
                            href="#"
                        >
                            <span className="text-xs text-text-secondary uppercase tracking-wider font-semibold">
                                Previous
                            </span>
                            <div className="flex items-center gap-2 text-primary font-medium group-hover:underline">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Architecture Overview
                            </div>
                        </a>
                        <a
                            className="group flex flex-col items-end gap-1 p-4 -mr-4 rounded-xl hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors"
                            href="#"
                        >
                            <span className="text-xs text-text-secondary uppercase tracking-wider font-semibold">
                                Next
                            </span>
                            <div className="flex items-center gap-2 text-primary font-medium group-hover:underline">
                                Registering Modules
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </a>
                    </div>
                </div>
            </main>

            {/* Right Sidebar (Table of Contents) */}
            <aside className="hidden xl:block w-72 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto py-8 pr-8 pl-4">
                <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                        On this page
                    </h5>
                    <div className="flex flex-col gap-1 relative border-l border-gray-200 dark:border-border-dark pl-4">
                        {/* Active Indicator */}
                        <div className="absolute left-[-1px] top-1 h-5 w-[2px] bg-primary rounded-full transition-all duration-300 ease-out"></div>
                        <a
                            className="text-sm py-1 text-primary font-medium transition-colors"
                            href="#module-philosophy"
                        >
                            Module Philosophy
                        </a>
                        <a
                            className="text-sm py-1 text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
                            href="#directory-structure"
                        >
                            Directory Structure
                        </a>
                        <a
                            className="text-sm py-1 text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
                            href="#step-1"
                        >
                            Step 1: Scaffolding
                        </a>
                        <a
                            className="text-sm py-1 text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors pl-2"
                            href="#step-2"
                        >
                            Defining Routes
                        </a>
                        <a
                            className="text-sm py-1 text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors pl-2"
                            href="#step-3"
                        >
                            Service Logic
                        </a>
                        <a
                            className="text-sm py-1 text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
                            href="#best-practices"
                        >
                            Best Practices
                        </a>
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-gray-100 dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
                        <div className="flex flex-col gap-2">
                            <p className="text-xs font-semibold uppercase text-text-secondary">
                                Have questions?
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Join our Discord community to get help from the team.
                            </p>
                            <button className="mt-2 w-full py-2 px-4 bg-white dark:bg-[#2b2f3b] border border-gray-200 dark:border-border-dark rounded-lg text-sm font-medium hover:text-primary transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-base">forum</span>
                                Join Community
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

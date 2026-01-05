"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function DocsSidebarNew() {
    const pathname = usePathname();

    return (
        <aside className="hidden lg:block w-64 border-r border-border-dark sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-background-dark py-8 pl-8 pr-4">
            <div className="flex flex-col gap-8">
                {/* Getting Started */}
                <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 px-2">
                        Getting Started
                    </h3>
                    <div className="flex flex-col gap-1">
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/get-started"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/get-started"
                        >
                            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                            Quick Start
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/architecture"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/architecture"
                        >
                            <span className="material-symbols-outlined text-[20px]">schema</span>
                            Architecture
                        </Link>
                    </div>
                </div>

                {/* Core Concepts */}
                <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 px-2">
                        Core Concepts
                    </h3>
                    <div className="flex flex-col gap-1">
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/handlers"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/handlers"
                        >
                            <span className="material-symbols-outlined text-[20px]">settings_ethernet</span>
                            Handlers
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/multi-tenancy"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/multi-tenancy"
                        >
                            <span className="material-symbols-outlined text-[20px]">apartment</span>
                            Multi-Tenancy
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/middleware"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/middleware"
                        >
                            <span className="material-symbols-outlined text-[20px]">layers</span>
                            Middleware
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/validation"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/validation"
                        >
                            <span className="material-symbols-outlined text-[20px]">check_circle</span>
                            Validation
                        </Link>
                    </div>
                </div>

                {/* Modules */}
                <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 px-2">
                        Modules
                    </h3>
                    <div className="flex flex-col gap-1">
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/modules/creating"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/modules/creating"
                        >
                            <span className="material-symbols-outlined text-[20px]">extension</span>
                            Creating Modules
                        </Link>
                    </div>
                </div>

                {/* Security */}
                <div>
                    <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 px-2 ${pathname.startsWith("/docs/security") ? "text-primary" : "text-white"
                        }`}>
                        Security
                    </h3>
                    <div className="flex flex-col gap-1">
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/security/authentication"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/security/authentication"
                        >
                            <span className="material-symbols-outlined text-[20px]">lock</span>
                            Authentication
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/security/authorization"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/security/authorization"
                        >
                            <span className="material-symbols-outlined text-[20px]">shield</span>
                            Authorization
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/security/audit-logging"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/security/audit-logging"
                        >
                            <span className={`material-symbols-outlined text-[20px] ${pathname === "/docs/security/audit-logging" ? "fill-current" : ""
                                }`}>fact_check</span>
                            Audit Logging
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/security/rate-limiting"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/security/rate-limiting"
                        >
                            <span className="material-symbols-outlined text-[20px]">speed</span>
                            Rate Limiting
                        </Link>
                        <Link
                            className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${pathname === "/docs/security/encryption"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/security/encryption"
                        >
                            Data Encryption
                        </Link>
                    </div>
                </div>

                {/* Deployment */}
                <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 px-2">
                        Deployment
                    </h3>
                    <div className="flex flex-col gap-1">
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/deployment/production-checklist"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/deployment/production-checklist"
                        >
                            <span className="material-symbols-outlined text-[20px]">checklist</span>
                            Production Checklist
                        </Link>
                        <Link
                            className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${pathname === "/docs/deployment/docker"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/deployment/docker"
                        >
                            Docker
                        </Link>
                        <Link
                            className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${pathname === "/docs/deployment/serverless"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/deployment/serverless"
                        >
                            Serverless
                        </Link>
                    </div>
                </div>

                {/* Monitoring */}
                <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 px-2">
                        Monitoring
                    </h3>
                    <div className="flex flex-col gap-1">
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/monitoring/metrics"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/monitoring/metrics"
                        >
                            <span className="material-symbols-outlined text-[20px]">monitoring</span>
                            Metrics
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/monitoring/tracing"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/monitoring/tracing"
                        >
                            <span className="material-symbols-outlined text-[20px]">timeline</span>
                            Tracing
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === "/docs/monitoring/logging"
                                ? "font-medium text-primary bg-primary/10 border-l-2 border-primary"
                                : "text-text-secondary hover:text-white hover:bg-surface-dark"
                                }`}
                            href="/docs/monitoring/logging"
                        >
                            <span className="material-symbols-outlined text-[20px]">description</span>
                            Logging
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
}

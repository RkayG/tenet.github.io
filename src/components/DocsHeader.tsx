"use client";

import Link from "next/link";

export function DocsHeader() {
    return (
        <header className="sticky top-0 z-50 flex h-16 w-full items-center border-b border-gray-200 dark:border-border-dark bg-white dark:bg-[#111318]/95 backdrop-blur px-6 justify-between">
            <div className="flex items-center gap-4 text-white">
                <div className="size-8 text-primary">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path
                            clipRule="evenodd"
                            d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                    Tenet Docs
                </h2>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
                <label className="relative w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-secondary">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </span>
                    <input
                        className="w-full bg-gray-100 dark:bg-border-dark border-none rounded-lg py-2 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-text-secondary focus:ring-2 focus:ring-primary"
                        placeholder="Search documentation..."
                        type="text"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-xs text-text-secondary border border-gray-600 rounded px-1.5 py-0.5">
                            ⌘K
                        </span>
                    </div>
                </label>
            </div>

            <div className="flex items-center gap-4">
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
                    <Link className="hover:text-primary transition-colors" href="#">
                        Guide
                    </Link>
                    <Link className="hover:text-primary transition-colors" href="#">
                        API Reference
                    </Link>
                    <Link className="text-white" href="#">
                        Community
                    </Link>
                </nav>

                <div className="w-px h-6 bg-border-dark hidden md:block"></div>

                <div className="flex gap-3">
                    <a
                        className="text-text-secondary hover:text-white transition-colors"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-2.133 1.03-2.882-.103-.253-.447-1.364.099-2.839 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.475.201 2.586.1 2.838.64.756 1.025 1.791 1.025 2.882 0 3.847-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}

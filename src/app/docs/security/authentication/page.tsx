import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentication Strategies - Tenet Documentation",
    description:
        "Learn about JWT, API Keys, and OAuth 2.0 authentication strategies in Tenet Framework",
};

export default function AuthenticationStrategiesPage() {
    return (
        <>
            {/* Main Content */}
            <main className="flex-1 min-w-0 py-8 px-6 md:px-12 lg:pr-8 xl:pr-12">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
                        <a className="hover:text-primary transition-colors" href="#">
                            Docs
                        </a>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        <a className="hover:text-primary transition-colors" href="#">
                            Security
                        </a>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        <span className="text-white font-medium">Authentication Strategies</span>
                    </div>

                    {/* Page Title & Header */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                            Authentication Strategies
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-text-secondary leading-relaxed">
                            Tenet provides a unified interface for securing your API endpoints using
                            industry-standard protocols. Out of the box, we support JWT, API Keys, and OAuth 2.0
                            strategies with minimal configuration.
                        </p>
                    </div>

                    {/* Strategy Tabs */}
                    <div className="mb-8 border-b border-border-dark">
                        <div className="flex gap-8">
                            <button className="flex items-center gap-2 pb-3 border-b-2 border-primary text-primary font-medium text-sm">
                                <span className="material-symbols-outlined text-[20px]">token</span>
                                JWT Strategy
                            </button>
                            <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-text-secondary hover:text-white font-medium text-sm transition-colors">
                                <span className="material-symbols-outlined text-[20px]">key</span>
                                API Key
                            </button>
                            <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-text-secondary hover:text-white font-medium text-sm transition-colors">
                                <span className="material-symbols-outlined text-[20px]">link</span>
                                OAuth 2.0
                            </button>
                        </div>
                    </div>

                    {/* Content Section: JWT */}
                    <section className="space-y-12">
                        {/* Configuration */}
                        <div className="scroll-mt-24" id="jwt-configuration">
                            <h2 className="text-2xl font-bold text-white mb-4 group flex items-center gap-2">
                                Configuration
                                <a
                                    className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                    href="#jwt-configuration"
                                >
                                    #
                                </a>
                            </h2>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                The JWT strategy is ideal for stateless authentication in SPAs and mobile apps. To
                                enable it, import the strategy and configure it in your{" "}
                                <code className="bg-surface-dark px-1.5 py-0.5 rounded text-sm text-accent-gold font-mono">
                                    tenet.config.ts
                                </code>{" "}
                                file.
                            </p>

                            {/* Code Block */}
                            <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-border-dark shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-border-dark">
                                    <span className="text-xs text-text-secondary font-mono">
                                        src/config/auth.ts
                                    </span>
                                    <button className="text-text-secondary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                    </button>
                                </div>
                                <div className="p-4 overflow-x-auto custom-scrollbar">
                                    <pre className="font-mono text-sm leading-6 text-gray-300">
                                        {`import { TenetAuth } from '@tenet/auth';
import { JWTStrategy } from '@tenet/auth-jwt';

export const auth = new TenetAuth({
  strategies: [
    new JWTStrategy({
      secret: process.env.JWT_SECRET,
      expiresIn: '15m', 
      refreshExpiresIn: '7d',
      issuer: 'tenet.api',
      audience: 'tenet.client'
    })
  ]
});`}
                                    </pre>
                                </div>
                            </div>

                            {/* Alert Box */}
                            <div className="mt-6 flex gap-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                                <span className="material-symbols-outlined text-yellow-500 mt-0.5">warning</span>
                                <div>
                                    <h4 className="text-sm font-bold text-yellow-500 mb-1">Security Warning</h4>
                                    <p className="text-sm text-text-secondary">
                                        Never commit your{" "}
                                        <code className="text-white bg-black/20 px-1 rounded">JWT_SECRET</code> to
                                        version control. Always use environment variables or a secret manager.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Token Generation */}
                        <div className="scroll-mt-24" id="jwt-generation">
                            <h2 className="text-2xl font-bold text-white mb-4 group flex items-center gap-2">
                                Token Generation & Refresh
                                <a
                                    className="opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                                    href="#jwt-generation"
                                >
                                    #
                                </a>
                            </h2>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                Once configured, you can issue tokens using the{" "}
                                <code className="bg-surface-dark px-1.5 py-0.5 rounded text-sm text-accent-gold font-mono">
                                    sign()
                                </code>{" "}
                                method. Tenet automatically handles the refresh token rotation mechanism if enabled.
                            </p>

                            {/* Code Block */}
                            <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-border-dark shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-border-dark">
                                    <span className="text-xs text-text-secondary font-mono">
                                        src/controllers/auth.controller.ts
                                    </span>
                                    <button className="text-text-secondary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                    </button>
                                </div>
                                <div className="p-4 overflow-x-auto custom-scrollbar">
                                    <pre className="font-mono text-sm leading-6 text-gray-300">
                                        {`public async login(req: Request, res: Response) {
  const user = await UserService.verifyCredentials(req.body);
  
  // Generate access and refresh tokens
  const { accessToken, refreshToken } = await auth.sign(user);

  return res.json({
    status: 'success',
    data: { accessToken, refreshToken }
  });
}

public async refresh(req: Request, res: Response) {
  const { refreshToken } = req.body;
  
  // Verify refresh token and issue new pair
  const newTokens = await auth.rotate(refreshToken);
  
  return res.json({ data: newTokens });
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* API Key Section */}
                        <div className="scroll-mt-24 pt-8 border-t border-border-dark" id="api-keys">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-primary text-3xl">vpn_key</span>
                                <h2 className="text-2xl font-bold text-white">Machine-to-Machine: API Keys</h2>
                            </div>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                For server-to-server communication, API Keys offer a persistent authentication
                                mechanism. Tenet includes built-in hashing, scoping, and key rotation helpers.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="p-6 bg-surface-dark rounded-lg border border-border-dark">
                                    <div className="flex items-center gap-2 mb-3 text-white font-medium">
                                        <span className="material-symbols-outlined text-accent-gold">security</span>
                                        Secure Hashing
                                    </div>
                                    <p className="text-sm text-text-secondary">
                                        Keys are never stored in plain text. We use Argon2id hashing by default.
                                    </p>
                                </div>
                                <div className="p-6 bg-surface-dark rounded-lg border border-border-dark">
                                    <div className="flex items-center gap-2 mb-3 text-white font-medium">
                                        <span className="material-symbols-outlined text-accent-gold">
                                            published_with_changes
                                        </span>
                                        Rotation Policies
                                    </div>
                                    <p className="text-sm text-text-secondary">
                                        Enforce automatic expiration and zero-downtime rotation for compromised keys.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer Pagination */}
                    <div className="mt-16 pt-8 border-t border-border-dark flex justify-between">
                        <a className="group flex flex-col items-start gap-2" href="#">
                            <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                                Previous
                            </span>
                            <div className="flex items-center gap-2 text-primary font-medium group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                                Security Overview
                            </div>
                        </a>
                        <a className="group flex flex-col items-end gap-2" href="#">
                            <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                                Next
                            </span>
                            <div className="flex items-center gap-2 text-primary font-medium group-hover:text-white transition-colors">
                                Authorization (RBAC)
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </a>
                    </div>

                    {/* Page Footer */}
                    <footer className="mt-16 py-8 border-t border-border-dark text-center">
                        <p className="text-sm text-text-secondary">
                            © 2024 Tenet Framework. Released under the MIT License.
                        </p>
                    </footer>
                </div>
            </main>

            {/* Right Sidebar: On This Page */}
            <aside className="hidden xl:block w-64 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pr-8 pl-4">
                <div className="border-l border-border-dark pl-4">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                        On This Page
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a
                                className="text-primary font-medium hover:text-primary transition-colors block"
                                href="#jwt-configuration"
                            >
                                Configuration
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-text-secondary hover:text-white transition-colors block"
                                href="#jwt-generation"
                            >
                                Token Generation
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-text-secondary hover:text-white transition-colors block"
                                href="#jwt-verify"
                            >
                                Verification Middleware
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-text-secondary hover:text-white transition-colors block"
                                href="#api-keys"
                            >
                                API Keys
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-text-secondary hover:text-white transition-colors block"
                                href="#oauth"
                            >
                                OAuth 2.0
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

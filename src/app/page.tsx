"use client";

export default function Home() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm i @tenet/core");
  };

  return (
    <>
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#2a2e37] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-primary dark:text-white flex items-center justify-center size-8 bg-primary/10 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Tenet</span>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="#features">Features</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="/get-started">Docs</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="#enterprise">Enterprise</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="#blog">Blog</a>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center justify-center h-9 px-4 rounded-lg text-sm font-semibold text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                Log In
              </button>
              <button className="flex items-center justify-center h-9 px-4 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/20 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center relative overflow-hidden pt-10 pb-20 lg:pt-20">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] animate-blob" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Hero Content */}
            <div className="flex flex-col gap-6 max-w-2xl lg:max-w-none text-center lg:text-left mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-hover dark:text-blue-300 text-xs font-semibold self-center lg:self-start mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                v1.0 is now available
              </div>

              <h1 className="text-4xl font-extrabold tracking-wider font-handwriting sm:text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 dark:text-white">
                Enterprise API <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Built Right</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                The enterprise-ready API framework for Node.js, Express, and Prisma. Baked-in security, compliance, and multi-tenancy from line one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-4">
                <a href="/get-started" className="h-12 px-6 rounded-lg bg-primary hover:bg-primary-hover text-white text-base font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 min-w-[160px] justify-center">
                  Get Started
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>

                <div className="group relative flex items-center">
                  <div className="h-12 pl-4 pr-12 rounded-lg bg-slate-100 dark:bg-[#1e2330] border border-slate-200 dark:border-[#2a2e37] text-slate-600 dark:text-slate-300 font-mono text-sm flex items-center min-w-[240px]">
                    <span className="text-blue-500 mr-2">$</span> npm i @tenet/api
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="absolute right-2 p-2 rounded-md hover:bg-slate-200 dark:hover:bg-[#2a2e37] text-slate-500 dark:text-slate-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <span className="material-symbols-outlined text-[18px]">content_copy</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 text-sm text-slate-500 dark:text-slate-500">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-green-500">check_circle</span>
                  <span>Open Source</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-green-500">check_circle</span>
                  <span>MIT License</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-green-500">check_circle</span>
                  <span>TypeScript</span>
                </div>
              </div>
            </div>

            {/* Hero Visual (Code Block) */}
            <div className="relative w-full max-w-[600px] lg:w-full mx-auto group">
              {/* Glow effect behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              {/* Code Window */}
              <div className="relative rounded-xl bg-[#0f1117] border border-[#2a2e37] shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#2a2e37]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-500">route.ts</div>
                  <div className="w-12"></div>
                </div>

                {/* Code Content */}
                <div className="p-6 overflow-x-auto custom-scrollbar">
                  <pre className="font-mono text-sm leading-relaxed text-slate-300"><code><span className="text-purple-400">import</span> {`{ createTenantHandler }`} <span className="text-purple-400">from</span> <span className="text-green-400">'@tenet/api'</span>;{'\n'}
                    <span className="text-purple-400">import</span> {`{ z }`} <span className="text-purple-400">from</span> <span className="text-green-400">'zod'</span>;{'\n'}
                    {'\n'}
                    <span className="text-purple-400">export</span> <span className="text-purple-400">const</span> handler = <span className="text-yellow-300">createTenantHandler</span>({`{`}{'\n'}
                    {'  '}schema: z.<span className="text-blue-400">object</span>({`{`}{'\n'}
                    {'    '}name: z.<span className="text-blue-400">string</span>(),{'\n'}
                    {'    '}description: z.<span className="text-blue-400">string</span>().<span className="text-blue-400">optional</span>(),{'\n'}
                    {'  '}{`}`}),{'\n'}
                    {'  '}allowedRoles: [<span className="text-green-400">'OWNER'</span>, <span className="text-green-400">'MANAGER'</span>],{'\n'}
                    {'  '}requireOwnership: {`{`}{'\n'}
                    {'    '}table: <span className="text-green-400">'project'</span>,{'\n'}
                    {'    '}resourceIdParam: <span className="text-green-400">'id'</span>,{'\n'}
                    {'  '}{`}`},{'\n'}
                    {'  '}auditConfig: {`{`}{'\n'}
                    {'    '}trackDataChanges: <span className="text-blue-400">true</span>,{'\n'}
                    {'    '}retentionCategory: <span className="text-green-400">'compliance'</span>,{'\n'}
                    {'  '}{`}`},{'\n'}
                    {'  '}handler: <span className="text-purple-400">async</span> ({`{ input, tenantId, prisma }`}) =&gt; {`{`}{'\n'}
                    {'    '}<span className="text-purple-400">return</span> <span className="text-purple-400">await</span> prisma.project.<span className="text-blue-400">create</span>({`{`}{'\n'}
                    {'      '}data: {`{ ...input, tenantId }`}{'\n'}
                    {'    '}{`}`});{'\n'}
                    {'  '}{`}`}{'\n'}
                    {`}`});</code></pre>
                </div>

                {/* Status Bar */}
                <div className="flex items-center gap-4 px-4 py-2 bg-[#161b22] border-t border-[#2a2e37] text-[10px] font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Online</span>
                  </div>
                  <div>TypeScript 5.2</div>
                  <div className="ml-auto">Ln 14, Col 28</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust / Stats Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group p-6 rounded-xl border border-slate-200 dark:border-[#2a2e37] bg-white dark:bg-[#1a1f2e] hover:border-primary/50 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="mb-2 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <span className="material-symbols-outlined text-[20px]">shield</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Security</p>
                <p className="text-slate-900 dark:text-white text-lg font-bold">SOC2 Ready</p>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-slate-200 dark:border-[#2a2e37] bg-white dark:bg-[#1a1f2e] hover:border-primary/50 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="mb-2 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Privacy</p>
                <p className="text-slate-900 dark:text-white text-lg font-bold">HIPAA Compliant</p>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-slate-200 dark:border-[#2a2e37] bg-white dark:bg-[#1a1f2e] hover:border-primary/50 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="mb-2 w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Compliance</p>
                <p className="text-slate-900 dark:text-white text-lg font-bold">GDPR Ready</p>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-slate-200 dark:border-[#2a2e37] bg-white dark:bg-[#1a1f2e] hover:border-primary/50 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="mb-2 w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Standard</p>
                <p className="text-slate-900 dark:text-white text-lg font-bold">ISO 27001</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

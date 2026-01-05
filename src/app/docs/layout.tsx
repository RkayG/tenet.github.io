import { DocsHeader } from "@/components/DocsHeader";
import { DocsSidebarNew } from "@/components/DocsSidebarNew";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <DocsHeader />

            <div className="flex flex-1 max-w-[1440px] w-full mx-auto">
                <DocsSidebarNew />
                {children}
            </div>
        </div>
    );
}

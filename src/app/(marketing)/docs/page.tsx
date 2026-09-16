import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Documentation - ShipOnClick",
    description: "Learn how to use, configure, and customize the ShipOnClick SaaS starter kit.",
};

// Simple helper to read markdown files for rendering
function getMarkdownContent(filename: string) {
    try {
        const filePath = path.join(process.cwd(), "docs", filename);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, "utf8");
            // Basic parsing to strip markdown syntax just for preview/display
            // In a real app we'd use marked/react-markdown, but keeping it simple for the single-page hub
            return content.replace(/^#+ (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-2 text-zinc-100">$1</h3>')
                .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                .replace(/`(.*?)`/gim, '<code class="bg-zinc-800 text-zinc-200 px-1 py-0.5 rounded text-sm">$1</code>')
                .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-primary hover:underline">$1</a>')
                .replace(/\n/gim, '<br />');
        }
    } catch (e) {
        console.error("Failed to read doc file:", e);
    }
    return "Documentation content not found.";
}

export default function DocsPage() {
    return (
        <div className="min-h-screen py-24 px-6 md:px-12 bg-zinc-950 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-50 sm:text-5xl mb-4">
                        Documentation
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Everything you need to build your SaaS with ShipOnClick.
                    </p>
                </div>

                <div className="grid gap-12">
                    
                    {/* Getting Started Section */}
                    <section id="getting-started" className="glass-card p-8 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6 border-b border-border-muted pb-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                <span className="text-xl">🚀</span>
                            </div>
                            <h2 className="text-2xl font-semibold text-zinc-100">Getting Started</h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-zinc-300">
                            <p className="mb-4">Follow these simple steps to get your project running locally.</p>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-zinc-200">1. Clone & Install</h4>
                                    <pre className="bg-zinc-900 p-4 rounded-lg mt-2 text-sm text-zinc-300 border border-zinc-800 overflow-x-auto">
                                        <code>
                                            git clone &lt;your-repo-url&gt;{'\n'}
                                            cd &lt;project-name&gt;/app{'\n'}
                                            npm install
                                        </code>
                                    </pre>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-zinc-200">2. Configure Environment</h4>
                                    <p className="text-sm mt-1 mb-2">Copy the `.env.example` file to `.env` and fill in the required variables (DATABASE_URL, AUTH_SECRET, etc).</p>
                                    <pre className="bg-zinc-900 p-4 rounded-lg text-sm text-zinc-300 border border-zinc-800">
                                        <code>cp .env.example .env</code>
                                    </pre>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-zinc-200">3. Setup Database</h4>
                                    <pre className="bg-zinc-900 p-4 rounded-lg mt-2 text-sm text-zinc-300 border border-zinc-800">
                                        <code>
                                            npm run db:push{'\n'}
                                            npm run db:seed
                                        </code>
                                    </pre>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-zinc-200">4. Run Development Server</h4>
                                    <pre className="bg-zinc-900 p-4 rounded-lg mt-2 text-sm text-zinc-300 border border-zinc-800">
                                        <code>npm run dev</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* AI Agent Onboarding */}
                    <section id="ai-agents" className="glass-card p-8 scroll-mt-24 border-indigo-500/30">
                        <div className="flex items-center gap-3 mb-6 border-b border-border-muted pb-4">
                            <div className="h-10 w-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                <span className="text-xl">🤖</span>
                            </div>
                            <h2 className="text-2xl font-semibold text-zinc-100">AI Agent Onboarding</h2>
                        </div>
                        <div className="text-zinc-300 space-y-4">
                            <p>
                                ShipOnClick is built for AI coding assistants (Cursor, Antigravity, Claude, etc). We include a complete knowledge graph and onboarding skill so your AI instantly understands the architecture.
                            </p>
                            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 mt-4">
                                <p className="font-medium text-indigo-200 mb-2">Quick Start for AI:</p>
                                <p className="text-sm text-indigo-100/70">
                                    Open your AI assistant and type <code className="bg-indigo-950 px-1.5 py-0.5 rounded text-indigo-300 font-mono">/onboard</code> as your first prompt.
                                </p>
                            </div>
                            <p className="text-sm mt-4">
                                This triggers the AI to read the <code className="bg-zinc-800 px-1 rounded">AGENTS.md</code> file, architecture documentation, and graphify output, giving it complete context without burning tokens reading individual source files.
                            </p>
                        </div>
                    </section>

                    {/* Environment Variables */}
                    <section id="environment" className="glass-card p-8 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6 border-b border-border-muted pb-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                <span className="text-xl">⚙️</span>
                            </div>
                            <h2 className="text-2xl font-semibold text-zinc-100">Configuration</h2>
                        </div>
                        <div className="text-zinc-300 space-y-4">
                            <p>
                                The application relies on environment variables for configuration. Below are the critical ones required to start the app.
                            </p>
                            
                            <div className="overflow-x-auto mt-4">
                                <table className="w-full text-sm text-left border-collapse">
                                    <thead className="bg-zinc-900 text-zinc-300">
                                        <tr>
                                            <th className="px-4 py-3 rounded-tl-lg border-b border-zinc-800">Variable</th>
                                            <th className="px-4 py-3 border-b border-zinc-800">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800/50">
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-xs text-primary">DATABASE_URL</td>
                                            <td className="px-4 py-3 text-zinc-400">PostgreSQL connection string (e.g., Supabase or Neon).</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-xs text-primary">AUTH_SECRET</td>
                                            <td className="px-4 py-3 text-zinc-400">Random 32+ char string used to hash tokens.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-xs text-primary">NEXT_PUBLIC_APP_URL</td>
                                            <td className="px-4 py-3 text-zinc-400">The absolute URL of your deployment (http://localhost:3000 for dev).</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-xs text-primary">AUTH_GOOGLE_ID</td>
                                            <td className="px-4 py-3 text-zinc-400">Google OAuth Client ID.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-xs text-primary">LEMONSQUEEZY_API_KEY</td>
                                            <td className="px-4 py-3 text-zinc-400">API Key from your LemonSqueezy dashboard.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Architecture link */}
                    <section className="glass-card p-8 border-dashed border-zinc-700 bg-zinc-900/30">
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-100 mb-2">Deep Dive Architecture & Developer Handoff</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                The full data models, authentication flow, billing pipeline, and file structure mappings are meticulously documented in the complete codebase. When you purchase the Builder Plan, you receive the comprehensive developer handover documentation inside the private repository, making it effortless to understand the entire architecture and continue scaling.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

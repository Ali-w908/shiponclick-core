'use client';

import { useState } from 'react';

type OSType = 'mac-linux' | 'windows-cmd' | 'windows-ps';
type FormatType = 'descriptive' | 'example';

export function CliInstructions() {
    const [os, setOs] = useState<OSType>('mac-linux');
    const [format, setFormat] = useState<FormatType>('example');
    const [copied, setCopied] = useState(false);

    const commands = {
        'mac-linux': {
            descriptive: "git clone https://github.com/Ali-w908/nextjs-saas-starter-kit.git <your SaaS's folder name> && cd <your SaaS's folder name> && npm install && node scripts/setup.js \"<your app's name>\"",
            example: 'git clone https://github.com/Ali-w908/nextjs-saas-starter-kit.git my-SaaS && cd my-SaaS && npm install && node scripts/setup.js "My SaaS"'
        },
        'windows-cmd': {
            descriptive: "git clone https://github.com/Ali-w908/nextjs-saas-starter-kit.git <your SaaS's folder name> && cd <your SaaS's folder name> && npm install && node scripts/setup.js \"<your app's name>\"",
            example: 'git clone https://github.com/Ali-w908/nextjs-saas-starter-kit.git my-SaaS && cd my-SaaS && npm install && node scripts/setup.js "My SaaS"'
        },
        'windows-ps': {
            descriptive: "git clone https://github.com/Ali-w908/nextjs-saas-starter-kit.git <your SaaS's folder name> ; cd <your SaaS's folder name> ; npm install ; node scripts/setup.js \"<your app's name>\"",
            example: 'git clone https://github.com/Ali-w908/nextjs-saas-starter-kit.git my-SaaS ; cd my-SaaS ; npm install ; node scripts/setup.js "My SaaS"'
        }
    };

    const currentCommand = commands[os][format];

    const handleCopy = () => {
        navigator.clipboard.writeText(currentCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="mt-12">
            <div className="mb-6">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 font-heading">
                    Initialize Your SaaS
                </h2>
                <p className="text-base text-zinc-400 mt-2 max-w-2xl">
                    Run this command in your terminal to scaffold your application. The setup script will completely configure your environment, database, and remove all our branding so you can start fresh.
                </p>
            </div>

            <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/50 overflow-hidden shadow-2xl">
                {/* Top Control Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-zinc-800/60 bg-zinc-900/50">
                    {/* OS Selection */}
                    <div className="flex bg-zinc-950/50 p-1 rounded-lg border border-zinc-800/40">
                        <button 
                            onClick={() => setOs('mac-linux')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${os === 'mac-linux' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
                        >
                            macOS / Linux
                        </button>
                        <button 
                            onClick={() => setOs('windows-cmd')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${os === 'windows-cmd' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
                        >
                            Windows CMD
                        </button>
                        <button 
                            onClick={() => setOs('windows-ps')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${os === 'windows-ps' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
                        >
                            PowerShell
                        </button>
                    </div>

                    {/* Format Selection */}
                    <div className="flex bg-zinc-950/50 p-1 rounded-lg border border-zinc-800/40">
                        <button 
                            onClick={() => setFormat('example')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${format === 'example' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
                        >
                            Example
                        </button>
                        <button 
                            onClick={() => setFormat('descriptive')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${format === 'descriptive' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
                        >
                            Descriptive
                        </button>
                    </div>
                </div>

                {/* Command Display area */}
                <div className="relative p-6 bg-[#0d1117] font-mono text-sm leading-relaxed overflow-x-auto">
                    <pre className="text-zinc-300 whitespace-pre-wrap break-all pr-12">
                        {currentCommand.split(' ').map((word, i) => {
                            if (['git', 'cd', 'npm', 'node'].includes(word)) return <span key={i} className="text-emerald-400">{word} </span>;
                            if (word.startsWith('"') || word.startsWith("'<") || word.startsWith("<")) return <span key={i} className="text-amber-300">{word} </span>;
                            if (['&&', ';'].includes(word)) return <span key={i} className="text-zinc-500 font-bold">{word} </span>;
                            return <span key={i}>{word} </span>;
                        })}
                    </pre>

                    <button 
                        onClick={handleCopy}
                        className="absolute top-4 right-4 p-2 rounded-md bg-zinc-800/50 hover:bg-zinc-700/80 text-zinc-400 hover:text-zinc-200 transition-colors border border-zinc-700/50"
                        title="Copy command"
                    >
                        {copied ? (
                            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        )}
                    </button>
                </div>
            </div>
            
            {/* Context / Information Footer */}
            <div className="mt-6 flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="space-y-1 text-sm text-zinc-500">
                    <p>This command securely clones the boilerplate, initializes a fresh Git history, and runs the interactive <code className="text-zinc-400 bg-zinc-800/50 px-1 py-0.5 rounded">setup.js</code> script.</p>
                    <p>The script configures your <code className="text-zinc-400 bg-zinc-800/50 px-1 py-0.5 rounded">.env</code>, establishes your database schema, and strips our branding automatically.</p>
                </div>
            </div>
        </div>
    );
}

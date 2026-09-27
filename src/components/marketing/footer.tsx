import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

export function Footer() {
    return (
        <footer className="bg-background-deep relative z-10 overflow-hidden border-t border-white/5">
            {/* Massive Brand Watermark */}
            <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1440px] flex justify-center opacity-[0.02]">
                <span className="text-[12vw] 2xl:text-[200px] font-bold tracking-tighter uppercase whitespace-nowrap">
                    ShipOnClick
                </span>
            </div>

            <div className="mx-auto max-w-[1440px] px-8 md:px-16 w-full pt-32 pb-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32 pb-32">
                    
                    {/* Left: Brand & Vision */}
                    <div className="max-w-md space-y-8">
                        <Link href="/" className="flex items-center gap-2.5">
                            <span className="text-[20px] font-medium tracking-[0.08em] uppercase text-white font-heading">
                                ShipOnClick
                            </span>
                        </Link>
                        <p className="text-[15px] text-silver-mist leading-[1.8]">
                            Engineered for AI agents. Build, iterate, and scale with a codebase that never drifts from your vision.
                        </p>
                        
                        <div className="pt-4 flex gap-4">
                            <a href="https://github.com/Ali-w908/shiponclick-core" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-silver-mist hover:text-white hover:bg-white/10 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: Ultra-minimal Links */}
                    <div className="flex gap-16 sm:gap-24">
                        <div>
                            <ul className="space-y-6 text-[14px] text-text-muted">
                                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                                <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-6 text-[14px] text-text-muted">
                                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center border-t border-white/5">
                    <p className="text-[13px] text-text-dim">
                        &copy; {new Date().getFullYear()} ShipOnClick.
                    </p>
                </div>
            </div>
        </footer>
    );
}

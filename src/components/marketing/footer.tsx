import Link from 'next/link';

import { Logo } from '@/components/ui/logo';

export function Footer() {
    return (
        <footer className="border-t border-zinc-800/50">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                                <Logo className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-lg font-bold text-zinc-50">
                                Ship<span className="gradient-text">OnClick</span>
                            </span>
                        </Link>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            The AI-ready SaaS starter kit.
                            From idea to shipped product in one click.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-zinc-300">Product</h4>
                        <ul className="space-y-2.5 text-sm text-zinc-500">
                            <li><Link href="/#features" className="hover:text-zinc-300 transition-colors">Features</Link></li>
                            <li><Link href="/#how-it-works" className="hover:text-zinc-300 transition-colors">How It Works</Link></li>
                            <li><Link href="/pricing" className="hover:text-zinc-300 transition-colors">Pricing</Link></li>
                            <li><Link href="/#faq" className="hover:text-zinc-300 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-zinc-300">Resources</h4>
                        <ul className="space-y-2.5 text-sm text-zinc-500">
                            <li><a href="https://github.com/Ali-w908/shiponclick-core" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">Open-Core Repo</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-zinc-300">Legal</h4>
                        <ul className="space-y-2.5 text-sm text-zinc-500">
                            <li><Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="section-divider mt-12" />
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-zinc-600">
                        &copy; {new Date().getFullYear()} ShipOnClick. All rights reserved.
                    </p>
                    <p className="text-sm text-zinc-700">
                        Built for developers who ship.
                    </p>
                </div>
            </div>
        </footer>
    );
}

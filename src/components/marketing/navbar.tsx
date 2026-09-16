'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/ui/logo';

export function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const routes = [
        { href: '/#features', label: 'Features' },
        { href: '/#how-it-works', label: 'How It Works' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/#faq', label: 'FAQ' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full transition-all duration-300',
                scrolled
                    ? 'border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl'
                    : 'bg-transparent'
            )}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <Logo className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-lg font-bold text-zinc-50">
                            Ship<span className="gradient-text">OnClick</span>
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-zinc-100',
                                    pathname === route.href
                                        ? 'text-zinc-100'
                                        : 'text-zinc-400'
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    {session ? (
                        <Link
                            href="/login"
                            className="btn-glow text-sm px-5 py-2"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors px-4 py-2"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/pricing"
                                className="btn-glow text-sm px-5 py-2"
                            >
                                Get ShipOnClick
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

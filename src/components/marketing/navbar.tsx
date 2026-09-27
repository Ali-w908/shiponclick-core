'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { useState, useRef, useEffect } from 'react';

export function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const routes = [
        { href: '/#differentiator', label: 'Why ShipOnClick' },
        { href: '/#features', label: 'Features' },
        { href: '/#how-it-works', label: 'How It Works' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/#faq', label: 'FAQ' },
    ];

    // Shared style for the floating pill containers
    const pillBaseStyle = "bg-[#012624]/70 backdrop-blur-xl h-12 flex items-center rounded-full shadow-lg transition-all duration-300 pointer-events-auto";

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-6 lg:px-10 pointer-events-none">
            <div className="mx-auto flex max-w-[1440px] items-start justify-between relative">
                
                {/* Left: Logo Island */}
                <div>
                    <Link href="/" className="pointer-events-auto h-12 px-6 rounded-full flex items-center transition-all duration-300 bg-transparent">
                        <span className="text-[14px] font-medium tracking-[-0.01em] text-white">
                            Ship<span className="gradient-text">OnClick</span>
                        </span>
                    </Link>
                </div>

                {/* Center: Navigation Menu Button */}
                <div className="absolute left-1/2 -translate-x-1/2" ref={menuRef}>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="pointer-events-auto h-12 px-6 rounded-full flex items-center gap-2 text-[14px] font-medium tracking-[0.02em] text-silver-mist hover:text-white transition-all duration-300 bg-transparent active:scale-95"
                    >
                        Menu
                        {/* Animated Chevron */}
                        <svg 
                            className={cn("w-3.5 h-3.5 transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]", isMenuOpen ? "rotate-180 text-white" : "")} 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={cn(
                        "absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[220px] bg-[#021312]/95 backdrop-blur-xl border border-white/10 rounded-[20px] shadow-2xl p-2 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-top pointer-events-auto",
                        isMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
                    )}>
                        <div className="flex flex-col gap-1">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-[13px] font-medium tracking-wide text-silver-mist hover:text-white hover:bg-white/5 transition-colors duration-200 px-4 py-3 rounded-[12px] text-center"
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Actions Island */}
                <div>
                    <div className="pointer-events-auto flex items-center h-12 gap-2">
                        {session ? (
                            <Link
                                href="/login"
                                className="h-12 px-6 rounded-full flex items-center text-[14px] font-medium tracking-[0.02em] text-silver-mist hover:text-white transition-all duration-300 bg-transparent active:scale-95"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="h-12 px-6 rounded-full flex items-center text-[14px] font-medium tracking-[0.02em] text-silver-mist hover:text-white transition-all duration-300 bg-transparent active:scale-95"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="h-12 px-6 rounded-full flex items-center text-[14px] font-medium tracking-[0.02em] text-silver-mist hover:text-white transition-all duration-300 bg-transparent active:scale-95"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </header>
    );
}

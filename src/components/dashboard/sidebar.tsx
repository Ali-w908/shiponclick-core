'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logOut } from '@/actions/auth-actions';
import { getDashboardNavigation } from '@/config/navigation';
import { RocketIcon, XIcon, BookIcon, ArrowUpIcon, CogIcon, LogOutIcon, MenuIcon } from '@/components/ui/icons';

/* ── Sidebar Content ── */

function SidebarContent({ slug, isOwner, planName, onClose }: { slug: string; isOwner: boolean; planName?: string; onClose?: () => void }) {
    const pathname = usePathname();
    const navigation = getDashboardNavigation(slug);
    const isFree = !planName || planName === 'Open Source';

    return (
        <div className="flex h-full w-[256px] flex-col bg-background-deep border-r border-border-muted">
            {/* Brand */}
            <div className="flex h-16 items-center justify-between px-5 border-b border-border-muted">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <RocketIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-base font-bold text-foreground font-heading">
                        Ship<span className="gradient-text-emerald">OnClick</span>
                    </span>
                </Link>
                {/* Close button for mobile */}
                {onClose && (
                    <button onClick={onClose} className="md:hidden text-text-muted hover:text-foreground transition-colors">
                        <XIcon className="h-5 w-5" />
                    </button>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {navigation.map((item) => {
                    const isActive = pathname === item.href || (pathname.startsWith(item.href + '/') && item.href !== `/${slug}/settings`);
                    // Special case: settings is exact match only (to avoid billing highlighting team)
                    const isSettingsActive = item.href === `/${slug}/settings` && pathname === `/${slug}/settings`;
                    const active = isActive || isSettingsActive;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`sidebar-link ${active ? 'sidebar-link-active' : ''}`}
                        >
                            <item.icon className="sidebar-icon" />
                            <span>{item.name}</span>
                            {item.badge && (
                                <span className="ml-auto text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/15 text-primary border border-primary/20">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    );
                })}

                {/* Docs / Open-Core link */}
                <a
                    href={isFree ? "https://github.com/Ali-w908/shiponclick-core#readme" : "https://github.com/Ali-w908/nextjs-saas-starter-kit#readme"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-link"
                >
                    <BookIcon className="sidebar-icon" />
                    <span>{isFree ? "Open-Core Repo" : "Documentation"}</span>
                    <svg className="ml-auto h-3 w-3 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </nav>

            {/* Plan Badge + Upgrade CTA */}
            <div className="border-t border-border-muted p-3 space-y-2">
                {isFree ? (
                    <Link
                        href={`/${slug}/settings/billing`}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/15 hover:bg-primary/10 transition-all group"
                    >
                        <ArrowUpIcon className="h-4 w-4 text-primary" />
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground">Upgrade to Builder</p>
                            <p className="text-[10px] text-text-dim">Unlock the full codebase</p>
                        </div>
                    </Link>
                ) : (
                    <div className="flex items-center gap-2 px-3 py-2">
                        <span className="plan-badge plan-badge-active">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {planName}
                        </span>
                    </div>
                )}

                {/* Settings + Logout */}
                <Link
                    href="/settings/profile"
                    className="sidebar-link"
                >
                    <CogIcon className="sidebar-icon" />
                    <span>Settings</span>
                </Link>
                <form action={logOut}>
                    <button type="submit" className="sidebar-link w-full text-left hover:text-destructive">
                        <LogOutIcon className="sidebar-icon" />
                        <span>Logout</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

/* ── Exported Components ── */

export function DashboardSidebar({ slug, isOwner, planName }: { slug: string; isOwner: boolean; planName?: string }) {
    return <SidebarContent slug={slug} isOwner={isOwner} planName={planName} />;
}

export function MobileSidebar({ slug, isOwner, planName }: { slug: string; isOwner: boolean; planName?: string }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            {/* Hamburger trigger */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-border-muted bg-surface text-text-muted hover:text-foreground hover:bg-surface-hover transition-all"
                aria-label="Open menu"
            >
                <MenuIcon className="h-5 w-5" />
            </button>

            {/* Overlay */}
            <div className={`sidebar-overlay ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(false)} />

            {/* Slide-out sidebar */}
            <div className={`sidebar-mobile ${isOpen ? 'is-open' : ''}`}>
                <SidebarContent slug={slug} isOwner={isOwner} planName={planName} onClose={() => setIsOpen(false)} />
            </div>
        </>
    );
}

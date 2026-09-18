'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logOut } from '@/actions/auth-actions';

/* ── Inline SVG Icons ── */

function FolderIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2 7.5A2.5 2.5 0 014.5 5h3.28a2.5 2.5 0 011.94.94l.78.98a2.5 2.5 0 001.94.93H19.5A2.5 2.5 0 0122 9.5V17a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17V7.5z" /></svg>;
}

function UsersIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}

function CreditCardIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" /></svg>;
}

function CogIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>;
}

function BookIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>;
}

function RocketIcon({ className }: { className?: string }) {
    return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /></svg>;
}

function GraphIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="5" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><circle cx="19" cy="6" r="2" /><path d="M6.7 7.5l3.8 8.5M17.3 7.5l-3.8 8.5" /><path d="M7 6h10" /></svg>;
}

function LogOutIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>;
}

function SparklesIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>;
}

function ArrowUpIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>;
}

function MenuIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" /></svg>;
}

function XIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
}

/* ── Navigation config ── */

interface NavItem {
    name: string;
    href: string;
    icon: React.FC<{ className?: string }>;
    badge?: string;
}

function HomeIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>;
}

function getNavigation(slug: string): NavItem[] {
    return [
        { name: 'Overview', href: `/${slug}/dashboard`, icon: HomeIcon },
        { name: 'Stack Explorer', href: `/${slug}/playground`, icon: SparklesIcon, badge: 'New' },
        { name: 'Knowledge Graph', href: `/${slug}/knowledge-graph`, icon: GraphIcon },
        { name: 'Team', href: `/${slug}/settings`, icon: UsersIcon },
        { name: 'Billing', href: `/${slug}/settings/billing`, icon: CreditCardIcon },
    ];
}

/* ── Sidebar Content ── */

function SidebarContent({ slug, isOwner, planName, onClose }: { slug: string; isOwner: boolean; planName?: string; onClose?: () => void }) {
    const pathname = usePathname();
    const navigation = getNavigation(slug);
    const isFree = !planName || planName === 'Explorer';

    return (
        <div className="flex h-full w-64 flex-col bg-background-deep border-r border-border-muted">
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

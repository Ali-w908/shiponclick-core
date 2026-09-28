import * as React from 'react';
import { HomeIcon, SparklesIcon, UsersIcon, CreditCardIcon } from '@/components/ui/icons';

export interface NavItem {
    name: string;
    href: string;
    icon: React.FC<{ className?: string }>;
    badge?: string;
}

export function getDashboardNavigation(slug: string): NavItem[] {
    return [
        { name: 'Overview', href: `/${slug}/dashboard`, icon: HomeIcon },
        { name: 'Stack Explorer', href: `/${slug}/playground`, icon: SparklesIcon, badge: 'New' },
        { name: 'Team', href: `/${slug}/settings`, icon: UsersIcon },
        { name: 'Billing', href: `/${slug}/settings/billing`, icon: CreditCardIcon },
    ];
}

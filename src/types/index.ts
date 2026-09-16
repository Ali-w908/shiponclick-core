import { UserRole, SubscriptionStatus } from '@prisma/client';

export { UserRole, SubscriptionStatus };

/**
 * Plan tier for the SaaS application.
 */
export type PlanTier = 'free' | 'pro' | 'enterprise';

/**
 * Base user type returned from auth.
 */
export interface AuthUser {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
}

/**
 * Organization with subscription details.
 */
export interface OrganizationWithSubscription {
    id: string;
    name: string;
    slug: string;
    image: string | null;
    stripeCustomerId: string | null;
    stripeSubscriptionId: string | null;
    stripePriceId: string | null;
    stripeCurrentPeriodEnd: Date | null;
}

/**
 * Member with user details.
 */
export interface MemberWithUser {
    id: string;
    role: UserRole;
    user: AuthUser;
    organizationId: string;
    createdAt: Date;
}

/**
 * API response wrapper for consistent responses.
 */
export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
}

/**
 * Pagination parameters.
 */
export interface PaginationParams {
    page: number;
    limit: number;
}

/**
 * Paginated response.
 */
export interface PaginatedResponse<T> {
    items: T[];
    totalCount: number;
    page: number;
    limit: number;
    totalPages: number;
}

/**
 * Navigation item for sidebar/menus.
 */
export interface NavItem {
    title: string;
    href: string;
    icon?: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
}

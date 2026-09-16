import Stripe from 'stripe';

// Lazy initialization to prevent build errors when env vars aren't set
let stripeInstance: Stripe | null = null;

/**
 * Get Stripe client singleton.
 * Uses lazy initialization to prevent build-time errors.
 */
export function getStripe(): Stripe {
    if (!stripeInstance) {
        if (!process.env.STRIPE_API_KEY) {
            throw new Error('STRIPE_API_KEY environment variable is not set');
        }
        stripeInstance = new Stripe(process.env.STRIPE_API_KEY, {
            typescript: true,
        });
    }
    return stripeInstance;
}

// Export for convenience (will throw if called without STRIPE_API_KEY)
export const stripe = {
    get checkout() { return getStripe().checkout; },
    get billingPortal() { return getStripe().billingPortal; },
    get subscriptions() { return getStripe().subscriptions; },
    get customers() { return getStripe().customers; },
    get webhooks() { return getStripe().webhooks; },
};

/**
 * Creates a Stripe Checkout session for subscription.
 * @param customerId - Stripe customer ID
 * @param priceId - Stripe price ID for the subscription
 * @param orgId - Organization ID for metadata
 * @param successUrl - Redirect URL on success
 * @param cancelUrl - Redirect URL on cancel
 */
export async function createCheckoutSession({
    customerId,
    priceId,
    orgId,
    successUrl,
    cancelUrl,
}: {
    customerId?: string;
    priceId: string;
    orgId: string;
    successUrl: string;
    cancelUrl: string;
}) {
    const session = await getStripe().checkout.sessions.create({
        customer: customerId,
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata: {
            orgId,
        },
        subscription_data: {
            metadata: {
                orgId,
            },
        },
    });

    return session;
}

/**
 * Creates a Stripe Customer Portal session for self-service management.
 * @param customerId - Stripe customer ID
 * @param returnUrl - URL to redirect after portal session
 */
export async function createBillingPortalSession(
    customerId: string,
    returnUrl: string,
) {
    const session = await getStripe().billingPortal.sessions.create({
        customer: customerId,
        return_url: returnUrl,
    });

    return session;
}

/**
 * Retrieves a subscription by ID.
 * @param subscriptionId - Stripe subscription ID
 */
export async function getSubscription(subscriptionId: string) {
    return getStripe().subscriptions.retrieve(subscriptionId);
}

/**
 * Creates a new Stripe customer.
 * @param email - Customer email
 * @param name - Customer/Organization name
 * @param orgId - Organization ID for metadata
 */
export async function createCustomer(
    email: string,
    name: string,
    orgId: string,
) {
    return getStripe().customers.create({
        email,
        name,
        metadata: {
            orgId,
        },
    });
}

/**
 * Cancels a subscription at period end (not immediately).
 * @param subscriptionId - Stripe subscription ID
 */
export async function cancelSubscriptionAtPeriodEnd(subscriptionId: string) {
    return getStripe().subscriptions.update(subscriptionId, {
        cancel_at_period_end: true,
    });
}

/**
 * Resumes a canceled subscription (before period ends).
 * @param subscriptionId - Stripe subscription ID
 */
export async function resumeSubscription(subscriptionId: string) {
    return getStripe().subscriptions.update(subscriptionId, {
        cancel_at_period_end: false,
    });
}

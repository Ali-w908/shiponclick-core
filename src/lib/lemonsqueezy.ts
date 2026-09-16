import {
    lemonSqueezySetup,
    createCheckout as lsCreateCheckout,
    getSubscription as lsGetSubscription,
    type Checkout,
} from '@lemonsqueezy/lemonsqueezy.js';

/**
 * LemonSqueezy API client.
 * 
 * LemonSqueezy is a Merchant of Record — it handles payment processing,
 * tax compliance, and payment processing globally. Perfect for selling dev tools.
 */

let initialized = false;

function ensureInitialized() {
    if (!initialized) {
        const apiKey = process.env.LEMONSQUEEZY_API_KEY;
        if (!apiKey) {
            throw new Error('LEMONSQUEEZY_API_KEY environment variable is not set');
        }
        lemonSqueezySetup({ apiKey });
        initialized = true;
    }
}

/**
 * Creates a LemonSqueezy checkout session for a one-time purchase.
 */
export async function createCheckoutSession({
    variantId,
    userEmail,
    userName,
    orgId,
    successUrl,
}: {
    variantId: string;
    userEmail: string;
    userName?: string;
    orgId: string;
    successUrl: string;
}) {
    ensureInitialized();

    const storeId = process.env.LEMONSQUEEZY_STORE_ID;
    if (!storeId) {
        throw new Error('LEMONSQUEEZY_STORE_ID environment variable is not set');
    }

    const checkout = await lsCreateCheckout(storeId, variantId, {
        checkoutData: {
            email: userEmail,
            name: userName || undefined,
            custom: {
                org_id: orgId,
            },
        },
        checkoutOptions: {
            embed: false,
        },
        productOptions: {
            redirectUrl: successUrl,
        },
    });

    return checkout.data;
}

/**
 * Retrieves a subscription by ID from LemonSqueezy.
 */
export async function getSubscription(subscriptionId: string) {
    ensureInitialized();
    const sub = await lsGetSubscription(subscriptionId);
    return sub.data;
}

/**
 * Verifies a LemonSqueezy webhook signature.
 * Uses HMAC-SHA256 with the webhook secret.
 */
export async function verifyWebhookSignature(
    rawBody: string,
    signature: string,
): Promise<boolean> {
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
    if (!secret) {
        throw new Error('LEMONSQUEEZY_WEBHOOK_SECRET is not set');
    }

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
        'raw',
        encoder.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign'],
    );

    const signatureBytes = await crypto.subtle.sign(
        'HMAC',
        key,
        encoder.encode(rawBody),
    );

    const computedSignature = Array.from(new Uint8Array(signatureBytes))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');

    return computedSignature === signature;
}

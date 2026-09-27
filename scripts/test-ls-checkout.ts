import { config } from 'dotenv';
config(); // Load .env
import { lemonSqueezySetup, createCheckout } from '@lemonsqueezy/lemonsqueezy.js';

async function testCheckout() {
    const apiKey = process.env.LEMONSQUEEZY_API_KEY;
    const storeId = process.env.LEMONSQUEEZY_STORE_ID;
    const variantId = process.env.LEMONSQUEEZY_BUILDER_VARIANT_ID;

    if (!apiKey || !storeId || !variantId) {
        console.error('Missing env vars');
        return;
    }

    lemonSqueezySetup({ apiKey });

    console.log(`Testing with Store ID: ${storeId}, Variant ID: ${variantId}`);

    const res = await createCheckout(storeId, variantId, {
        checkoutData: {
            email: 'test@example.com',
            custom: { org_id: 'test_org_id' },
        },
    });

    if (res.error) {
        console.error('Lemon Squeezy API Error:', res.error);
    } else {
        console.log('Success! Checkout URL:', res.data?.data?.attributes?.url);
    }
}

testCheckout().catch(console.error);

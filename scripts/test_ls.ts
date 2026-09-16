import { lemonSqueezySetup, createCheckout } from '@lemonsqueezy/lemonsqueezy.js';
import 'dotenv/config';

async function testCheckout() {
    const apiKey = process.env.LEMONSQUEEZY_API_KEY;
    const storeId = process.env.LEMONSQUEEZY_STORE_ID;
    const variantId = process.env.LEMONSQUEEZY_BUILDER_VARIANT_ID;

    console.log('Testing with:');
    console.log('Store ID:', storeId);
    console.log('Variant ID:', variantId);
    console.log('API Key set:', !!apiKey);

    if (!apiKey || !storeId || !variantId) {
        console.error('Missing env vars');
        return;
    }

    lemonSqueezySetup({ apiKey });

    try {
        console.log('Attempting to create checkout...');
        const checkout = await createCheckout(storeId, variantId, {
            checkoutData: {
                email: 'test@example.com',
                name: 'Test User',
                custom: {
                    org_id: 'test_org_id',
                },
            },
            checkoutOptions: {
                embed: false,
            },
            productOptions: {
                redirectUrl: 'http://localhost:3000/success',
            },
        });

        console.log('Success!');
        console.log('Checkout URL:', (checkout as any)?.data?.attributes?.url);
        
        if (checkout.error) {
            console.error('LemonSqueezy API Error:', checkout.error);
        }
    } catch (error) {
        console.error('Caught Exception:', error);
    }
}

testCheckout();

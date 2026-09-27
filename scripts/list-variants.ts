import { config } from 'dotenv';
config();
import { lemonSqueezySetup, listVariants } from '@lemonsqueezy/lemonsqueezy.js';

async function listAllVariants() {
    const apiKey = process.env.LEMONSQUEEZY_API_KEY;
    if (!apiKey) {
        console.error('No API Key');
        return;
    }

    lemonSqueezySetup({ apiKey });
    
    console.log('Fetching variants for Store ID:', process.env.LEMONSQUEEZY_STORE_ID);
    
    const { data, error } = await listVariants();
    if (error) {
        console.error('Error fetching variants:', error);
    } else {
        console.log('Found Variants:');
        data?.data.forEach(v => {
            console.log(`- ID: ${v.id}, Name: ${v.attributes.name}, Status: ${v.attributes.status}`);
        });
    }
}

listAllVariants().catch(console.error);

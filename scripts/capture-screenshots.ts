
import { chromium } from '@playwright/test';
import path from 'path';

async function capture() {
    console.log('Launching browser...');
    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1280, height: 800 }
    });
    const page = await context.newPage();

    const baseUrl = 'http://localhost:3000';

    try {
        // 1. Hero
        console.log('Navigating to Home...');
        await page.goto(baseUrl, { timeout: 60000 });
        await page.waitForLoadState('networkidle');
        await page.screenshot({ path: 'public/assets/hero.png' });
        console.log('Captured hero.png');

        // 2. Pricing
        console.log('Capturing Pricing...');
        const pricing = page.getByText('Simple, Transparent Pricing').first();
        if (await pricing.isVisible()) {
            await pricing.scrollIntoViewIfNeeded();
            await page.waitForTimeout(1000);
            await page.screenshot({ path: 'public/assets/pricing.png' });
        } else {
            await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
            await page.waitForTimeout(1000);
            await page.screenshot({ path: 'public/assets/pricing.png' });
        }
        console.log('Captured pricing.png');

        // 3. Login Page
        console.log('Navigating to Login...');
        await page.goto(`${baseUrl}/login`);
        await page.waitForLoadState('networkidle');
        await page.screenshot({ path: 'public/assets/login.png' });
        console.log('Captured login.png');

        // 4. Dashboard (Login Flow)
        console.log('Logging in...');
        await page.fill('input[type="email"]', 'admin@example.com');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');

        // Wait for redirect
        await page.waitForURL(/\/dashboard/);
        await page.waitForLoadState('networkidle');
        await page.screenshot({ path: 'public/assets/dashboard.png' });
        console.log('Captured dashboard.png');

        // 5. App UI
        console.log('Navigating to Settings...');
        try {
            await page.goto(`${baseUrl}/acme/settings/billing`);
            await page.waitForLoadState('networkidle');
        } catch (e) {
            console.log('Could not nav to settings, staying on dashboard');
        }
        await page.screenshot({ path: 'public/assets/app-ui.png' });
        console.log('Captured app-ui.png');

        // 6. Mobile View
        console.log('Capturing Mobile View...');
        await page.setViewportSize({ width: 375, height: 812 });
        await page.reload();
        await page.waitForLoadState('networkidle');
        await page.screenshot({ path: 'public/assets/mobile.png' });
        console.log('Captured mobile.png');

    } catch (error) {
        console.error('Error capturing screenshots:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

capture();

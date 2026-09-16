import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and merges Tailwind CSS classes.
 * @param inputs - Class names to combine
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * Formats a date to a localized string.
 * @param date - Date to format
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
    date: Date | string | number,
    options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }
): string {
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

/**
 * Formats a number as currency.
 * @param amount - Amount in cents
 * @param currency - Currency code (default: USD)
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount / 100);
}

/**
 * Generates a URL-safe slug from a string.
 * @param text - Text to slugify
 * @returns Slugified string
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Returns the absolute URL for a given path.
 * @param path - Relative path
 * @returns Absolute URL
 */
export function absoluteUrl(path: string): string {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

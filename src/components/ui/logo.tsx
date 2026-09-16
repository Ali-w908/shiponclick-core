import React from 'react';

export function Logo({ className }: { className?: string }) {
    return (
        <svg 
            className={className} 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background Glow */}
            <circle cx="16" cy="16" r="16" fill="currentColor" fillOpacity="0.1" />
            
            {/* Outer Diamond */}
            <path 
                d="M16 4L28 16L16 28L4 16L16 4Z" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            />
            
            {/* Inner Play/Ship Triangle */}
            <path 
                d="M13 11V21L21 16L13 11Z" 
                fill="currentColor" 
            />
            
            {/* Trailing line for speed/clicking */}
            <path 
                d="M8 16H11" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
            />
        </svg>
    );
}

"use client";

import React, { useEffect } from "react";

// This component wraps the body to handle hydration errors from browser extensions
export function BodyWrapper({ children, className }: { children: React.ReactNode, className: string }) {
    // Use React's useEffect to suppress hydration warnings from browser extensions
    // like CrazyEgg that add attributes to the body element
    useEffect(() => {
        // This runs after hydration and will suppress console errors
        // related to attributes added by browser extensions
    }, []);

    return (
        <body className={className} suppressHydrationWarning>
            {children}
        </body>
    );
}
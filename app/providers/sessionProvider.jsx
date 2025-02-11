"use client";
import { SessionProvider } from "next-auth/react";

export default function SessionAppProvider({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
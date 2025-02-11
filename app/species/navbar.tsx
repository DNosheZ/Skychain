"use client";
import Link from "next/link";
import Image from "next/image";
import LoginButton from "../atoms/loginButton";
import WalletButton from "../atoms/walletButton";
import { useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();
    return (
        <nav className="flex flex-row w-full h-20 justify-between items-center z-10 px-5 border-b-blue1_1 border-b border-solid bg-blue1_1 text-white ">
            <Link href="/" className="flex flex-row justify-start items-center h-full w-auto">
                <Image src="/SkyChain.jpg" alt="logo" height="80" width="120" />
            </Link>
            <section className="flex flex-row h-full w-auto gap-x-4 justify-center items-center">
                {session && <WalletButton />}
                <LoginButton />
            </section>
        </nav>
    )
}
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/svg/Logo.svg";
import HamburgerIcon from "@/assets/svg/HamburgerIcon.svg";
import CloseIcon from "@/assets/svg/CloseIcon.svg";
import backgroundImage from "@/assets/images/background.png";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="relative w-full min-h-[65vh] md:min-h-[70vh] overflow-hidden">
            {/* Tło */}
            <Image
                src={backgroundImage}
                alt="Travel background"
                fill
                priority
                quality={100}
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Nawigacja */}
            <div className="relative z-10 px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={Logo}
                        alt="EdenTravel logo"
                        width={28}
                        height={28}
                    />
                    <span className="text-white font-bold text-xl">
                        <span className="text-blue">Eden</span>Travel
                    </span>
                </Link>
                <button
                    onClick={() => setShowMenu(true)}
                    className="lg:hidden"
                    aria-label="Open menu"
                >
                    <Image
                        src={HamburgerIcon}
                        alt="Menu"
                        width={24}
                        height={24}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            {showMenu && (
                <div className="fixed inset-0 bg-blue flex flex-col items-center justify-center z-50">
                    <button
                        className="absolute top-6 right-6 p-2"
                        onClick={() => setShowMenu(false)}
                        aria-label="Close menu"
                    >
                        <Image
                            src={CloseIcon}
                            alt="Close menu"
                            width={24}
                            height={24}
                        />
                    </button>
                    <nav className="flex flex-col gap-6 text-white text-xl text-center">
                        <Link href="/" onClick={() => setShowMenu(false)}>
                            Home
                        </Link>
                        <Link href="/tour" onClick={() => setShowMenu(false)}>
                            Tour
                        </Link>
                        <Link href="/blog" onClick={() => setShowMenu(false)}>
                            Blog
                        </Link>
                        <Link href="/pages" onClick={() => setShowMenu(false)}>
                            Pages
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setShowMenu(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}

            {/* Hero content */}
            <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight">
                    Welcome to the World of Extraordinary Travel
                </h1>
                <p className="max-w-lg text-base md:text-lg mb-5">
                    If you're in search of exciting adventures, unforgettable
                    experiences, and breathtaking places to explore, you've come
                    to the right place!
                </p>
            </div>
        </header>
    );
}

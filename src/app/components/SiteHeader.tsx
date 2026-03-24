"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
            <div className="wrapper wrapper--header">

                {/* Header group */}
                <div className={`header_group ${menuOpen ? "open" : ""}`}>
                    <h1>
                        <Link href="/">
                            <Image src="/assets/img/logo.svg" alt="サイトのロゴ" width={120} height={40} />
                        </Link>
                    </h1>

                    {/* Hamburger */}
                    <div
                        className={`hamburger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <div className="hamburger_bar"></div>
                        <div className="hamburger_bar"></div>
                        <div className="hamburger_bar"></div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul className="nav_list">

                        <li className="nav_item">
                            <Link href="/#services" onClick={closeMenu}>Services</Link>
                        </li>

                        <li className="nav_item">
                            <Link href="/#skills" onClick={closeMenu}>Skills</Link>
                        </li>

                        {/* PC専用：Works（ドロップダウン） */}
                        <li className="nav_item nav_item--dropdown nav_item--pc">
                            <span className="nav_link">Works</span>
                            <ul className="nav_sublist">
                                <li className="nav_subitem">
                                    <Link href="/#works-app" onClick={closeMenu}>
                                        Works - App
                                    </Link>
                                </li>
                                <li className="nav_subitem">
                                    <Link href="/#works" onClick={closeMenu}>
                                        Works - Website
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* SP専用：Works - App */}
                        <li className="nav_item nav_item--sp">
                            <Link href="/#works-app" onClick={closeMenu}>
                                Works - App
                            </Link>
                        </li>

                        {/* SP専用：Works - Website */}
                        <li className="nav_item nav_item--sp">
                            <Link href="/#works" onClick={closeMenu}>
                                Works - Website
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link href="/#work-experience" onClick={closeMenu}>
                                Work Experience
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link href="/#about" onClick={closeMenu}>About</Link>
                        </li>

                        <li className="nav_item">
                            <Link href="/#contact" onClick={closeMenu}>Contact</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

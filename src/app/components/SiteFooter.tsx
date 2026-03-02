import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
    return (
        <footer>
            <div className="wrapper wrapper--footer">
                <div className="footer_group">
                    <h2 className="footer_logo">
                        <Link href="/">
                            <Image src="/assets/img/logo.svg" alt="サイトのロゴ" width={120} height={40} />
                        </Link>
                    </h2>

                    <nav className="footer_nav">
                        <ul className="footer_nav-list">

                            <li className="footer_nav-item">
                                <Link href="/#services">Services</Link>
                            </li>

                            <li className="footer_nav-item">
                                <Link href="/#work-experience">Work Experience</Link>
                            </li>

                            <li className="footer_nav-item">
                                <Link href="/#skills">Skills</Link>
                            </li>

                            {/* PC専用：Works ドロップダウン */}
                            <li className="footer_nav-item footer_nav-item--dropdown footer_nav-item--pc">
                                <span className="footer_nav_link">Works</span>
                                <ul className="footer_nav_sublist">
                                    <li className="footer_nav_subitem">
                                        <Link href="/#works">Works - Website</Link>
                                    </li>
                                    <li className="footer_nav_subitem">
                                        <Link href="/#works-app">Works - App</Link>
                                    </li>
                                </ul>
                            </li>

                            {/* SP専用 */}
                            <li className="footer_nav-item footer_nav-item--sp">
                                <Link href="/#works">Works - Website</Link>
                            </li>

                            <li className="footer_nav-item footer_nav-item--sp">
                                <Link href="/#works-app">Works - App</Link>
                            </li>

                            <li className="footer_nav-item">
                                <Link href="/#about">About</Link>
                            </li>

                            <li className="footer_nav-item">
                                <Link href="/#contact">Contact</Link>
                            </li>

                        </ul>
                    </nav>
                </div>

                <p className="copy">
                    <small className="manrope">
                        <span>All Rights Reserved 2025 ©︎ Hiroaki Ito</span>
                        <span className="sp-none">　｜　</span>
                        <span>
                            Icon by{" "}
                            <a target="_blank" href="https://icons8.com">
                                Icons8
                            </a>
                        </span>
                    </small>
                </p>
            </div>
        </footer>
    );
}

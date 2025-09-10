"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-lower">
        <div className="auto-container">
          <div className="inner-container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/" legacyBehavior>
                    <a>
                      <Image src="/assets/images/logo.png" alt="Logo" width={610} height={100} priority />
                    </a>
                  </Link>
                </div>
              </div>
              <nav className="main-menu">
                <ul className="navigation clearfix">
                  <li>
                    <Link href="/" legacyBehavior>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" legacyBehavior>
                      <a>Team</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="mobile-nav-toggler">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 保留移动菜单结构（如需自定义交互可用 React 实现） */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><span className="icon fa-solid fa-xmark fa-fw"></span></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/" legacyBehavior>
              <a>
                <Image src="/assets/images/mobile-logo.png" alt="Mobile Logo" width={120} height={40} />
              </a>
            </Link>
          </div>
          <div className="menu-outer"></div>
        </nav>
      </div>
    </header>
  );
}
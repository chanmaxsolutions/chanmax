import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header(props) {

  const { asPath } = useRouter()

  const menuOpenRef = React.createRef();

  const handleMenuOpen = (event) => {
    event.preventDefault();
    document.body.classList.add('menu--opened');
  }

  const handleMenuClose = (event) => {
    event.preventDefault();
    document.body.classList.remove('menu--opened');
  }

  return (
    <div id="page" className="site">
      <header id="masthead" className="site-header outer">
          <div className="inner">
              <div className="site-header-inside">

                  <div className="site-branding">
                      <p className="site-logo">
                          <Link href="/">
                              <a> <img src="/images/logo.svg" alt="Chanmax" /> </a>
                          </Link>
                      </p>
                  </div>
                  
                  <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                    <div className="site-nav-inside">

                        <button id="menu-close" className="menu-toggle" onClick={handleMenuClose}>
                            <span className="screen-reader-text">Open Menu</span>
                            <span className="icon-close" aria-hidden="true" />
                        </button>

                        <ul className="menu">

                          <li className={`menu-item ${asPath === "/" ? "current-menu-item" : ""}`}>
                            <Link href="/">
                                <a> <span >Home</span> </a>
                            </Link>
                          </li>

                          <li className={`menu-item ${asPath === "/services" ? "current-menu-item" : ""}`}>
                            <Link href="/services">
                              <a> <span>Services</span> </a>
                            </Link>
                          </li>

                          <li className={`menu-item ${asPath === "/works" ? "current-menu-item" : ""}`}>
                            <Link href="/works">
                              <a> <span>Works</span> </a>
                            </Link>
                          </li>

                          <li className={`menu-item ${asPath === "/about" ? "current-menu-item" : ""}`}>
                            <Link href="/about">
                              <a> <span>About</span> </a>
                            </Link>
                          </li>

                          <li className={`menu-item ${asPath === "/contact" ? "current-menu-item" : ""}`}>
                            <Link href="/contact">
                              <a> <span>Contact</span> </a>
                            </Link>
                          </li>

                          <li className={`menu-item menu-button ${asPath === "/get-quote" ? "current-menu-item" : ""}`}>
                            <Link href="/get-quote">
                              <a className="button"> <span>Get a Quote</span> </a>
                            </Link>
                          </li>

                        </ul>
                    </div>
                </nav>

                <button id="menu-open" className="menu-toggle" ref={menuOpenRef} onClick={handleMenuOpen}>
                    <span className="screen-reader-text">Close Menu</span>
                    <span className="icon-menu" aria-hidden="true" />
                </button>

              </div>
          </div>
      </header>
    </div>
  )
}

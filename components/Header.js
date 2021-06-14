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

                          <li className={`menu-item ${asPath === "/features" ? "current-menu-item" : ""}`}>
                            <Link href="/features">
                              <a> <span>Features</span> </a>
                            </Link>
                          </li>

                          <li className={`menu-item ${asPath === "/pricing" ? "current-menu-item" : ""}`}>
                            <Link href="/pricing">
                              <a> <span>Pricing</span> </a>
                            </Link>
                          </li>

                          <li className={`menu-item ${asPath === "/style-guide" ? "current-menu-item" : ""}`}>
                            <Link href="/style-guide">
                              <a> <span>Style Guide</span> </a>
                            </Link>
                          </li>

                          <li className={`menu-item menu-button ${asPath === "/signup" ? "current-menu-item" : ""}`}>
                            <Link href="/signup">
                              <a className="button"> <span>Sign Up</span> </a>
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

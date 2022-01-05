import Link from "next/link";
import React, { useState } from "react";
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import Headroom from "react-headroom"
// import scrollTo from "gatsby-plugin-smoothscroll"
// import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../components/button/button";
import MeniMobile from "./meni/meniMobile";
import { Link as Veza } from "react-scroll";
// import scrollTo from "gatsby-plugin-smoothscroll"
import Script from "next/script";
import { Anchor } from "nextjs-anchor";

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  // <Headroom
  //   style={{
  //     WebkitTransition: "all .5s ease-in-out",
  //     Transition: "all .5s ease-in-out",
  //     transition: "all .5s ease-in-out",
  //     zIndex: "999",
  //     height: "65px",
  //   }}
  // >
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js" />

      <header>
        <MeniMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="navBar">
          <div>
            <Link href="/" className="navLink navTitle">
              ŠKOLA TRČANJA ZADAR
            </Link>
          </div>

          <div>
            <GiHamburgerMenu
              className="hamburgerMenu"
              onClick={() => {
                setIsOpen(() => !isOpen);
                // blockScroll()
              }}
            />

            <div className="navLinks">
              <Link className="navLink" href="/blog">
                Blog
              </Link>

              <a className="navLink" href="http://www.zadarnight.run">
                ZadarNight.run
              </a>
              {/* <Veza
                activeClass="active"
                to="prijava"
                spy={true}
                smooth="easeInOutCubic"
                offset={0}
                duration={1800}
              > */}
              <Anchor href="/#prijava">
                <Button
                  title="Prijava"
                  width="81"
                  height="40"
                  colorText="black"
                  fontSize="16"
                  fontWeight="600"
                />
              </Anchor>
              {/* </Veza> */}
            </div>
          </div>
        </div>
      </header>
    </>
    // </Headroom>
  );
};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;

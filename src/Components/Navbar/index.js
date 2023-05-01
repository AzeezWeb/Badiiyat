import React from "react";
import {
   Nav,
   NavContainer,
   NavLogo,
   LogoImg,
   NavMenu,
   NavItem,
   NavLinks,
   User,
   UserIcon
 } from './NavbarElements'

import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  return ( 
    <>
        <Nav>
          <NavContainer>
            <NavLogo>
              <LogoImg>BaDiiYaT </LogoImg>
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks> Bosh sahifa</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks> Nasr</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks> Maqolalar</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks> Forum</NavLinks>
              </NavItem>
            </NavMenu>
            <User>
              <UserIcon/>
              <FaChevronDown/>
            </User>
          </NavContainer>
        </Nav>
    </>
   );
}

export default Navbar;
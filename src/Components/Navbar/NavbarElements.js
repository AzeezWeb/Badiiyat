import styled from "styled-components";
import { Link as LinkR} from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

export const Nav = styled.nav`
  width: 100%;
  height:90px;
  display: block;
  margin: 0 auto;
  background: #191919;
  border-bottom: 3px solid #303030;
`;


export const NavContainer = styled.div`
  max-width: 1300px;  
  width: 100%;
  padding: 22px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const NavLogo = styled(LinkR)`
  width: 96px;
  text-decoration: none;
`;

export const LogoImg =styled.h1`
  color: #C9AC8C;
  font-size: 30px;
  font-weight: 400;
  font-family: 'Rotterburg Stylish FREE';
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;


  @media (max-width: 768px)  {
      display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0 22px;
  position: relative;

  &:hover ::after {
    content: '';
    width: 50px;
    height: 5px;
    background-color: #fff;
    position: absolute;
    top: 58px;
    left: 0;
    border-radius: 5px;
  }
`;

export const NavLinks = styled(LinkR)`
    
  text-decoration: none;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 23px;
`;


export const User = styled.div`
  width: 100px
  height: 80px;
  color:#fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;


export const UserIcon = styled(FaUserCircle)`
  font-size: 25px;
  margin-right: 10px;
`










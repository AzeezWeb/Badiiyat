import styled from "styled-components";
import { BiSearchAlt } from 'react-icons/bi' 
export const Search = styled.div`
  position: relative;
  z-index: 5;
  margin-top: -70px
`;

export const SearchContainer = styled.div`
  max-width: 1114px;
  height: 170px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #191919;
  offset: 0px, 4px rgba(0, 0, 0, 0.25)
 

`;

export const SearchTitle = styled.h2`
  color: #C9AC8C;
  font-size: 31px;
  line-height: 100%;
  font-family: 'Rotterburg Stylish FREE';
  text-align: center;
  padding-top: 40px;
  margin-bottom: 13px;
`

export const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 709px;
  color: #fff;
  font-size: 16px;
  height: 47px;
  border: none;
  outline: none;
  border-radius: 15px;
  margin-right: 15px;
  padding-left: 20px;
  background-color: #404040;
`;

export const SearchBtn = styled.button`
  
  color: #3c2710;
  width: 160px;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 18px;
  background-color: #C9AC8C;
  vertical-align: middle;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const SearchIcon = styled(BiSearchAlt)`
 font-size: 25px;
 margin-right: 10px;
 margin-bottom: -5px;
`
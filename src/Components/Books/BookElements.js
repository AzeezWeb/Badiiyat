import styled from "styled-components";
import {FaBook} from 'react-icons/fa'
import { BiHeadphone } from 'react-icons/bi'


export const BookContainer = styled.div`
  width: 174px;
  height: 252px;
  margin-top: 47px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  margin: 10px 20px;
  background-color: #1d1d1da5;
  box-shadow: 0px 2px 2px #2f2e2e9c;
`
export const BookBg = styled.div`
  width: 100%;
  height: 100%;

`
export const BookImg = styled.img`
  width: 100%;
  height: 132px;
  margin-bottom: 12px;
`
export const BookAuthor = styled.h3`
  color: #C9AC8C;
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
`
export const BookAuthorAge = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-bottom: 12px;
`
export const BookRow = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;

`
export const BookRead = styled.div`
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 3px;

`
export const BookListened = styled.div`
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;

`
export const FaBookIcon = styled(FaBook)`
  margin-right: 5px;
`

export const BiHeadphoneIcon = styled(BiHeadphone)`
  margin-right: 5px;
`
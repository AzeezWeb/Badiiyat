import React from "react";
import styled from "styled-components";
import HeroImgUrl from '../../imgs/home.png'

const HeroContainer = styled.div`
  max-width: 1300px;  
  width: 100%;
  padding: 22px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`


const HeroImg = styled.img`
  width: 100%;
  height: auto;

`

function Hero() {
  return ( 
    <>
      <HeroContainer>
        <HeroImg src={HeroImgUrl} alt='Hero'/>
      </HeroContainer>
    </>
   );
}

export default Hero;
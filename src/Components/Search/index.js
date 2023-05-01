import React from "react";
import {  Search,
          SearchContainer,
          SearchTitle,
          SearchRow,
          SearchInput,
          SearchIcon,
          SearchBtn
       } from "./SearchElements";
     

function SearchSectin({search}) {
  return ( 
    <>
      <Search>
        <SearchContainer>
          <SearchTitle> QiDiRiSH</SearchTitle>
            <SearchRow>
              <SearchInput onChange={search} placeholder="Adiblar, kitoblar, audiolar, maqolalar..."/>
              <SearchBtn>
                <SearchIcon/>
                 Izlash
              </SearchBtn>
            </SearchRow>  
        </SearchContainer>
      </Search>
    </>
   );
}

export default SearchSectin;
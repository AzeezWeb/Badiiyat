import React from "react";
import { BookContainer,
         BookBg,
         BookImg,
         BookAuthor,
         BookAuthorAge,
         BookRow,
         BookRead,
         BookListened,
         FaBookIcon,
         BiHeadphoneIcon
} from "./BookElements";

function Book({ Img, Author, Age, Read, Listened, id}) {
  return ( 
    <>
      <BookContainer id={id}>
        <BookBg>
          <BookImg src={Img}/>    
          <BookAuthor>
            {Author} 
          </BookAuthor>
          <BookAuthorAge>
            {Age} 
          </BookAuthorAge>
          <BookRow>
            <BookRead>
              <FaBookIcon/>
              {Read} 
            </BookRead>
            <BookListened>
              <BiHeadphoneIcon/>
              {Listened} 
            </BookListened>
          </BookRow>
        </BookBg>
      </BookContainer>
    </>
   );
}

export default Book;
import React from "react";
import { Link } from 'react-router-dom';
import Book from "../Books";
import BoolList from './../../Data/index'
import { CategoryContainer,
         CategoryTitle,
         CategotyList,
         CategoryItem, 
         CategotyRow         
       } from "./CategoriElements";  

function Categories() {
 
  const  style ={
      color: '#C9AC8C',
  }

  const fn = (e) => {
    console.log(e.target);
  }

  return (  
    <>
      <CategoryContainer>
        <CategoryTitle> Asosiy kategoriyalar</CategoryTitle>
        <CategotyList>
          <CategoryItem onClick={fn}>Temuriylar davri </CategoryItem>
          <CategoryItem style={style}>Jadid adabiyoti </CategoryItem>
          <CategoryItem>Sovet davri </CategoryItem>
          <CategoryItem>Mustaqillik davri</CategoryItem>
        </CategotyList>
        <CategotyRow>
          {BoolList.map((item) => (
            <Link to={`/${item.id}`}>
               <Book
              key={item.id}
              id={item.id}
              Img={item.Img} 
              Author={item.Author}
              Age={item.Age}
              Read={item.Read}
              Listened={item.Listened}
             />
            </Link>))}
        </CategotyRow>
      </CategoryContainer>
    </>
  );
}

export default Categories;
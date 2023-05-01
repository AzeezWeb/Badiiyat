import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';
import SearchSectin from '../Components/Search';
import Categories from '../Components/Categories';
import data from '../Data';
import Book from '../Components/Books/index';
import { CategotyRow, CategoryContainer, SearchResolt } from '../Components/Categories/CategoriElements';

function Home() {

  const [ initialData, setInitialData ] = useState([])
  const [ inputValue, setValue] = useState(0)

  const searchBooks = (e) =>  {
    const value = e.target.value.toLowerCase();
    setValue(value.length)
    const filter = data.filter(user => {
      return user.Author.toLowerCase().includes(value);
    });
    return setInitialData(filter)
  } 
 

  const Books = () => {
    if(inputValue === 0) {
      return ( <Categories/> )
    } else if(initialData.length === 0) {
      return (
      <SearchResolt> Siz izlagan ma'lumot topilmadi !!!</SearchResolt> 
      )
    } else {
      return (
        <CategoryContainer>
          <CategotyRow>
          {initialData.map((item) => (
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
      )
    }

  }

  return (
    <>
        <Hero/>
        <SearchSectin search={searchBooks}/>
        {Books()}
    </>
  );
}

export default Home;

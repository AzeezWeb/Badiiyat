import styled from "styled-components";


export const CategoryContainer = styled.div`
  max-width: 1300px;  
  width: 100%;
  padding: 22px 60px;
  margin: 0 auto;
`
export const CategoryTitle =styled.h2`
  color: #C9AC8C;
  font-size: 31px;
  font-family: 'Rotterburg Stylish FREE';
  text-align: center;
  margin-bottom: 30px;
`

export const CategotyList = styled.ul`
  max-width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;


  @media (max-width: 768px)  {
    max-width: 500px;
    display: flex;
    justify-content: center;
  }


  @media (max-width: 400px)  {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
`

export const CategoryItem = styled.li`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
  list-style: none;
  cursor: pointer;
  margin: 5px 0;


  @media (max-width: 768px)  {
    margin: 0 15px 10px 15px;
  }
`

export const CategotyRow = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 47px;
`

export const SearchResolt = styled.h2`
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 25px;
`
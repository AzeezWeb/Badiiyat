import React from "react";
import data from "../../Data";
import { useParams } from "react-router-dom";
import { 
          AuthorContainer,
          AuthorRow,
          AuthorImgBox,
          AuthorImg,
          AuthorDataRow,
          AuthorDateDes,
          AuthorDateP,
          AuthorDateAge,
          AuthorDes,
          AuthorName,
          AuthorAbout,
          AuthorTitleRow,
          AuthorTheWork,
          AuthorTheWorkDes,
          AuthorTheWorkImgBox,
          AuthorTheWorkImg,
          AuthorTheWorkImgDes,
          AuthorTheWorkImgDesP,
          AuthorBookRow
        } from './AuthorElements'

const Author = (  ) => {
const match = useParams()
const id = Number(match.id)
console.log(data);
console.log(id);


const author = data.filter(item => (item.id === id))
console.log(author);
  return  (
      <AuthorContainer>
          <AuthorRow>
            <AuthorImgBox>
              <AuthorImg src={author[0].Img}/>
              <AuthorDataRow> 
                  <AuthorDateDes>
                      <AuthorDateP> Tugilgan sanasi</AuthorDateP>
                      <AuthorDateAge> {author[0].DateOfBirth}</AuthorDateAge>
                      <AuthorDateP> {author[0].City}</AuthorDateP>
                  </AuthorDateDes>
                  <AuthorDateDes>
                      <AuthorDateP> Tugilgan sanasi</AuthorDateP>
                      <AuthorDateAge> {author[0].DateOfDeath}</AuthorDateAge>
                      <AuthorDateP> {author[0].City}</AuthorDateP>
                  </AuthorDateDes>
              </AuthorDataRow>
            </AuthorImgBox>
            <AuthorDes>
                <AuthorName> {author[0].Author}</AuthorName>
                <AuthorAbout> {author[0].About}</AuthorAbout>
                <AuthorTheWork> Ijodi</AuthorTheWork>
                <AuthorTheWorkDes>{author[0].TheWork} </AuthorTheWorkDes>
                <AuthorTitleRow> 
                    <AuthorTheWork>Asarlari</AuthorTheWork>
                    <AuthorTheWorkDes>Barchasini ko'rish</AuthorTheWorkDes>
                </AuthorTitleRow>
                <AuthorBookRow>
                  {author[0].TheWorks.map((item)=> (
                    <AuthorTheWorkImgBox>
                      <AuthorTheWorkImg src={item.BookImg} />
                      <AuthorTheWorkImgDes> {item.BookName}</AuthorTheWorkImgDes>
                      <AuthorTheWorkImgDesP>{item.Suggestions}</AuthorTheWorkImgDesP>
                    </AuthorTheWorkImgBox>
                    
                  ))}
                </AuthorBookRow>
            </AuthorDes>
          </AuthorRow>
      </AuthorContainer>
  )
}

export default Author;

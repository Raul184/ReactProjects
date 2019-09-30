import React from 'react'
import styled from 'styled-components';
//to be refactored in .env file
const urlImg = `https://image.tmdb.org./t/p/w780/`;

const Wrap = styled.div`
  background: url(${props => urlImg + props.random.backdrop_path});
  background-size: cover;
  height:700px;
  font-size:22px;
  color: white;
  font-family: Roboto;
`;
const WrapInfo = styled.div`
  position: relative;
  color: rgba(205, 220, 57, 1);
`;

const WrapInfoContent = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  background: rgba(38 , 50 , 56, .5);
  padding: 10px;

`;

const Title = styled.h1`
  color: rgba(255 , 179, 0, 1);
  max-width: 300px;
  font-family: "Roboto", cursive, sans-serif;
`;

const Par = styled.p`
  font-size: 18px;
  max-width: 600px;
`;

const Vote = styled.span`
  color: rgba(100, 221, 23, 1);
  font-family: "Cinzel" , serif;
`;

const Loading = styled.div`
  text-align: center;
  font-size: 25px;
`;
export default function Destacados({ pelicula }) {
  console.log(pelicula)
  if (pelicula) {
    return (
      <Wrap random={pelicula}>
        <WrapInfo>
          <WrapInfoContent>
            <Title>{pelicula.title}</Title>
            <Par>{pelicula.overview}</Par>
            <Vote>{pelicula.vote_average}/10</Vote>
          </WrapInfoContent>
        </WrapInfo>
      </Wrap>
    )  
  } else {
    return <Loading>Loading ...</Loading>
  }
}

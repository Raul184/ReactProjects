import React from 'react';
import styled from 'styled-components';
//pic
const urlPic = "https://image.tmdb.org/t/p/w185";

const Wrap = styled.div`
  display: flex;
  background: black;
`;
const Item = styled.div`
  background: url(${props => urlPic + props.pelicula.poster_path}) no-repeat;
  background-size: cover;
  height: 300px;
  width: 200px;
`
;
export default function SearchResults({data}) {
  return (
    <Wrap>
      {
        data.map(item => <Item pelicula={item} />)
      }
    </Wrap>
  )
}

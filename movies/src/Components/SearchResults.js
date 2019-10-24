import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//pic
const urlPic = "https://image.tmdb.org/t/p/w185";

const Wrap = styled.div`
  display: flex;
  background: black;
  flex-wrap: wrap;
`;

const Item = styled(Link)`
  background: url(${props => urlPic + props.pelicula.poster_path}) no-repeat;
  background-size: cover;
  height: 300px;
  width: 200px;
`;

export default function SearchResults({data}) {
  return (
    <Wrap>
      {
        data.map(item => <Item key={item.id} pelicula={item} to={`/details/${item.id}`} />)
      }
    </Wrap>
  )
}

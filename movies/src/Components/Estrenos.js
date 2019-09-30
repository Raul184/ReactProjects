import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


//to be refactored in .env file
const urlImg = `https://image.tmdb.org./t/p/w154/`;

const Wrap = styled.div`
  >ul{
    background: rgba(66, 165, 245, 1);
    padding-left: 0;
    overflow: scroll;
    display: flex;
    align-items: strech;
    margin: 0;
  }
`;
const Li = styled(Link)`
  background: url(${props => urlImg + props.peli.poster_path}) no-repeat;
  background-size: cover;
  display: inline-block;
  min-width: 200px;
  height: 300px;
  margin: 5px;
  font-family: 'Amatic SC, cursiva';
  color: yellow;
  font-size: 22px;
  font-weight: bold;
  list-style: none;
  text-decoration: none;
  >span{
    display: none;
    background: rgba(38, 50, 56, .5);
  }
  &:hover{
    >span{
      display: block;
    }
  }
`;

export default function Estrenos({pelis}) {
  return (
    <Wrap>
      <ul>
        {
          pelis.map(item =>
            <Li key={item.id} peli={item} to={`details/${item.id}`}>
              <span>{item.title}</span>
            </Li>
          )
        }
      </ul>
    </Wrap>
  )
}

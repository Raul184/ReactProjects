import React from 'react'
//Styled-components
import styled from 'styled-components';
//Cover Movies API
import { urlImage } from '../config/config';

const Wrap = styled.div`
  background: url(${props => urlImage + props.movie.backdrop_path}) no-repeat;
  background-size: cover;
  height: 98vh;
  color: white;
  font-family: 'Monospace' , sans-serif;
`;
const Info = styled.div`
  position: relative;
  color: rgba(205, 220, 57, 1);
`;
const SubInfo = styled.div`
  position: absolute;
  top: 150px;
  left: 150px;
  
`;

export default function MostWatched(props) {
  return (
    <Wrap movie={props.most}>
      <Info>
        <SubInfo>
          <h1>{props.most.title}</h1>
        </SubInfo>
      </Info>
    </Wrap>    
  )
}




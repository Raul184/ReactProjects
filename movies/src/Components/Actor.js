import React from 'react'
import styled from 'styled-components';



const Wrap = styled.div`
  border: 2px solid gold;
  margin: 2px;
`;

const Pic = styled.img`

`;

const Name = styled.span`
  background: rgba( 0, 0, 0, .5);
  color: white;
`;

export default function Actor({ actor }) {
  let urlImage = "https://image.tmdb.org/t/p/w185";
  return (
    <Wrap>
      <Pic
        src={actor.profile_path ?
          `${ urlImage }${ actor.profile_path }` :
          "http://dummyimage.com/185&text=No Image to display"
        }
      ></Pic>
      <Name>{actor.name}</Name>
    </Wrap>
  )
}

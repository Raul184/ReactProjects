import React from 'react';
import styled from 'styled-components';
import Titulo from '../Components/Titulo';
import Actor from '../Components/Actor';

const Wrap = styled.div`
  display: flex;
  overflow: scroll:
`;
export default function Cast({ cast }) {
  if(cast)
  return (
    <>
      <Titulo>Casting:</Titulo>
      <Wrap>
        {
          cast.map(people => {
            return <Actor key={people.cast_id} actor={people} />
          })
        }
      </Wrap>
    </>
  )
  return (
    <div>Loading...</div>
  )
}

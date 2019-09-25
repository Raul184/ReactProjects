import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
  >ul{
    background: rgba(66, 165, 245, 1);
    padding-left: 0;
  }
`;
const Li = styled.li`
  list-style: none;
`;

export default function Estrenos({pelis}) {
  return (
    <Wrap>
      <ul>
        {
          pelis.map(item => <Li key={item.id}>
            {item.title}
          </Li>)
        }
      </ul>
    </Wrap>
  )
}

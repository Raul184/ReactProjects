import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 75px;
  background: rgba(0, 0, 0, .5);
  color: white;
  >h3{
    margin-left: 20px;
  }
`;
export default function Header() {
  return (
    <Wrap>
      <h3>Titles to change</h3>
    </Wrap>
  )
}

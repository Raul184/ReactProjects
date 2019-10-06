import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 75px;
  padding: 20px;
  background: rgba(0, 0, 0, .5);
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  >h3{
    margin-left: 20px;
  }
`;

const DateWrap = styled.div`
  
`;
export default function Header({date}) {
  return (
    <Wrap>
      <h3>Titles to change</h3>
      <DateWrap>{date.toLocaleString()}</DateWrap>
    </Wrap>
  )
}

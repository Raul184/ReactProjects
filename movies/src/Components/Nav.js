import React from 'react'
import styled from 'styled-components';
//comps.
import Search from './Search';

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
export default function Nav({date}) {
  return (
    <Wrap>
      <h3>Movie G'o!</h3>
      <Search />
      <DateWrap>{date.fecha.toLocaleString()}</DateWrap>
    </Wrap>
  )
}

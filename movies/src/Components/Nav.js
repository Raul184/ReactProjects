import React from 'react'
import styled from 'styled-components';
//comps.
import Search from './Search';
//hook
import { useState } from 'react';

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
export default function Nav({ path, date }) {
  const [ search, setSearch ] = useState('');
  
  //onChange
  const handleChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <Wrap>
      <h3>Movie G'o!</h3>
      {
        path === '/' && <Search handleChange={handleChange}/>
      }
      <DateWrap>{date.fecha.toLocaleString()}</DateWrap>
    </Wrap>
  )
}

import React from 'react';
import styled from 'styled-components';
import { FaSearch} from 'react-icons/fa';

const Wrap = styled.div`
  padding: 8px;
  box-shadow: 1px 1px 2px #FFCA28;
  display: flex;
`;
const Input = styled.input`
  background: none;
  border: none;
  color: yellow;
  width: 200px;
  margin-left: 12px;
  &::placeholder{
    font-size: 18px;
    font-weight: 600;
    color: #FFCA28;
  }
`;

const Btn = styled.button`
  background: transparent;
  border: none;
  font-weight: 600;
  font-size: 18px;
  color: yellow;
`;

export default function Search({handleChange , clear}) {
  return (
    <Wrap>
      <FaSearch color="#FFCA28"/>
      <Input placeholder="Search" onKeyPress={handleChange} />
      <Btn
        href="#"
        onClick={() => clear}
      >
        X
      </Btn>
    </Wrap>
  )
}

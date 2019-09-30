import React from 'react';
import styled from 'styled-components'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Wrap = styled.div`
    
`;

export default function Footer() {
  return (
    <Wrap>
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
    </Wrap>
  )
}

import React from 'react'
//Styled-components
import styled from 'styled-components';

export default function MostWatched() {
  return (
    <Wrap>
      <div className="mostWatched">
        <h2>Most Watched</h2>
      </div>
    </Wrap>  
  )
}


const Wrap = styled.div`
  color: white;  
`;

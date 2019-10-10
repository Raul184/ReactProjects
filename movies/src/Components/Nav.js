import React from 'react'
import styled from 'styled-components';
//comps.
import Search from './Search';
//redux
import { connect } from 'react-redux';
//actions
import { getBusqueda } from '../redux/actions/search';


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
function Nav(props) {
  //onChange
  const handleChange = (e) => {
    props.getBusqueda(e.target.value);
  }
  return (
    <Wrap>
      <h3>Movie G'o!</h3>
      {
        props.path === '/' && <Search handleChange={handleChange}/>
      }
      <DateWrap>{props.fecha.dataFecha.toLocaleString()}</DateWrap>
    </Wrap>
  )
}

//Pass in reducers
const mapStateToProps = (fecha) => {
  return fecha
}
//Connect to Redux Store
export default connect(mapStateToProps, {
  getBusqueda
})(Nav);
import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaRegHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
// import Nav from "./Nav";

const Header = () => {
  const location = useLocation();
  let state={ind:-1}
  let display=false;
  
 
  let ind=0;
  if(location && location.state){
    state = location.state;
    display=state.display;
    ind=state.ind;
  }
  // console.log("vikas",state,display);
  return (
    <MainHeader>
      <NavLink to="/" state={{display:false}}>
      < FaHome style={{color: '#fff', fontSize: '50px',paddingTop:'3rem',paddingBottom:'2.5rem',color:'grey'}}/>
      </NavLink>
      {/* <Nav /> */}
      {display && <div className="text">test: <span>{state.ind}</span></div>}
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 4rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
 
  .logo {
    height: 1rem;
  }
  .text{
  font-size:2rem;
  font-weight:460;
  font-family: Arial;
  color:grey;
  text-shadow:.1rem .1rem .1rem red;
}
@media (max-width: 700px) {
.text{
  font-size:1.4rem;
}
}

`;
export default Header;

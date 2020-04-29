import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-grow: 0;
  overflow: hidden;
`;

const Link = styled(NavLink)`
  width: 20%;
  text-align: center;
  padding: 20px 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: transform 0.6s;
  height: 100px;
  line-height: 100px;
  &:nth-child(1){
    background-color: #29363B
  };
  &:nth-child(2){
    background-color: #EA495F
  };
  &:nth-child(3){
    background-color: #F4837D
  };
  &:nth-child(4){
    background-color: #FDCEA9
  };
  &:nth-child(5){
    background-color: #99B998
  };
  &:hover{
    transform: scale(1.1);
    z-index: 2;
  }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to='/registration' >Registration</Link>
            <Link to='/authorisation' >Authorisation</Link>
            <Link to='/recovery' >Password recovery</Link>
            <Link to='/new-password' >Set new password</Link>
            <Link to='/profile' >Profile</Link>
        </HeaderWrapper>
    )
};

export default Header
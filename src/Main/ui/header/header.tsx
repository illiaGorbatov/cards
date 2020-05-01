import React from 'react';
import styled from "styled-components/macro";
import {NavLink} from "react-router-dom";

const HeaderWrapper = styled.div`
  max-width: 1082px;
  margin: auto;
  display: flex;
  flex-grow: 0;
`;

const Link = styled(NavLink)`
  width: 20%;
  text-align: center;
  padding: 20px 10px;
  text-decoration: none;
  color: grey;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  transition: 0.3s;
  height: 60px;
  line-height: 60px;
  &:hover{
    color: white;
    font-size: 16px;
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
  }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to='/registration'>Registration</Link>
            <Link to='/authorisation'>Authorisation</Link>
            <Link to='/recovery'>Password recovery</Link>
            <Link to='/new-password'>Set new password</Link>
            <Link to='/profile'>Profile</Link>
        </HeaderWrapper>
    )
};

export default Header
import React from 'react';
import styled from "styled-components";

const InputWrapper = styled.input`
  display: block;
  height: 60px;
  width: 350px;
  padding: 0 40px;
  margin: 40px auto;
  color: grey;
  border: none;
  border-bottom:1px solid grey;
  font-size: 15px;
  &::placeholder {
    transition: transform 0.5s;
    text-transform: uppercase;
    position:relative;
  };
  &:hover,
  &:focus,
  &:active {
    color:#ff5722;
    outline:none;
    border-bottom:1px solid #ff5722;
    &::placeholder{
      color:#ff5722;
      transform:translateY(-20px);
  }
`;

type PropsType = {
    placeholder: string
}

const Input = (props: PropsType) => {
    return (
        <InputWrapper placeholder={props.placeholder}/>
    )
};

export default Input
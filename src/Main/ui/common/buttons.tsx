import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.button<{inputColor: string}>`
  position: relative;
  cursor: pointer;
  width: 250px;
  height: 60px;
  background-color: ${props => props.inputColor};
  border: none;
  &:hover > div {
    transform: translateX(20%) translateY(-50%);
  }
`;

const ButtonName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: transform 0.5s;
  text-transform: uppercase;
  color: white;
  font-size: 15px;
`;

type PropsType = {
    color: string,
    name: string
}

const Button = (props: PropsType) => {
    return (
        <ButtonWrapper inputColor={props.color}>
            <ButtonName>
                {props.name}
            </ButtonName>
        </ButtonWrapper>
    )
};

export default Button
import React from 'react';
import styled from "styled-components/macro";
import Header from "./header/header";
import Routes from "./route/routes";


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: cornsilk;
`;

const App = () => {
    return (
        <Wrapper>
            <Header/>
            <Routes/>
        </Wrapper>
    );
}

export default App;

import React from "react";
import styled from "styled-components";
import Buildmainscreen from "./Buildmainscreen";
import Sidemainscreen from "./Sidemainscreen";
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Mainscreen>
          <Buildmainscreen />
        </Mainscreen>
        <Sidescreen>
          <Sidemainscreen />
        </Sidescreen>
      </Wrapper>
    </Container>
  );
};

export default Home;
// const Wrapper = styled.div``
const Sidescreen = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 600px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Mainscreen = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 500px;
  }
`;
const Wrapper = styled.div`
  width: 1000px;
  padding-top: 50px;
  display: flex;

  justify-content: space-between;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: calc(100vh-60px);
  height: 100%;
  padding-top: 40px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
`;

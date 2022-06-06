import React from "react";
import styled from "styled-components";
const Sidemainscreen = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Image />
          <Hold>
            <Name>Boy</Name>
            <Profile>Profile</Profile>
          </Hold>
        </Holder>
        <Text>
          <Suggest>For you</Suggest>
          <Action>See All</Action>
        </Text>
        <Holder>
          <Image />
          <Hold>
            <Name>Boy</Name>
            <Profile>Profile</Profile>
          </Hold>
        </Holder>
        <Text>
          <Content>Follow</Content>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Sidemainscreen;
// const Container = styled.div``
// const Container = styled.div``
const Content = styled.div``;
const Action = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
`;
const Suggest = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: grey;
  cursor: pointer;
`;
const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;
const Profile = styled.div``;
const Name = styled.div`
  font-weight: 700;
`;
const Hold = styled.div``;
const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
  outline: 3px solid purple;
  border: 1.2px solid transparent;
  background-clip: content-box;
  margin-right: 15px;
`;
const Holder = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  margin-left: 50px;
  width: 420px;
`;
const Container = styled.div`
  width: 100%;
  position: fixed;
`;

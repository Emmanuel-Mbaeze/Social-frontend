import React from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
const Detailscreen = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Image src="/images/blue.JPG" />
          <Contents>
            <Namedetails>
              <Profilename>Manel</Profilename>
              <Editbutton>Edit profile</Editbutton>
              <Icon />
            </Namedetails>
            <Namedetails>
              <Post>
                <Count>Manel</Count>
                <Title></Title>
              </Post>
              <Post>
                <Count>0</Count>
                <Title>Following</Title>
              </Post>
              <Post>
                <Count>0</Count>
                <Title>Followers</Title>
              </Post>
            </Namedetails>
            <Details>
              <Name>Manel</Name>
              <Bio>Dev</Bio>
              <Website href="#">Manel.com</Website>
            </Details>
          </Contents>
        </Top>
      </Wrapper>
    </Container>
  );
};

export default Detailscreen;
// const Contents = styled.div``
const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;
const Bio = styled.div``;
const Website = styled.a`
  color: rgba(16, 143, 233);
  font-style: italic;
  cursor: pointer;
  text-decoration: none;
`;
const Name = styled.div`
  font-weight: 500;
`;
const Details = styled.div`
  font-size: 13px;
`;
const Title = styled.div`
  text-transform: ${({ cap }) => (cap ? "Uppercase" : "normal")};
`;
const Post = styled.div`
  display: flex;
  margin-right: 20px;
  font-size: 13px;
`;
const Count = styled.div`
  font-weight: 500;
  margin-right: 5px;
`;
const Icon = styled(FiSettings)`
  font-size: 25px;
  cursor: pointer;
`;
const Editbutton = styled.div`
  padding: 10px 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  font-size: 12px;
  margin-right: 10px;
`;
const Profilename = styled.div`
  font-size: 25px;
  font-weight: lighter;
  margin-right: 20px;
`;
const Namedetails = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 80px;
`;
const Top = styled.div`
  margin: 10px 40px;
  display: flex;
`;
const Wrapper = styled.div`
  width: 768px;
  background-color: white;
`;
const Container = styled.div`
  padding-top: 70px;
  width: 100%;
  height: 100%;
  min-height: calc(100vh-70px);
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

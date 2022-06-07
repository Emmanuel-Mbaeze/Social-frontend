import React, { useState } from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { BsGrid3X3, BsBookmark, BsPersonBoundingBox } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
const Detailscreen = () => {
  const [post, setPost] = useState(true);
  const [video, setVideo] = useState(false);
  const [save, setSave] = useState(false);
  const [tag, setTag] = useState(false);
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
              <Bio>
                Trust the process 🌈 Software developer/Cloud engineer 🌚Black
                🖤
              </Bio>
              <Website href="#">Manel.com</Website>
            </Details>
          </Contents>
        </Top>

        <Nav>
          <NavHolder
            bg={post ? "bg" : ""}
            onClick={() => {
              setPost(true);
              setVideo(false);
              setSave(false);
              setTag(false);
            }}
          >
            <NavIcon />
            <Title cap fs>
              Posts
            </Title>
          </NavHolder>
          <NavHolder
            bg={video ? "bg" : ""}
            onClick={() => {
              setPost(false);
              setVideo(true);
              setSave(false);
              setTag(false);
            }}
          >
            <NavIcon1 />
            <Title cap fs>
              Video
            </Title>
          </NavHolder>
          <NavHolder
            bg={save ? "bg" : ""}
            onClick={() => {
              setPost(false);
              setVideo(false);
              setSave(true);
              setTag(false);
            }}
          >
            <NavIcon2 />
            <Title cap fs>
              Save
            </Title>
          </NavHolder>
          <NavHolder
            bg={tag ? "bg" : ""}
            onClick={() => {
              setPost(false);
              setVideo(false);
              setSave(false);
              setTag(true);
            }}
          >
            <NavIcon3 />
            <Title cap fs>
              Tags
            </Title>
          </NavHolder>
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default Detailscreen;
const NavIcon3 = styled(BsPersonBoundingBox)`
  font-size: 10px;
  margin-right: 3px;
`;

const NavIcon2 = styled(BsBookmark)`
  font-size: 10px;
  margin-right: 3px;
`;

const NavIcon1 = styled(MdSlowMotionVideo)`
  font-size: 10px;
  margin-right: 3px;
`;

const NavIcon = styled(BsGrid3X3)`
  font-size: 10px;
  margin-right: 3px;
`;

const NavHolder = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  position: relative;
  :after {
    content: "";
    height: 2px;
    background-color: ${({ bg }) => (bg ? "purple" : "transparent")};
    width: 100%;
    position: absolute;
    top: -21px;
  }
  cursor: pointer;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid silver;
  padding: 20px 0;
`;
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
  text-transform: ${({ cap }) => (cap ? "uppercase" : "normal")};
  font-size: ${({ fs }) => (fs ? "10px" : "12px")};
  font-weight: ${({ fs }) => (fs ? "500" : "normal")};
  color: ${({ fs }) => (fs ? "lightgray" : "black")};
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

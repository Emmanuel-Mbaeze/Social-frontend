import React from "react";
import styled from "styled-components";
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";

import { AiOutlineHeart, AiFillHome } from "react-icons/ai";

const Buildmainscreen = () => {
  return (
    <Container>
      <Topbuild>
        <Holder>
          <Image src="/images/dark.JPG" />
          <Name>Papa</Name>
        </Holder>
      </Topbuild>
      <PostBuild>
        <Top>
          <Hold>
            <Imgprofile src="/images/dark.JPG" />
            <Profileholder>
              <Profilename>Ike</Profilename>
              <Profile>Original</Profile>
            </Profileholder>
          </Hold>
          <Doticon />
        </Top>
        <Postimage src="/images/blue.JPG" />
        <Icons>
          <Hold>
            <Loveicons />
            <Commenticons />
            <Sendicons />
          </Hold>
          <Savedicons />
        </Icons>
        <LikePost>
          <span>{0}</span>Likes
        </LikePost>
        <Post>
          <span>Ike</span>
          <Content>
            'persistStore' is defined but never used no-unused-vars webpack
            5.68.0 compiled with 1 warning in 2407 ms
          </Content>
        </Post>
        <View>
          View All <span>{0}</span> Comments
        </View>
        <Comment>
          <Hold>
            <span>Amadi</span>
          </Hold>
          <Loveicons />
        </Comment>
        <Time> 3 HOURS AGO</Time>
        <Postinput>
          <Posticons />
          <Input placeholder="Add Comment" />
          <Text>Post</Text>
        </Postinput>
      </PostBuild>
    </Container>
  );
};

export default Buildmainscreen;
// const Container = styled.div``
const Comment = styled.div``;
const View = styled.div`
  color: lightgray;
  margin: 20px;
`;
const Text = styled.div`
  font-weight: bold;
  color: lightblue;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  flex: 1;
  ::placeholder {
    font-size: 18px;
    font-family: poppins;
  }
`;
const Posticons = styled(FaRegSmile)`
  margin: 0 10px;
  font-size: 30px;
`;
const Postinput = styled.div``;
const Time = styled.div`
  color: silver;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 20px;
`;
const Content = styled.div``;
const Post = styled.div`
  display: flex;
  margin: 0 20px;
  font-size: 18px;
  span {
    margin-right: 10px;
    font-weight: 500;
    :hover {
      text-decoration: underline;
    }
  }
`;
const LikePost = styled.div`
  margin-left: 20px;
  margin-right: 0px;
  font-size: 20px;
  font-family: poppins;
  span {
    font-weight: 700;
    margin-right: 5px;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;
const Savedicons = styled(BsBookmark)`
  font-size: 30px;
  transition: all 350ms;
  color: grey;
  :hover {
    cursor: pointer;
    color: silver;
  }
`;
const Loveicons = styled(AiOutlineHeart)`
  font-size: 30px;
  transition: all 350ms;
  color: grey;
  :hover {
    cursor: pointer;
    color: silver;
  }
`;
const Commenticons = styled(FaRegComment)`
  font-size: 30px;
  transition: all 350ms;
  color: grey;
  :hover {
    cursor: pointer;
    color: silver;
  }
`;
const Sendicons = styled(FiSend)`
  font-size: 30px;
  transition: all 350ms;
  color: grey;
  :hover {
    cursor: pointer;
    color: silver;
  }
`;
const Postimage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;
const Hold = styled.div`
  display: flex;
`;
const Doticon = styled(BsThreeDots)`
  font-size: 30px;
  color: silver;
`;
const Profilename = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 15px;
`;
const Profileholder = styled.div``;
const Profile = styled.div``;
const Imgprofile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
  outline: 3px solid purple;
  border: 1.2px solid transparent;
  background-clip: content-box;
  margin-right: 15px;
`;
const Top = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const PostBuild = styled.div`
  margin: 7px 0;
  background-color: white;
  border-radius: 7px;
`;
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Topbuild = styled.div`
  padding: 20px 0;
  background-color: white;
  border-radius: 7px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: flex-start;
`;
const Name = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 15px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
  outline: 3px solid purple;
  border: 1.2px solid transparent;
  background-clip: content-box;
`;
const Container = styled.div`
  width: 100%;
`;

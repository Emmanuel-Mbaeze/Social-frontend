import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiFillHome } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Logo>Social Build</Logo>
          <SearchBar>
            <Icon />
            <Searchinput placeholder="search" />
          </SearchBar>
        </Hold>
        <Hold>
          <HomeIcon />
          <PostIcon />
          <LoveIcon />
          <Image src="/images/dark.JPG" />
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Header;
// const Container = styled.div``
const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
  cursor: pointer;
  background-color: purple;
`;
const Searchinput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 20px;
  ::placeholder {
    font-family: poppins;
  }
`;
const LoveIcon = styled(AiOutlineHeart)`
  font-size: 30px;
  margin: 0 10px;
  color: red;
  cursor: pointer;
`;
const PostIcon = styled(BiAddToQueue)`
  font-size: 30px;
  margin: 0 10px;
  /* color: #0000; */
  cursor: pointer;
`;
const HomeIcon = styled(AiFillHome)`
  font-size: 30px;
  margin: 0 10px;
  /* color: #0000; */
  cursor: pointer;
`;
const Icon = styled(BsSearch)`
  margin: 0 10px;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 37px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #fafafa;
`;
const Logo = styled.div`
  margin-right: 40px;
  font-size: 25px;
  font-weight: 500;
  font-style: italic;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  position: fixed;
  background-color: white;
  /* align-items: center; */
`;

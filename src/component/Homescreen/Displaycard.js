import React from "react";
import styled from "styled-components";
const Displaycard = ({ setDisplay }) => {
  return (
    <Container
      onMouseEnter={() => {
        setDisplay(true);
      }}
      onMouseLeave={() => {
        setDisplay(false);
      }}
    >
      <Wrapper>
        <Top>
          <Image src="/images/blue.JPG" />
          <Holder>
            <Name>Name</Name>
            <Realname>Vshoki tuni</Realname>
            <Follow>
              Followed by <span>Lex</span>
            </Follow>
          </Holder>
        </Top>
        <Middle>
          <Countholder>
            <Count>{0}</Count>
            <Title>Post</Title>
          </Countholder>
          <Countholder>
            <Count>{0}</Count>
            <Title>Followers</Title>
          </Countholder>
          <Countholder>
            <Count>{0}</Count>
            <Title>Follow</Title>
          </Countholder>
        </Middle>
        <Bottom>
          <Images src="/images/blue.JPG" />
          <Images src="/images/blue.JPG" />
          <Images src="/images/blue.JPG" />
        </Bottom>
        <Button>Follow</Button>
      </Wrapper>
    </Container>
  );
};

export default Displaycard;
const Button = styled.div`
  background-color: skyblue;
  margin: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  color: white;
  border-radius: 3px;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
  }
`;
const Images = styled.img`
  width: 118px;
  height: 118px;
  object-fit: cover;
  :hover {
    opacity: 0.8;
  }
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Middle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding: 10px 0;
`;
const Count = styled.div`
  font-weight: 700;
`;
const Title = styled.div`
  text-transform: capitalize;
`;
const Countholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Name = styled.div``;
const Follow = styled.div``;
const Realname = styled.div`
  font-size: 13px;
  margin-bottom: 15px;
  color: gray;
`;
const Holder = styled.div``;
const Top = styled.div`
  display: flex;
  padding: 10px 0;
  margin: 20px;
`;
const Wrapper = styled.div`
  padding-bottom: 10px;
`;
const Container = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  width: 400px;
  font-size: 12px;
  border-radius: 5px;
  z-index: 10;
`;

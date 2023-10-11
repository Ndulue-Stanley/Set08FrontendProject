import React from 'react'
import styled from "styled-components";
import bg from '../Assets/bg2.jpg'
import istration from '../Assets/illustration.png'

const Homescreen = () => {
  return (
    <div>
    <Container>
    <Wrapper>
      <Left>
        <Img src={istration}/>
      </Left>
      <Right>
        <Large>Bridging Your Future With Innovative Technology</Large>
        <Small>
          Dive into the world of agile software development and discover how
          it's bridging the gap using innovation and software engineering
        </Small>
      </Right>
    </Wrapper>
  </Container>
    </div>
  )
}

export default Homescreen;

const Small = styled.div`
  width: 68%;
  font-size: 20px;
  background-color: #f3f3f3;
`;

const Img = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

const Large = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 30px;
  background-color: #f3f3f3;

  @media (max-width: 500px) {
    font-size: 50px;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 884px) {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 884px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 50px;
`;
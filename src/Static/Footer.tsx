import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <p>2023 Set08 TechConference. Allrights reserved</p>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 17px;
    font-weight: 450;
    @media (max-width: 320px) {
      font-size: 14px;
    }
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #f3f3f3;
`;

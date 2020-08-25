import React from "react";
import Header from "../components/smallComponents/Header";
import styled from "styled-components";

export default function Homepage() {
  return (
    <Wrapper>
      <Header />
      <Content>
        This should show homepage, where all the decks created should list as a
        thumbnail
      </Content>
    </Wrapper>
  );
}

const Content = styled.div`

`;

const Wrapper = styled.div``;

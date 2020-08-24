import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Left>
        <span>Tolarian</span>
      </Left>
    </Wrapper>
  );
}

const Left = styled.div``;

const Wrapper = styled.div`
  height: 46px;
  border-bottom: 1px solid #161616;
  line-height: 46px;
  padding: 0 28px;
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
  padding: 0 0 10px 0;
`;

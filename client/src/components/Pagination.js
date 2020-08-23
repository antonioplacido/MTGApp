import React from "react";
import styled from "styled-components";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <PageButtons>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </PageButtons>
  );
}

const PageButtons = styled.div``;

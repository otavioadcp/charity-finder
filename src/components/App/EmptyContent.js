import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin-top: 2rem;
  font-size: 6rem;
  color: rgba(0, 0, 0, 0.2);
`;

export default function EmptyContent({ data }) {
  return (
    <Container>
      <StyledSpan>Charity Finder</StyledSpan>
      <StyledSpan>
        {data && data.numberFound === 0
          ? "No Results"
          : "Select a Theme or Country"}
      </StyledSpan>
    </Container>
  );
}

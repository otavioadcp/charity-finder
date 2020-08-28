import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 1rem;
  background-color: #85cdc8;
  height: 3rem;
`;

const MediaIcons = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;

  a {
    color: unset;
  }

  .globalGiving-link {
    color: blue;
  }
`;

const GlobalGiving = styled.span`
  margin-right: 2rem;
`;

const StyledGithub = styled(Github)`
  height: 1.7rem;
  width: 1.7rem;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default function AppFooter() {
  return (
    <Container>
      <span>Created by OtavioADCP just for study. </span>

      <MediaIcons>
        <GlobalGiving>
          Made with the{" "}
          <a className="globalGiving-link" href="https://www.globalgiving.org/">
            Global Giving API's
          </a>{" "}
        </GlobalGiving>
        <a href="https://github.com/otavioadcp">
          <StyledGithub />
        </a>
      </MediaIcons>
    </Container>
  );
}

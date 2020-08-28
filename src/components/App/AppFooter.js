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

const StyledCredit = styled.span`
  font-size: 0.8rem;
  font-weight: lighter;
`;

export default function AppFooter() {
  return (
    <Container>
      <StyledCredit>Created by OtavioADCP just for study. </StyledCredit>
      <StyledCredit>
        icon by{" "}
        <a
          href="https://www.flaticon.com/br/autores/photo3idea-studio"
          title="photo3idea_studio"
        >
          photo3idea_studio
        </a>{" "}
      </StyledCredit>
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

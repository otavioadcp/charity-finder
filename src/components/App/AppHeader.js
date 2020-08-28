import React from "react";
import {
  AppHeader as Container,
  StyledSelect,
  StyledOption,
  HasNextButton,
  StyledButton,
  ProjectsCounter,
  AppTitle,
} from "./AppStyles";
import { NavigateNext } from "@styled-icons/material/NavigateNext";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledNext = styled(NavigateNext)`
  width: 1rem;
  height: 1rem;
`;
function AppHeader({ countryMethods, projectsMethods }) {
  function onChangeCountry(value) {
    countryMethods.handleChangeCountry(value);
    projectsMethods.handleCountryCode(value);
    projectsMethods.handleChangeTheme(null);
    projectsMethods.onNextProjects(null);
  }

  function onChangeTheme(value) {
    projectsMethods.handleChangeTheme(value);
    projectsMethods.handleCountryCode(null);
    countryMethods.handleChangeCountry(null);
    projectsMethods.onNextProjects(null);
  }

  return (
    <Container>
      <StyledDiv>
        <StyledSelect
          placeholder="Select country"
          onChange={(value) => onChangeCountry(value)}
          value={countryMethods.country}
          showSearch
        >
          {countryMethods.countryList.map((item) => (
            <StyledOption key={item.alpha2Code} value={item.name}>
              {item.name}
            </StyledOption>
          ))}
        </StyledSelect>

        <StyledSelect
          placeholder="Select theme"
          onChange={(value) => onChangeTheme(value)}
          value={projectsMethods.region}
        >
          {projectsMethods.theme.map((item) => (
            <StyledOption key={item.id} value={item.id}>
              {item.name}
            </StyledOption>
          ))}
        </StyledSelect>

        <div>
          <ProjectsCounter>{`Showing the ${
            projectsMethods.projects &&
            projectsMethods.projects.numberFound !== 0
              ? projectsMethods.projects.project.length
              : 0
          } first projects`}</ProjectsCounter>

          <HasNextButton
            hasNext={
              projectsMethods.projects && projectsMethods.projects.hasNext
            }
          >
            <StyledButton
              icon={<StyledNext />}
              onClick={() =>
                projectsMethods.onNextProjects(
                  projectsMethods.projects.nextProjectId
                )
              }
              type="link"
            >
              More projects
            </StyledButton>
          </HasNextButton>
        </div>
      </StyledDiv>
    </Container>
  );
}

export default AppHeader;

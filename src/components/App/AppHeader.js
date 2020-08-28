import React from "react";
import {
  AppHeader as Container,
  StyledSelect,
  StyledOption,
  HasNextButton,
  StyledButton,
  ProjectsCounter,
} from "./AppStyles";

import useProjects from "../../hooks/useProjects";

function AppHeader({ handleChange, projects, onNextProjects }) {
  const { theme, region } = useProjects();
  return (
    <Container>
      <StyledSelect
        placeholder="Select region"
        onChange={(value) => handleChange(value)}
        value={region}
      >
        {theme.map((item) => (
          <StyledOption key={item.id} value={item.id}>
            {item.name}
          </StyledOption>
        ))}
      </StyledSelect>

      <HasNextButton hasNext={projects && projects.hasNext}>
        <StyledButton
          onClick={() => onNextProjects(projects.nextProjectId)}
          type="primary"
          shape="round"
        >
          More projects
        </StyledButton>
      </HasNextButton>

      <ProjectsCounter>{`Showing the ${
        projects ? projects.project.length : 0
      } first projects`}</ProjectsCounter>
    </Container>
  );
}

export default AppHeader;

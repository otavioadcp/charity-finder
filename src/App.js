import React from "react";
import styled from "styled-components";
import CharityCard from "./components/CharityCard";
import api from "./api";
import { Select, Button } from "antd";

const { Option } = Select;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

const AppTitle = styled.span`
  padding-top: 1rem;
  height: 3rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

const AppContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin: 0rem 1rem 1rem 1rem;
  background-color: #e8e8e8;
  border-radius: 10px;
  justify-content: space-around;
`;

const StyledSelect = styled(Select)`
  width: 18rem;
`;

const AppHeader = styled.div`
  display: flex;
  padding: 1rem 1rem 1rem 1rem;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  background-color: #e8e8e8;
  border-radius: 10px;
`;

const ProjectsCounter = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const HasNextButton = styled.span`
  display: ${(props) => (props.hasNext ? "inline-block" : "none")};
  color: red;
  font-weight: 500;
  font-size: 1rem;
  width: 14%;
`;

function App() {
  const [theme, setTheme] = React.useState([]);
  const [region, setRegion] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [loadingContent, setLoadingContent] = React.useState(false);

  const [projects, setProjects] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function teste() {
      const result = await api.get(
        "/api/public/projectservice/themes?api_key=53ec46b9-fe86-46ee-a102-29f505ef50fb"
      );
      setTheme(result.data.themes.theme);
    }
    teste();
    setLoading(false);
  }, []);

  const getProjects = React.useCallback(async () => {
    setLoadingContent(true);
    const result = await api.get(
      `/api/public/projectservice/themes/${region}/projects/active?api_key=53ec46b9-fe86-46ee-a102-29f505ef50fb`
    );
    setProjects(result.data.projects);
    setLoadingContent(false);
  }, [region]);

  React.useEffect(() => {
    if (region) {
      getProjects();
    }
  }, [region, getProjects]);

  function handleChange(value) {
    setRegion(value);
  }

  if (loading) return <span>Loading</span>;
  return (
    <AppContainer>
      <AppTitle>Charity Finder</AppTitle>
      <AppHeader>
        <StyledSelect
          placeholder="Select region"
          onChange={(value) => handleChange(value)}
          value={region}
        >
          {theme.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          ))}
        </StyledSelect>

        <HasNextButton hasNext={projects && projects.hasNext}>
          <Button type="link">Next results</Button>
        </HasNextButton>

        <ProjectsCounter>{`We found: ${
          projects ? projects.project.length : 0
        } projects`}</ProjectsCounter>
      </AppHeader>
      <AppContent>
        {!loadingContent ? (
          projects ? (
            projects.project.map((project) => <CharityCard data={project} />)
          ) : null
        ) : (
          <h1>Carregando</h1>
        )}
      </AppContent>
    </AppContainer>
  );
}

export default App;

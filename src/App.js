import React from "react";
import AppContainer from "./components/App/AppContainer";
import AppHeader from "./components/App/AppHeader";
import AppContent from "./components/App/AppContent";
import useProjects from "./hooks/useProjects";
import AppFooter from "./components/App/AppFooter";
import CharityCardSkeleton from "./components/Cards/CharityCardSkeleton";
function App() {
  const {
    projects,
    handleChange,
    onNextProjects,
    loadingContent,
  } = useProjects();
  console.log("PROJETOS", projects);
  return (
    <>
      <AppContainer>
        <AppHeader
          onNextProjects={onNextProjects}
          handleChange={handleChange}
          projects={projects}
        />
        {loadingContent ? (
          <CharityCardSkeleton />
        ) : (
          <AppContent data={projects} />
        )}
      </AppContainer>
      <AppFooter />
    </>
  );
}

export default App;
//Ícones feitos por <a href="https://www.flaticon.com/br/autores/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>

import React from "react";
import AppContainer from "./components/App/AppContainer";
import AppHeader from "./components/App/AppHeader";
import AppContent from "./components/App/AppContent";
import useProjects from "./hooks/useProjects";
import useCountrys from "./hooks/useCountrys";

import AppFooter from "./components/App/AppFooter";
import CharityCardSkeleton from "./components/Cards/CharityCardSkeleton";
function App() {
  const projectsMethods = useProjects();
  const countryMethods = useCountrys();

  return (
    <>
      <AppContainer>
        <AppHeader
          countryMethods={countryMethods}
          projectsMethods={projectsMethods}
        />
        {projectsMethods.loadingContent ? (
          <CharityCardSkeleton />
        ) : (
          <AppContent projectsMethods={projectsMethods} />
        )}
      </AppContainer>
      <AppFooter />
    </>
  );
}

export default App;
//Ícones feitos por <a href="https://www.flaticon.com/br/autores/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>

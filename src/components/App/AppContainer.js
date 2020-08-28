import React from "react";
import { AppContainer as Container, AppTitle } from "./AppStyles";

function AppContainer({ children }) {
  return (
    <Container>
      <AppTitle>Charity Finder</AppTitle>
      {children}
    </Container>
  );
}

export default AppContainer;

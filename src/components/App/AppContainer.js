import React from "react";
import { AppContainer as Container } from "./AppStyles";

function AppContainer({ children }) {
  return <Container>{children}</Container>;
}

export default AppContainer;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
  height: 100%;
}
body,
#root {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  font-family: "Arial", sans-serif;
  background-color: #41B3A1;

}
`;

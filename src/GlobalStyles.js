import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body, #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
}
`;

import styled from "styled-components";
import { Select, Button } from "antd";

const { Option } = Select;

export const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: #85cdc9;
`;

export const AppTitle = styled.span`
  height: 5rem;
  min-width: 100%;
  display: block;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #3b3b3b;
  letter-spacing: 2px;
`;

export const AppContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin-top: 1rem;
  border-radius: 10px;
  max-width: 100%;
  justify-content: space-around;
`;

export const StyledSelect = styled(Select)`
  width: 18rem;
`;

export const StyledOption = styled(Option)``;

export const ProjectsCounter = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #3b3b3b;
`;

export const HasNextButton = styled.span`
  display: ${(props) => (props.hasNext ? "inline-block" : "none")};
  color: red;
  font-weight: 500;
  font-size: 1rem;
  transition: display 2s ease-in;
`;

export const StyledButton = styled(Button)`
  font-weight: bold;
`;

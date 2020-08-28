import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 0;
  height: 25rem;
  max-height: 25rem;
  width: 30rem;
  max-width: 30rem;

  margin: 1rem;
  border-radius: 20px;
  transition: all 0.2s ease;
  :hover {
    z-index: 98;
    box-shadow: 10px 10px 22px -3px rgba(0, 0, 0, 0.75);
    transform: scale(1.1);
  }
`;

export const ImgCard = styled.img`
  width: 100%;
  max-height: 100%;
  flex: 1;
  background-color: #85cdc8;
  border-radius: 20px;
`;

export const NameCard = styled.span`
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 0.8rem;
  display: flex;
  color: black;
  padding: 2px 6px;
  border-radius: 10px;
  margin-bottom: 5px;
  max-width: 95%;
`;

export const AddresCard = styled.span`
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  text-align: left;
  padding: 2px 4px;
  border-radius: 10px;
  max-width: 95%;
`;

export const ContactContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 5px;
  width: 100%;
`;

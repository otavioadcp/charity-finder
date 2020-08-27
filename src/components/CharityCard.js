import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  height: 20rem;
  width: 25rem;
  max-width: 30rem;
  margin: 1rem;
  background-color: blue;
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ImgCard = styled.img`
  width: 100%;
  height: 40%;
  flex: 1;
  background-color: #e8e8e8;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const NameCard = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;
  height: 3rem;
  border-bottom: 1px solid black;
`;

const AddresCard = styled.span`
  height: 3rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #e8e8e8;
  padding: 0.1rem;
`;

function CharityCard({ data }) {
  return (
    <CardContainer>
      <ImgCard src={data.imageLink} />
      <NameCard>{data.title}</NameCard>
      <AddresCard>
        Av. Madri, 151, Cond. Ana Paula, B3. Apto. 301, cuiabá, mato-grosso
      </AddresCard>
    </CardContainer>
  );
}

export default CharityCard;

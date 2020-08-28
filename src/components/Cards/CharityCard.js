import React from "react";
import {
  CardContainer,
  ImgCard,
  NameCard,
  AddresCard,
  ContactContainer,
} from "./CharityCardStyles";
import { LocationPin } from "@styled-icons/entypo/LocationPin";
import { PermIdentity } from "@styled-icons/material/PermIdentity";
import styled from "styled-components";

const StyledLocationIcon = styled(LocationPin)`
  display: flex;
  height: 1rem;
  width: 1rem;
  margin-right: 4px;
  align-self: center;
`;

const StyledIdentity = styled(PermIdentity)`
  display: flex;
  height: 1rem;
  width: 1rem;
  margin-right: 4px;
  align-self: center;
`;

function CharityCard({ data }) {
  if (data && data.image && data.image.imageLink) {
    console.log("IMAGE", data.image.imageLink);
  }

  return (
    <CardContainer>
      <ImgCard src={data?.image?.imagelink[4]?.url} />
      <ContactContainer>
        <NameCard>
          <StyledIdentity />
          {" - " + data.title}
        </NameCard>
        <AddresCard>
          <StyledLocationIcon />
          {`- ${data.contactAddress}, ${data.contactPostal} - ${data.contactState}/${data.contactCountry}`}
        </AddresCard>
      </ContactContainer>
    </CardContainer>
  );
}

export default CharityCard;
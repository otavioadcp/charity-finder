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
  return (
    <a href={data.organization.url} target="_blank">
      <CardContainer>
        <ImgCard src={data?.image?.imagelink[4]?.url || data?.imageLink} />
        <ContactContainer>
          <NameCard>
            <StyledIdentity />
            {" - " + data.title}
          </NameCard>
          <AddresCard>
            <StyledLocationIcon />
            {data && data.contactAddress
              ? `- ${data.contactAddress}, ${data.contactPostal} - ${data.contactState}/${data.contactCountry}`
              : " ---- "}
          </AddresCard>
        </ContactContainer>
      </CardContainer>
    </a>
  );
}

export default CharityCard;

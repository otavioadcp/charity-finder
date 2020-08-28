import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  height: 25rem;
  width: 30rem;
  margin: 1rem;
  border-radius: 20px;
  transition: all 0.2s ease;
  background-color: #85cdc8;
  :hover {
    z-index: 98;
    transform: scale(1.1);
  }
`;

const SkeletonContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 2rem;
  padding: 0px 6px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin-top: 1rem;
  border-radius: 10px;
  max-width: 100%;
  justify-content: space-around;
`;

export default function ContentSkeleton() {
  return (
    <Container>
      <CardContainer>
        <SkeletonContainer>
          <Skeleton height={"2rem"} width={"100%"} />
          <Skeleton
            height={"2rem"}
            width={"100%"}
            style={{ marginTop: "10px" }}
          />
        </SkeletonContainer>
      </CardContainer>
      <CardContainer>
        <SkeletonContainer>
          <Skeleton height={"2rem"} width={"100%"} />
          <Skeleton
            height={"2rem"}
            width={"100%"}
            style={{ marginTop: "10px" }}
          />
        </SkeletonContainer>
      </CardContainer>
      <CardContainer>
        <SkeletonContainer>
          <Skeleton height={"2rem"} width={"100%"} />
          <Skeleton
            height={"2rem"}
            width={"100%"}
            style={{ marginTop: "10px" }}
          />
        </SkeletonContainer>
      </CardContainer>
      <CardContainer>
        <SkeletonContainer>
          <Skeleton height={"2rem"} width={"100%"} />
          <Skeleton
            height={"2rem"}
            width={"100%"}
            style={{ marginTop: "10px" }}
          />
        </SkeletonContainer>
      </CardContainer>
      <CardContainer>
        <SkeletonContainer>
          <Skeleton height={"2rem"} width={"100%"} />
          <Skeleton
            height={"2rem"}
            width={"100%"}
            style={{ marginTop: "10px" }}
          />
        </SkeletonContainer>
      </CardContainer>
      <CardContainer>
        <SkeletonContainer>
          <Skeleton height={"2rem"} width={"100%"} />
          <Skeleton
            height={"2rem"}
            width={"100%"}
            style={{ marginTop: "10px" }}
          />
        </SkeletonContainer>
      </CardContainer>
      <CardContainer>
        <SkeletonContainer>
          <Skeleton height={"2rem"} width={"100%"} />
          <Skeleton
            height={"2rem"}
            width={"100%"}
            style={{ marginTop: "10px" }}
          />
        </SkeletonContainer>
      </CardContainer>
    </Container>
  );
}

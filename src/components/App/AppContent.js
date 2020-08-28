import React from "react";
import { AppContent as Container } from "./AppStyles";
import ContentSkeleton from "../Cards/CharityCardSkeleton";
import CharityCard from "../Cards/CharityCard";
import EmptyContent from "./EmptyContent";

function AppContent({ projectsMethods }) {
  return (
    <Container>
      {!projectsMethods.loadingContent ? (
        projectsMethods.projects &&
        projectsMethods.projects.numberFound !== 0 ? (
          projectsMethods.projects.project.map((project) => (
            <CharityCard key={project.id} data={project} />
          ))
        ) : (
          <EmptyContent data={projectsMethods.projects} />
        )
      ) : (
        <ContentSkeleton />
      )}
    </Container>
  );
}

export default AppContent;

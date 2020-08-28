import React from "react";
import { AppContent as Container } from "./AppStyles";
import useProjects from "../../hooks/useProjects";
import ContentSkeleton from "../Cards/CharityCardSkeleton";
import CharityCard from "../Cards/CharityCard";

function AppContent({ data }) {
  const { loadingContent } = useProjects();
  return (
    <Container>
      {!loadingContent ? (
        data ? (
          data.project.map((project) => (
            <CharityCard key={project.id} data={project} />
          ))
        ) : null
      ) : (
        <ContentSkeleton />
      )}
    </Container>
  );
}

export default AppContent;

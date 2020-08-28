import { useCallback, useEffect, useState } from "react";
import api from "../api";

export default function useProjects() {
  const [theme, setTheme] = useState([]);
  const [region, setRegion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);
  const [projects, setProjects] = useState(null);
  const [nextProjectId, setNextProjectId] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function teste() {
      const result = await api.get(
        "/api/public/projectservice/themes?api_key=53ec46b9-fe86-46ee-a102-29f505ef50fb"
      );
      setTheme(result.data.themes.theme);
    }
    teste();
    setLoading(false);
  }, []);

  const getProjects = useCallback(async () => {
    setLoadingContent(true);
    const result = await api.get(
      `/api/public/projectservice/themes/${region}/projects/active?api_key=53ec46b9-fe86-46ee-a102-29f505ef50fb${
        nextProjectId ? `&nextProjectId=${nextProjectId}` : ""
      }`
    );
    setProjects(result.data.projects);
    setLoadingContent(false);
  }, [region, nextProjectId]);

  useEffect(() => {
    if (region) {
      getProjects();
    }
  }, [region, getProjects]);

  function handleChange(value) {
    console.log("DISPAROU");
    setRegion(value);
  }

  function onNextProjects(value) {
    setLoadingContent(true);
    setNextProjectId(value);
  }

  return {
    theme,
    loading,
    loadingContent,
    projects,
    handleChange,
    region,
    onNextProjects,
  };
}

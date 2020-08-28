import { useCallback, useEffect, useState } from "react";
import api from "../api";

export default function useProjects() {
  const [theme, setTheme] = useState([]);
  const [region, setRegion] = useState(null);
  const [error, setError] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);
  const [projects, setProjects] = useState(null);
  const [nextProjectId, setNextProjectId] = useState(null);

  const searchProjectsByCountry = useCallback(
    async (code) => {
      setLoadingContent(true);
      setLoading(true);
      try {
        const result = await api.get(
          `/api/public/projectservice/countries/${countryCode}/projects/summary?api_key=53ec46b9-fe86-46ee-a102-29f505ef50fb${
            nextProjectId ? `&nextProjectId=${nextProjectId}` : ""
          }`
        );
        setProjects(result.data.projects);
      } catch (e) {
        setError(e);
      } finally {
        setLoadingContent(false);
      }
    },
    [countryCode, nextProjectId]
  );

  const searchProjectsByTheme = useCallback(async () => {
    setLoadingContent(true);
    try {
      const result = await api.get(
        `/api/public/projectservice/themes/${region}/projects/active?api_key=53ec46b9-fe86-46ee-a102-29f505ef50fb${
          nextProjectId ? `&nextProjectId=${nextProjectId}` : ""
        }`
      );
      setProjects(result.data.projects);
    } catch (e) {
      setError(e);
    } finally {
      setLoadingContent(false);
    }
  }, [region, nextProjectId]);

  function handleChangeTheme(value) {
    setRegion(value);
  }

  function onNextProjects(value) {
    setLoadingContent(true);
    setNextProjectId(value);
  }

  useEffect(() => {
    setLoading(true);
    async function teste() {
      const result = await api.get(
        "/api/public/projectservice/themes?api_key=53ec46b9-fe86-46ee-a102-29f505ef50fb"
      );
      setTheme(result.data.themes.theme);
    }
    try {
      teste();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (region) {
      searchProjectsByTheme();
    }
  }, [region, searchProjectsByTheme]);

  useEffect(() => {
    if (countryCode) {
      searchProjectsByCountry();
    }
  }, [countryCode, searchProjectsByCountry]);

  function handleCountryCode(value) {
    let code = value && value.toString();
    code = value && value.substring(0, 2);
    code = value && code.toUpperCase();
    setCountryCode(code);
  }

  return {
    theme,
    loading,
    loadingContent,
    projects,
    handleChangeTheme,
    region,
    onNextProjects,
    handleCountryCode,
    error,
  };
}

import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://restcountries.eu/rest/v2";
const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export default function useCountrys() {
  const [countryList, setCountryList] = useState([]);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function teste() {
      const result = await http.get("/all");
      setCountryList(result.data);
    }
    teste();
  }, []);

  function handleChangeCountry(value) {
    setCountry(value);
  }

  return {
    countryList,
    country,
    handleChangeCountry,
  };
}

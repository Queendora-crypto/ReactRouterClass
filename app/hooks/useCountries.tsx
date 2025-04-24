import { CountriesContext } from "~/context/Countries";
import { useContext } from "react";

export default function useCountries() {
  return useContext(CountriesContext);
}

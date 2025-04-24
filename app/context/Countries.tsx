import { createContext, type ReactNode } from "react";
import countries from "~/lib/countries.json";
import _ from "lodash";

export type Country = {
  iso2: string;
  phonecode: string;
  name: string;
  icon: string;
};

export const CountriesContext = createContext<Country[]>([]);

export default function Countries({ children }: { children?: ReactNode }) {
  const formattedCountries = _.map(countries, ({ iso2, name, phonecode }) => ({
    iso2: iso2,
    phonecode: phonecode,
    name: name,
    icon: `https://flagcdn.com/w20/${_.lowerCase(iso2)}.png`,
  }));
  return (
    <CountriesContext value={formattedCountries}>{children}</CountriesContext>
  );
}

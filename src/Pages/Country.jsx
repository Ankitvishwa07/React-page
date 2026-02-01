import { useEffect, useState, useTransition } from "react";
import { getAllCountry } from "../api/country";
import { SearchFilter } from "../components/UI/SearchFilter";
import { Card } from "../components/Layout/Card";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
        const res = await getAllCountry();
        setCountries(res.data);
    })
  }, [])

  if(isPending) return <h1>Loading...</h1>

  const firstFilter = (country) => {
    if(search)
        return country.name.common.toLowerCase().includes(search.toLowerCase());
    return country;
  }

  const secondFilter = (country) => {
    if(filter === "all") return country;
    return country.region === filter;
  }

  const filterCountries = countries.filter((country) => {
    return firstFilter(country) && secondFilter(country);
  });

  return (
    <div className="container">
      <div>
        <SearchFilter 
      search={search}
      setSearch={setSearch}
      countries={countries}
      setCountries={setCountries}
      filter={filter}
      setFilter={setFilter}
      />
      </div>

      <div className="grid-four-col">
        {filterCountries.map((countryData, index) => {
            return <Card country={countryData} key={index}/>
        })}
      </div>
    </div>
  );
};

export default Country;

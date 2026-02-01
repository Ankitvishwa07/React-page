import { useEffect, useTransition, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getIndCountry } from "../../api/country";

export const CountryDetails = () => {
  const param = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  const fetchCountry = async () => {
    const res = await getIndCountry(param.name);

    if (res.status === 200) {
      startTransition(() => {
        setCountry(res.data[0]);
      });
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  if (!country) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <div className="center1">
        {country && (
          <div>
            <img src={country.flags?.svg} alt={country.flags?.alt} />
            <p>
              <span>Country's official name : </span>
              {country.name.official}
            </p>
            <p>
              <span>Native names : </span>
              {Object.keys(country.name.nativeName)
                .map((key) => country.name.nativeName[key].common)
                .join(", ")}
            </p>
            <p>
              <span>Population : </span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span>Region : </span>
              {country.region}
            </p>
            <p>
              <span>Sub-Region : </span>
              {country.subregion}
            </p>
            <p>
              <span>Capital : </span>
              {country.capital.join(", ")}
            </p>
            <p>
              <span>Top level domain : </span>
              {country.tld[0]}
            </p>
            <p>
              <span>Currencies : </span>
              {Object.keys(country.currencies)
                .map((curEle) => country.currencies[curEle].name)
                .join(", ")}
            </p>
            <p>
              <span>Languages : </span>
              {Object.keys(country.languages)
                .map((key) => country.languages[key])
                .join(", ")}
            </p>
          </div>
        )}
        <div className="goback0">
            <NavLink to="/country">
                <button  className="goback">Go Back</button>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

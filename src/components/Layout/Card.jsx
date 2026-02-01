import { NavLink } from "react-router-dom";

export const Card = ({country}) => {
    const { flags, name, population, region, capital} = country;
    return (
        <div>
            <div className="countryCard">
                <img src={flags.svg} alt={flags.alt} />

                <div>
                    <p>
                        {
                            name.common.length > 10 
                            ? name.common.slice(0, 10) + "..."
                            : name.common
                        }
                    </p>
                    <p>
                        <span>Population : </span>
                        {population}
                    </p>
                    <p>
                        <span>Region : </span>
                        {region}
                    </p>
                    <p>
                        <span>Capital : </span>
                        {capital}
                    </p>
                    
                    <NavLink to={`/country/${name.common}`}>
                        <button>Read More</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
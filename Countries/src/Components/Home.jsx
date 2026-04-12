import { useEffect, useState } from "react";
import { AllData } from "./Data";
import "./Home.css";
import { useNavigate } from "react-router";
import HomeShimmer from "./HomeShimmer";

function Home() {
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();

    const handleClick = (code) => {
        navigate(`/country/${code}`)
    }

    useEffect(() => {
        async function fetchCountries() {
            const result = await AllData();
            setCountries(result);
        }
        fetchCountries();
    }, []);

    return (
        <div className="container">
            {!countries.length ? (<HomeShimmer></HomeShimmer>) : (countries.map((country, index) => (
                <div className="card" key={index} onClick={() => handleClick(country.alpha3Code)}>
                    <img src={country.flags?.svg} alt={country.name} className="flag" />
                    <h2>{country.name}</h2>
                    <p><strong>Capital:</strong> {country.capital}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Population:</strong> {country.population}</p>

                </div>
            )))
            }
        </div>
    );
}

export default Home;
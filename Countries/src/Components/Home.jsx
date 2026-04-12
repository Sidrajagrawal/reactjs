import { useEffect, useState } from "react";
import { AllData } from "./Data";
import "./Home.css";
import { useNavigate } from "react-router";
import HomeShimmer from "./HomeShimmer";

function Home() {
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        async function fetchCountries() {
            const result = await AllData();
            setCountries(result);
        }
        fetchCountries();
    }, []);

    const handleClick = (code) => {

        navigate(`/country/${code}`, { state: { countries } });
    };

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search Countries"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="container">
                {!countries.length ? (
                    <HomeShimmer />
                ) : filteredCountries.length === 0 ? (
                    <h2>No country found</h2>
                ) : (
                    filteredCountries.map((country) => (
                        <div
                            className="card"
                            key={country.alpha3Code}
                            onClick={() => handleClick(country.alpha3Code)}
                        >
                            <img src={country.flags?.svg} alt={country.name} className="flag" />
                            <h2>{country.name}</h2>
                            <p><strong>Capital:</strong> {country.capital}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Population:</strong> {country.population}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Home;
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getThisCountry } from "./Data";
import CountryDetailShimmer from "./CountryDetailShimmer";

function CountryDetail() {
    const { code } = useParams();
    const location = useLocation();
    const passedCountries = location.state?.countries;

    const passedCountry = passedCountries?.find((country) => country.alpha3Code === code);    

    const [countryDetail, setCountryDetail] = useState(passedCountry || null);

    useEffect(() => {
        if (!passedCountry && code) {
            async function getDetail() {
                const result = await getThisCountry(code);
                setCountryDetail(result);
            }
            getDetail();
        }
    }, [code, passedCountry]);

    return (
        <div>
            {!countryDetail ? (
                <CountryDetailShimmer />
            ) : (
                <div className="country-detail">
                    <h1>{countryDetail.name}</h1>
                    <p>Capital: {countryDetail.capital}</p>
                    <p>Region: {countryDetail.region}</p>
                    <p>Population: {countryDetail.population}</p>
                    <img src={countryDetail.flags?.png} alt={countryDetail.name} />
                </div>
            )}
        </div>
    );
}

export default CountryDetail;
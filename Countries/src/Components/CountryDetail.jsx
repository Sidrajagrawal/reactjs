import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getThisCountry } from "./Data";
import CountryDetailShimmer from "./CountryDetailShimmer";

function CountryDetail() {
    const { code } = useParams();

    const [countryDetail, setCountryDetail] = useState(null);

    useEffect(() => {
        async function getDetail() {
            const result = await getThisCountry(code);
            setCountryDetail(result);
            console.log(countryDetail);
        }

        if (code) getDetail();
    }, [code]);
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
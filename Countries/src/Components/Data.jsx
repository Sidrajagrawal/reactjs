const API = 'https://restcountries.com/v2/all?fields=name,capital,region,population,flags,alpha3Code'
const THIS_COUNTRY_API = 'https://restcountries.com/v2/alpha/'


export async function AllData() {
    try {
        const res = await fetch(API).then(res => res.json())
        return res;
    } catch (err) {
        return [];
    }
}

export async function getThisCountry(code) {
    try {
        const res = await fetch(`${THIS_COUNTRY_API}${code}`).then(res => res.json());
        return res;
    } catch (err) {
        return [];
    }
}
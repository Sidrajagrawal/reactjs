import { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import AllRecipies from './AllRecipies.jsx'
import getData from "./data.js";
import styles from './Home.module.css'

function Home() {
    const [data, setData] = useState();
    const [query, setQuery] = useState("");

    useEffect(() => {
        getData().then(data => setData(data.recipes));
    }, [])

    return (
        <div className={styles.HomeMain}>
            <SearchBar setQuery={setQuery} />
            <AllRecipies data={data} query={query.toLowerCase()} />
        </div>
    )
}
export default Home;
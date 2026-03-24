import { useEffect, useState } from "react";

function App() {

    const [productData, setProductData] = useState();
    const [callApi, setCallApi] = useState(0);

    // This is use to Render First Time only
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProductData(data));
    }, [callApi]) // Dependency List

    //Use effect also use to Manage sate

    return (
        <div>
            Use Effect See Console
            <div>
                <button onClick={() => setCallApi(callApi + 1)}>click to again call the Api</button>
            </div>
        </div>
    )
}
export default App;
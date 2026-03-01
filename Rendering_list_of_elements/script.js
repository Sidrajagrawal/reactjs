import ReactDOM from "react-dom/client";
import "./style.css";

const url = "https://dummyjson.com/products";

function Card({ title, description, image, price }) {
    return (
        <div className="card">
            <div className="card-content">
                <img src={image} />
                <h4>{title}</h4>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </div>
    );
}

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const container = (
            <div className="container">
                {data.products.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.thumbnail}
                        price={item.price}
                    />
                ))}
            </div>
        );

        const root = ReactDOM.createRoot(document.querySelector("#root"));
        root.render(container);
    });
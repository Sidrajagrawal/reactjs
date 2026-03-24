const API = 'https://dummyjson.com/products'

function getData() {
    const res = fetch(API)
        .then((res) => res.json())
        .then((data) => data.products)
    return res;
}
getData().then((data) => console.log(data))

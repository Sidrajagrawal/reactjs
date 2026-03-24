const API = 'https://dummyjson.com/recipes';
function getData() {
    const res = fetch(API)
        .then(res => res.json())
        .then(data => data);
    return res
}
export default getData;

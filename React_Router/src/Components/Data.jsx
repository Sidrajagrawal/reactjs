const API = 'https://dummyjson.com/recipes';

export async function Data() {
    try {
        const res = await fetch(API).then(res => res.json()).then(data => data);
        return res;
    } catch (err) {
        return [];
    }
}

export async function getData(id) {
    try {
        const res = await fetch(`${API}/${id}`).then(res => res.json()).then(data => data);
        return res;
    } catch (err) {
        return [];
    }

}


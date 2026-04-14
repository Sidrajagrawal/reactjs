import { useState } from "react"

export const UseFilter = (dataList, callback) => {
    const [query, setQuery] = useState('');
    const filteredData = dataList.filter((ele) => callback(ele).toLowerCase().includes(query));
    return [filteredData, setQuery];
}
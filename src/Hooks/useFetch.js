import { useEffect, useState } from "react";

export default function useFetch(URL, query, page){
    const [imageList, setList] = useState([]);
    const url = `${URL}?${query?`query=${query}&`:""}${page?`page=${page}&`:""}per_page=30&client_id=${process.env.REACT_APP_API_KEY}`;
    console.log(url);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
            setList(data);
        }
        fetchData();
    }, [URL, query]);
    return {imageList}
}
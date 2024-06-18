import { useEffect, useState } from "react";

export default function useFetch(apiPath, query, page){
    const [imageList, setList] = useState([]);
    const url = `${apiPath}?${query?`query=${query}&`:""}${page?`page=${page}&`:""}per_page=15&client_id=${process.env.REACT_APP_API_KEY}`;
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url)
            const data = await res.json();
            if(query){
                setList([]);
                setList(data.results);
                setList((prev)=> [...prev, ...data]);
            }else{
                setList((prev)=> [...prev, ...data]);
            }
        }
        fetchData();
    }, [apiPath, query, url, page]);
    return {imageList}
}
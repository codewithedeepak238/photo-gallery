import { createContext, useContext, useState } from "react";
import useFetch from "../Hooks/useFetch";

const initialList = [];

const ApiContext = createContext(initialList);

export const ApiProvider = ({children})=>{
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const {imageList} = useFetch(`https://api.unsplash.com/${query?'search/':""}photos/`, query, page);
    const value = {
        page,
        query,
        setQuery,
        setPage,
        imageList
    }
    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = ()=>useContext(ApiContext);
import { Routes, Route } from "react-router-dom";
import {Homepage, ItemPage, SearchPage} from '../Pages'


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="photo/:id" element={<ItemPage />} />
            <Route path="search/photo" element={<SearchPage />} />
        </Routes>
    </>
  )
}
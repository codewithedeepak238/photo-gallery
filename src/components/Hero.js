import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { ImageCard } from "./ImageCard"
import useFetch from "../Hooks/useFetch"
import { useEffect } from "react"
import { useState } from "react"

export const Hero = () => {
    const [page, setPage] = useState(1);
    console.log(document.documentElement.scrollTop);
    const handleScroll = async () => {
        try {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                if(page<5){
                    setPage((prev)=>prev+1);
                    console.log(page);
                }
            }
        }catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    window.addEventListener("scroll", handleScroll);
}, [])
const { imageList } = useFetch('https://api.unsplash.com/photos/', "", page);

return (
    <div className="mt-[2%]">
        <div className="gallery px-[2%]">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                <Masonry columnsCount={4} gutter="10px">
                    {imageList && imageList.map((item, i) => (
                        <ImageCard image={item.urls.regular} key={i} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    </div>
)
}

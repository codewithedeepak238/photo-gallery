import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { ImageCard } from "./ImageCard"
import { useEffect } from "react"
import { useApi } from "../context/ApiContext"

export const Hero = () => {
    const value = useApi();
    const handleScroll = async () => {
        try {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                if(value.page<=5){
                    value.setPage((prev)=>prev+1);
                    console.log("increased")
                }
            }
        }catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    window.addEventListener("scroll", handleScroll);
})

return (
    <div className="mt-[2%]">
        <div className="gallery px-[2%]">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                <Masonry columnsCount={4} gutter="10px">
                    {value.imageList && value.imageList.map((item, i) => (
                        <ImageCard image={item.urls.regular} key={i} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    </div>
)
}

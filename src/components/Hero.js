import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { ImageCard } from "./ImageCard"
import useFetch from "../Hooks/useFetch"

export const Hero = () => {
    const {imageList} = useFetch('https://api.unsplash.com/photos/', "", 2);
    // console.log(imageList)
    return (
        <div className="mt-[2%]">
            <div className="gallery px-[2%]">
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                    <Masonry columnsCount={4} gutter="10px">
                        {imageList && imageList.map((item) => (
                            <ImageCard image={item.urls.regular} key={item.id} />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    )
}

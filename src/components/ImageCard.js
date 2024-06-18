
export const ImageCard = ({item}) => {
  return (
    <div className="w-[100%] p-[5px]">
        <img className="rounded-[10px] w-[100%] cursor-pointer" src={item.urls.regular} alt={item.alt_description}/>
    </div>
  )
}

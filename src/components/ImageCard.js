
export const ImageCard = ({image}) => {
  return (
    <div className="w-[100%] p-[5px]">
        <img className="rounded-[10px] w-[100%] cursor-pointer" src={image} alt="" />
        <p></p>
    </div>
  )
}

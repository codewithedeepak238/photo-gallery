import { useCart } from "../contexts/CartContext"

export const CartCard = ({item}) => {
  const {addItem, removeItem, deleteItem} = useCart();
  return (
    <div className="cardParent">
        <div className="card">
            <img src={item.img} alt={item.name} />
            <p className="tag">{item.name} <span className="price">${item.price}</span> <button className="button">Remove</button></p>
            <p className="count"><button className="button1" onClick={()=>addItem(item)} >+</button> {item.count} <button className="button1" onClick={()=>item.count===1?deleteItem(item):removeItem(item)}>-</button></p>
        </div>
    </div>
  )
}

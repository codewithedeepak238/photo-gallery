import { useCart } from "../contexts/CartContext"

export const Header = () => {
  const {cartItem} = useCart();
  return (
    <div className='header'>
        <div>UseReducer</div>
        <div>
        <span className="material-symbols-outlined shopping">shopping_cart</span>
        <div className='cartnum'>
            {cartItem.length}
        </div>
        </div>
    </div>
  )
}

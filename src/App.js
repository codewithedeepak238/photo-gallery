import { Header } from "./components/Header";
import "./App.css";
import { CartCard } from "./components/CartCard";
import {useCart} from "./contexts/CartContext"

export default function App() {
  const {cartItem, total} = useCart();
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <h1>YOUR BAG</h1>
        <div>
          {
            cartItem.map((item)=>(
              <CartCard key={item.id} item={item}/>
            ))
          }
        </div>
        <div className="total">
          <p>Total</p>
          <p className="totalprice">${total}</p>
        </div>
        <button>Clear Cart</button>
      </div>
    </div>
  );
}

import "./Products.css"
import { appContext } from "../App";
import { useContext } from 'react';
export default function Products(){
    const {ruser,products,cart,setCart} = useContext(appContext)
    const addToCart = (id) => {
        setCart({ ...cart, [id]:1 });
      };
    return(
        <div className="body">
            <p>welcome {ruser.name}</p>
            <h2>Products List</h2>
            <div className="App-Products-row">
                {products.map((value,index)=>(
                    <div className="App-Products-Box">
                        <h3>{value.name}</h3>
                        <h4>{value.price}</h4>
                        <button onClick={() => addToCart(value.id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <hr/>
        </div>
    )
}
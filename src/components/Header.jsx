import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../App";
export default function Header() {
  const { ruser, setRuser,cart ,products } = useContext(appContext);
  const items = products.filter((value) => cart[value.id] > 0);
  return (
    <div className="App-Header-Row">
      <h1>My React Store</h1>
      <div className="App-Header-Links">
        <Link to="products" className="App-Header-Link">
          Home
        </Link>
        <Link to="cart" className="App-Header-Link">
          Cart({items.length})
        </Link>
        <Link to="orders" className="App-Header-Link">Orders</Link>
        <Link to="register" className="App-Header-Link">Register</Link>
        {ruser.name === undefined || ruser.name === "" ? (
          <Link to="login" className="App-Header-Link">
            Login
          </Link>
        ) : (
          <Link
            to="login"
            className="App-Header-Link"
            onClick={() =>
              setRuser({ ...ruser, name: "", email: "", password: "" })
            }
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}
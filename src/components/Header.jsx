import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="App-Header-Row">
      <h1>My React Store</h1>
      <div>
        <div>
          <Link className="App-Header-Link" to="products">Home</Link>
          <Link className="App-Header-Link" to="login">Login</Link>
          <Link className="App-Header-Link" to="register">Register</Link>
          <Link className="App-Header-Link" to="cart">Cart</Link>
        </div>
      </div>
    </div>
  );
}
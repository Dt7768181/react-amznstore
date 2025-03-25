//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Products />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="Cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
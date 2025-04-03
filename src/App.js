//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import { createContext,useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const appContext= createContext();
function App() {
  const[users,setUsers]=useState([]);
  const[ruser,setRuser]=useState({});
  const [cart,setCart]=useState([]);
  const [orders,setOrders] = useState([])
  const products=[
    {id:1,name:"Product1",price:11},
    {id:2,name:"Product2",price:12},
    {id:3,name:"Product3",price:13},
    {id:4,name:"Product4",price:14},
    {id:5,name:"Product5",price:15},
    {id:6,name:"Product6",price:16},
    {id:7,name:"Product7",price:17},
    {id:8,name:"Product8",price:18},
    {id:9,name:"Product9",price:19},
    {id:10,name:"Product10",price:20}
];
  return (
    <div className="container">
      <BrowserRouter>
      <appContext.Provider value={{users,setUsers,ruser,setRuser,products,cart,setCart,orders,setOrders}}>
        <Header />
        <Routes>
          <Route index element={<Products />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="Cart" element={<Cart />}></Route>
          <Route path="Orders" element={<Orders />}></Route>
        </Routes>
        <Footer />
        </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
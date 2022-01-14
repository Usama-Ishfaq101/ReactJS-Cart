import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {

  const [category, setCategory] = useState("all");
  const [cartData, setCartData] = useState([]);

  let data = [
    {
      name: "Luger Burger",
      price: 200,
      category: "burger",
    },
    {
      name: "Cheese Burger",
      price: 300,
      category: "burger",
    },
    {
      name: "Le Pigeon Burger",
      price: 250,
      category: "burger",
    },
    {
      name: "Chargrilled Burger",
      price: 220,
      category: "burger",
    },
    {
      name: "Deep-Fried Burger",
      price: 350,
      category: "burger",
    },
    {
      name: "Coffee",
      price: 100,
      category: "beverage",
    },
    {
      name: "Smoothie",
      price: 150,
      category: "beverage",
    },
    {
      name: "Lemonade",
      price: 70,
      category: "beverage",
    },
    {
      name: "Cocoa",
      price: 100,
      category: "beverage",
    },
    {
      name: "Iced tea",
      price: 120,
      category: "beverage",
    },
    {
      name: "Chicago Pizza",
      price: 420,
      category: "pizza",
    },
    {
      name: "Neapolitan Pizza",
      price: 420,
      category: "pizza",
    },
    {
      name: "Louis Pizza",
      price: 420,
      category: "pizza",
    },
    {
      name: "Sicilian Pizza",
      price: 420,
      category: "pizza",
    },
    {
      name: "New York-Style Pizza",
      price: 420,
      category: "pizza",
    },
  ];
  return (
    <BrowserRouter>
        <Nav/>

      <Routes>
        <Route path="/" element={<Home data={data} setCategory={setCategory}  category={category} cartData={cartData} setCartData={setCartData} />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart  cartData={cartData} setCartData={setCartData}/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

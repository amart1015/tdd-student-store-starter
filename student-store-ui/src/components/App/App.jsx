import "./App.css"
import * as React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductsGrid from "../ProductsGrid/ProductsGrid"
import ProductCard from "../ProductCard/ProductCard"
import {BrowserRouter,Route, Routes,Link,Router} from "react-router-dom";
import HeroBanner from "../HeroBanner/HeroBanner";
import SearchBar from "../SearchBar/SearchBar";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function App() {
const [store, setStore] = React.useState([])
const [test, setTest] = React.useState("")
const [input, setInput] = React.useState("")
const [searchValue, setSearchValue] = React.useState("")
const [products, setProducts] = React.useState("")
const [filter, setFilter] = React.useState("All Categories")
const [shoppingCart, setShoppingCart] = useState([])
const [cart, setCart] = useState({})


useEffect(() => {
  const fetchStore = async () => {
    try{
      const res = await axios.get('http://localhost:3001/store');
      setStore(res.data.products);
      console.log(store);
      
    } catch(error){
      console.log("This is an error")
    }
  };

  fetchStore();
}, [test], searchValue, setStore, onSearchChange);

function onSearchChange(evt) {
  setSearchValue(evt.target.value);
  // setStore(store.filter((product) => product.name.includes(searchValue)));
}

function onFilterClick(evt) {
  setFilter(evt.target.textContent);
  console.log(filter);
  //evt.target.classList.add("active");
}

const handleAddItemToCart = (productId) => {
  let notFound = true;
  shoppingCart.forEach((e) => {
      if (productId == e.itemId) {
          e.quantity += 1;
          notFound = false;
      }
  });
  if (notFound) {
      shoppingCart.push({ itemId: productId, quantity: 1 });
  }
  setShoppingCart([...shoppingCart]);
};

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <HeroBanner />
          <Routes>
          {/* YOUR CODE HERE! */}
          
          
          <Route path="/" element={
          <Home setInput= {setInput} 
          store={store} 
          setStore={setStore}
          input={input} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          onSearchChange={onSearchChange}
          products={products}
          setProducts={setProducts}
          filter={filter}
          setFilter={setFilter}
          onFilterClick={onFilterClick}
          handleAddItemToCart={handleAddItemToCart}
          cart={cart}/>}/>
          <Route path="/products/:productId" element={
          <ProductDetails store={store}
          setStore={setStore}   
          shoppingCart={shoppingCart}/>}/>
          </Routes>
          

        </main>
      </BrowserRouter>
    </div>
  )
}

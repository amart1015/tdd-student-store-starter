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
const [shoppingCart, setShoppingCart] = React.useState([])
const [cart, setCart] = useState({})


useEffect(() => {
  const fetchStore = async () => {
    try{
      const res = await axios.get('http://localhost:3001/store');
      setStore(res.data.products);
      
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

function handleAddItemToCart(productId) {
  const exist = shoppingCart.find(idx => idx.id === productId);
  
  if(exist) {
    setShoppingCart(shoppingCart.map((idx) => idx.id === productId ? {...exist, quantity: exist.quantity + 1} : idx),
    console.log(shoppingCart)
    );
    
  } else {
    setShoppingCart([...shoppingCart, { id: productId, quantity: 1 }]),
    console.log(shoppingCart)
  }
}

function handleRemoveItemToCart(productId) {
  const exist = shoppingCart.find((idx) => idx.id == productId);
  if(exist.quantity === 1) {
    setShoppingCart(shoppingCart.filter((idx) => idx.id !== productId))
  } else {
    setShoppingCart(shoppingCart.map((idx) => idx.id === productId ? {...exist, quantity: exist.quantity - 1} : idx));
  }
}

async function handleOnSubmitCheckoutForm(value) {
  console.log('testing')
  setReciept(shoppingCart, checkoutForm)
 
  //we want to send the checkoutForm and the shopping cart 
  try{
    await axios.post('http://localhost:3002/store', {user : checkoutForm, shoppingCart : shoppingCart}).then(
      //reset state variables
      setShoppingCart([]),
      setCheckoutForm({email: '', name: ''})
    )
    
  } catch (error) {
    console.log(error)
  }


  
}

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
          shoppingCart={shoppingCart}
          store={store} />
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
          handleRemoveItemToCart={handleRemoveItemToCart}
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

import "./App.css"
import * as React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductsGrid from "../ProductsGrid/ProductsGrid"



import{BrowserRouter, Link} from "react-router-dom";
import HeroBanner from "../HeroBanner/HeroBanner";

export default function App() {
const [store, setStore] = React.useState([])
const [test, setTest] = React.useState("")
const [input, setInput] = React.useState("")

useEffect(() => {
  const fetchStore = async () => {
    try{
      const res = await axios.get("https://codepath-store-api.herokuapp.com/store");
      const store = res?.data?.products;
      setStore(store);
      console.log(store);
    } catch(error){
      console.log("This is an error")
    }
  };

  fetchStore();
}, [test]);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          
          <Navbar />
          <Sidebar />
          <HeroBanner />
          <Home setInput= {setInput} store={store} input={input}/>
          
          


        </main>
      </BrowserRouter>
    </div>
  )
}

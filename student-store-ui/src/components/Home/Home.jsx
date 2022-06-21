import * as React from "react"
import "./Home.css"
import ProductsGrid from "../ProductsGrid/ProductsGrid"
import SearchBar from "../SearchBar/SearchBar"
import { useEffect, useState } from "react";
import HeroBanner from "../HeroBanner/HeroBanner"
import About from "./About"
import Contact from "./Contact"

export default function Home({store}, props) {
  const [currentProducts, setCurrentProducts] = React.useState([])

  let handleOnSearchChange = (event) => {
    console.log(event.target.value)
    // store.setInput(event.target.value)
    // setCurrentProducts(store.filter(product => {
    //   return(store.name.includes(store.input))
    // }))
  }

  return (
    <div className="home">
      <SearchBar handleOnSearchChange={handleOnSearchChange}/>
      <h2>Best Selling Products:</h2>
      <ProductsGrid store={store}/>
      <About/>
      <Contact/>

    </div>
  )
}

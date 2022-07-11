import * as React from "react"
import "./Home.css"
import ProductsGrid from "../ProductsGrid/ProductsGrid"
import Footer from "../Footer/Footer"
import SearchBar from "../SearchBar/SearchBar"
import { useEffect, useState } from "react";
import HeroBanner from "../HeroBanner/HeroBanner"
import About from "./About"
import Contact from "./Contact"

export default function Home({cart, store,setStore, searchValue, setSearchValue,onSearchChange, products, setProducts, filter, setFilter,handleAddItemToCart}) {

  const productList = searchValue === "" ? store : store.filter((product) => product.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)

  return (
    <div className="home">
      <SearchBar onSearchChange={onSearchChange} searchValue={searchValue} store={store} setProducts={setProducts}/>
      <h2>Best Selling Products:</h2>
      <ProductsGrid cart={cart} store={productList} searchValue={searchValue} handleAddItemToCart={handleAddItemToCart}/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  )
}

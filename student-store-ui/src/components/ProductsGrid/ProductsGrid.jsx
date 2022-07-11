import * as React from "react"
import "./ProductsGrid.css"
import ProductCard from "../ProductCard/ProductCard";
export default function ProductsGrid({cart, store,searchValue, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="products-grid" id="products-grid">
      {store.map((store, idx) => (
    <ProductCard store={store} searchValue={searchValue} key={idx} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} productId={store.id}/>
      ))}
    </div>
  )
}

import * as React from "react"
import "./ProductDetails.css"
import axios from "axios"
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom"
export default function ProductDetails({store, setStore}) {
    const [description, setDescription] = useState(true)
    let args = useParams()
    React.useEffect(() => {        
        const getProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/store/${args?.productId}`)
            const data = res.data
            if (data) {
            setStore(data.product)
            }
            else {
            console.log("Cannot fetch products.")
            }
        } catch(err) {
            console.log(err)
        }
        }
        getProduct()},[])
    return (
    
    <div className="products-grid" id="products-grid">
      <ProductCard store={store} productId={store.id} description={description} />
    </div>
  )
}

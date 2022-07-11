import * as React from "react"
import { useEffect, useState } from "react";

export default function ShoppingCart(props) {

    return(
    <table className="header">
    <tr className="product-row">
        <th className="flex-2 cart-product-name">{props.item.name}</th>
        <th className="center cart-product-quantity">{props.quantity}</th>
        <th className="center cart-product-price">${props.item.price}</th>
        <th className="center cart-product-subtotal">${(props.quantity * props.item.price)}</th>
    </tr>
    </table>
    )
}

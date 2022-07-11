import * as React from "react"
import { useEffect, useState } from "react";

export default function Receipt(props) {

    return(
    <ul className="purchase">
        <li>{props.quantity} total {props.item.name} purchased at a cost of ${props.item.price} for a total cost of ${(props.quantity * props.item.price)}.</li>
    </ul>


    )
}

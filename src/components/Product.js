import React from 'react';
import './Product.css';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.amount}</p>
            <p>{props.desc}</p>
        </article>
    );
}
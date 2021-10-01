import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { name, img, stock, price, seller } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />

            </div>
            <div className="product-name">
                <h2>{name}</h2>
                <p><small>by:{seller}</small></p>
                <p><small>${price}</small></p>
                <p>only {stock} left in stock - order soon</p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="Button-part">{element}
                    Add cart
                </button>
            </div >
        </div >
    );
};

export default Product;
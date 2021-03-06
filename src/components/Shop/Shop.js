import React, { useEffect, useState } from 'react';
// import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./new.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // useEffect(() => {
    //     if (products.length) {
    //         const saveCart = getStoredCart();
    //         const storeCart = [];
    //         for (const key in saveCart) {
    //             const addedProduct = products.find(product => product.key === key);
    //             storeCart.push(addedProduct);
    //         }
    //         setCart(storeCart);
    //     }
    // }, [products])
    // Add To Cart Part
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {/* <h3>Products:{products.length}</h3> */}
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
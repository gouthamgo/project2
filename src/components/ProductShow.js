import React, { useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext'



export const ProductShow = () => {

    const { products } = useContext(ProductsContext);


    return (
        <>
             {products.length !== 0 && <h1>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.Image} alt="not found" />

                        </div>
                        <div className='product-name'>
                            {product.Name}
                        </div>
                        <div className='product-price'>
                            rs {product.Price}.00
                    </div>
                        <button className='addcart-btn' >ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}

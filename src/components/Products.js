import React, { useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext'
import '../css/Product.css'
import {Link} from 'react-router-dom'
import { Navbar } from './Navbar';
import { CartContext } from '../global/CartContext'






export const Products = ({user}) => {

  const { products } = useContext(ProductsContext);

  const { dispatch } = useContext(CartContext);






    return (
        <>

        <div>
          <Navbar user={user}/>
        </div>

            {products.length !== 0 && <h1>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                        <Link to= {`ProductShow/:${product.ProductID}`}>
                            <img src={product.Image} alt="not found" />

                            </Link>

                        </div>
                        <div className='product-name'>
                            {product.Name}
                        </div>
                        <div className='product-price'>
                            $ {product.Price}.00
                    </div>
                    <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}

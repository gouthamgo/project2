
import React, { useContext, useState } from 'react'
import { ProductsContext } from '../global/ProductsContext'
import { Navbar } from './Navbar';
import { Link } from "react-router-dom";
import { useLocation } from "react-router"
import {db} from '../config/Config';
import { CartContext } from '../global/CartContext'



export const ProductShow = ({user}) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const { products } = useContext(ProductsContext);
    const productIdUrl = useLocation().pathname.split("/").pop();

    const productId = productIdUrl.substring(1);
    console.log(productId);

        var docRef = db.collection("Products").doc(productId);

          docRef.get().then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              setName(data.Name)
              setPrice(data.Price)
              setImage(data.Image)
              console.log("Document data:", doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
            }).catch((error) => {
              console.log("Error getting document:", error);
        });

    return (
      <div>
          <Navbar user={user}/>
          <h2> Product Details </h2>
          Product Name: { name }
          <br/>
          Price: { price }
          <br/>
           { image }
          <br/>
          <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
      </div>
    )
}

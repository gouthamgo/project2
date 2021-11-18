
import React, { useContext, useState } from 'react'
import { ProductsContext } from '../global/ProductsContext'
import { Navbar } from './Navbar';
import { Link } from "react-router-dom";
import { useLocation } from "react-router"
import {db} from '../config/Config';
import { CartContext } from '../global/CartContext'
import 'react-toastify/dist/ReactToastify.css';
import '../css/ProductShow.css'



export const ProductShow = ({user}) => {


  // console.log(products);
  // get the data in the form of arrays with produtsid, name, price and img

  const { dispatch } = useContext(CartContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [data, setData] = useState('');

    const { products } = useContext(ProductsContext);
    const productIdUrl = useLocation().pathname.split("/").pop();


    const productId = productIdUrl.substring(1);
    // console.log(productId);

        var docRef = db.collection("Products").doc(productId);

          docRef.get().then((doc) => {
            if (doc.exists) {

              const data = doc.data();
              data.ProductID= productId
              setName(data.Name)
              setPrice(data.Price)
              setImage(data.Image)
              setData(data)
              // console.log("Document data:", doc.data());
            } else {
              // doc.data() will be undefined in this case
              // console.log("No such document!");
            }
            }).catch((error) => {
              // console.log("Error getting document:", error);
        });



    return (
      <>
      <Navbar user={user}/>
      <h2> Product Details </h2>
      <br />
      <div class='container-5'>

          <div class='name'>
          <br/>
          Product Name: { name }
          <br />
          <br />
          </div>
          <div>
          <img src={image} />
          </div>

          <div class='info'>
          <br/>
          Price: ${ price }
          <br/>
          <h6> Ratings: ⭐️⭐️⭐️⭐️ </h6>
          </div>
          <button className='addcart-btn1' onClick={() => dispatch({ type: 'ADD_TO_CART', id:productIdUrl, product:data})}> ADD TO CART</button>
      </div>
      </>
    )
}

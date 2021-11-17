
import React,{createContext} from 'react';
import {db} from '../config/Config';
// take from the config file


export const ProductsContext = createContext();
//we are creating context with createContext() and putting the result in a variable ProductsContext

export class ProductsContextProvider extends React.Component {

  // Specifically ProductsContextProvider.
  // The created context is an object with two properties: Provider and Consumer, both of which are components.
  // To pass our value down to every component in our App,
  // we wrap our Provider component around it

    state = {
        products: []
      //inital state empty array for all the products

    }

    componentDidMount() {

        const prevProducts = this.state.products;
        // made a copy of that state

        db.collection('Products').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            // take the products from the db and push into the empty arrays
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProducts.push({
                        ProductID: change.doc.id,
                        Name: change.doc.data().Name,
                        Price: change.doc.data().Price,
                        Image: change.doc.data().Image
                    })
                }
                this.setState({
                    products: prevProducts
                    // update the state of the products
                })
            })
        })

    }

    // we put the value that we want to pass down our entire component tree.
     // We set that equal to the value prop to do so
    render() {

        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

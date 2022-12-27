import {useState,useEffect} from 'react'
import Product from '../components/Product/Product'
import { getStoredCart } from '../utilities/fakedb'



const useCart = (products) =>{
   
    const [Cart,setCart] = useState([])
    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
                // storedCart[IdleDeadline]
            }
        }
        setCart(savedCart);
    },[products])
    return [Cart,setCart];

}
 export default useCart;
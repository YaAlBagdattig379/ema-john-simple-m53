import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products,setProducts] = useProducts(); // from order for useProduct
    const [cart,setCart] = useCart(products); // from order for useCart with 'products'
    // console.log(Cart)
    const handleRemoveProduct = product =>{// to remove Item from review
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
    }
    return (
        <div className ='shop-container'>
            <div className='review-items-container'>
                 {
                    cart.map(product => <ReviewItem
                      key={product.id}
                      product ={product}
                      handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                 }
            </div>
            <div className='cart-container'>{/*cart={cart} v5 theke*/}
                <Cart cart={cart}>


                </Cart>

            </div>

        </div>
    );
};

export default Orders;
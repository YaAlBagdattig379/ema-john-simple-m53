import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products,setProducts] = useProducts(); // from order for useProduct
    const [Cart,setCart] = useCart(products); // from order for useCart with 'products'
    return (
        <div>
            <h1>order for Products, total prods : {products.length}</h1>
            <p>Lorem total Cart : {Cart.length} ipsum dolor sit, amet consectetur adipisicing elit. Earum lique. Veniam corrupti ipsum aspernatur officia, magni quibusdam ut consequatur.</p>
        </div>
    );
};

export default Orders;
import React from 'react';

const ReviewItem = (props) => {
    const {name,price,shipping,quantity} = props.product;


    return (
        <div>
            <h1>this is review item : {name}</h1>
            <h1>price : ${price}</h1>
            <p>shippin : {shipping}</p>
            <p>quantity : {quantity}</p>
        </div>
    );
};

export default ReviewItem;
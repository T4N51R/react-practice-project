import React from 'react';

const Product = (props) => {
    const { name, img, price } = props.products || {};
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h1>{price}</h1>
        </div>
    );
};

export default Product;
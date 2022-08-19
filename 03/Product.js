import React from "react";

const Product = props => {
    const { data, isCategory, addToCart, removeFromCart } = props;
    const { name, price, isAddedToCart } = data;

    return (
        <div style={{
            border: "2px solid black",
            margin: "10px",
            padding: "10px"
        }}>
            <h3>{name}</h3>
            <h4>Cena: {price} zł</h4>
            {
                isCategory ?
                    <button disabled={isAddedToCart}
                        onClick={() => addToCart(data)}>Dodaj do koszyka</button>
                    :
                    <button onClick={() => removeFromCart(data)}>Usuń z koszyka</button>
            }
        </div>



    )
}

export default Product;
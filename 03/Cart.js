import React from 'react';

function Cart(props) {
    const { children } = props;

    return (
        <div style={{
            width: "70%",
            margin: "0 auto"
        }}>
            <h2>Cart</h2>
            <section>
                {children}
            </section>
        </div>

    )
}

export default Cart;
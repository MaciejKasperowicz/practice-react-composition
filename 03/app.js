import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
        category: []
    }

    addToCart = (data) => {
        this.setState(prevState => {
            const updatedCategory = prevState.category.map(item => {
                if (item.id === data.id) {
                    return { ...item, isAddedToCart: true }
                } else {
                    return item
                }

            })
            return {
                cart: [...prevState.cart, data],
                category: updatedCategory
            }
        });
    }

    removeFromCart = (data) => {
        this.setState(prevState => {
            const updatedCart = prevState.cart.filter(item => {
                if (item.id !== data.id) return item;
            })

            const updatedCategory = prevState.category.map(item => {
                if (item.id === data.id) {
                    return { ...item, isAddedToCart: false }
                } else {
                    return item
                }
            })

            return {
                cart: updatedCart,
                category: updatedCategory
            }
        })
    }

    componentDidMount() {
        this.setState((prevState) => {
            return {
                ...prevState,
                category: data
            }
        })
    }



    render() {
        const list = this.state.category.map(item => {
            return <Product data={item} key={item.id} isCategory={true} addToCart={this.addToCart} />
        });

        const cartList = this.state.cart.map(cartItem => (
            <Product data={cartItem} key={cartItem.id} removeFromCart={this.removeFromCart} />
        ))

        return (
            <section>
                <Category>
                    {list}
                </Category>
                <Cart>
                    {cartList}
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
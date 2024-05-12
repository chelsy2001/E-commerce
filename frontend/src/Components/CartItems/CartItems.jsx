import React, { useContext } from 'react';
import './Cart.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart,getTotalCartAmount} = useContext(ShopContext);

    // Add a conditional check to prevent accessing undefined properties
    if (!all_product || !cartItems) {
        return <div>Loading...</div>; // You can customize this loading state as needed
    }

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Total</p>
                <p>Total Price</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt='' className='carticon-product' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quatity'>{cartItems[e.id]}</button>
                                <p>{e.new_price*cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt='' />
                            </div>
                        </div>
                    );
                }
                return null; // Add a return null statement to satisfy React's requirements
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>shipping</p>
                            <p>Free</p>
                        </div>
                        <hr/> 
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you havr a promo code,Enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='promo-code'></input>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;


import style from '../styles/cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/cart/CartItem';
import { useState, useEffect } from 'react'
import Products from '../components/products/Products';

export default function Cart() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let totalPrice = 0;
        cartItems.map(item => totalPrice += item.price * item.count)
        setTotal(totalPrice)
    }, [cartItems])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={style.cart}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Shopping cart</h1>
                <div className={style.subtotal}>
                    <span>Subtotal</span>
                    <span>€{total.toFixed(2)}</span>
                </div>
                <div className={style.cart__items}>
                    {
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))
                    }
                </div>
                <Products category='electronics' notLoad={true} />
            </div>
        </div>
    )
}

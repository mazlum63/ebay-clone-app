import style from '../../styles/header.module.css'
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import ShoppingCartItem from './ShoppingCartItem';
import { useState, useEffect } from 'react';
import { emptyCart } from '../../slices/cartSlice';


export default function ShoppingCart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setCart(cartItems)
        let totalPrice = 0;
        cartItems.map(item => {
            totalPrice += item.price * item.count;
        })

        setTotal(totalPrice)
    }, [cartItems])

    return (
        <div className={style.shopping__cart}>
            <h1>Shopping cart</h1>
            <div className={style.cart__items}>
                {cart.map(item => (
                    <ShoppingCartItem key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} count={item.count} />
                ))}
            </div>
            <div className={style.cart__total}>
                <span style={{ fontSize: 14, fontWeight: 'bold' }}>Total</span>
                <span style={{ fontSize: 16, fontWeight: 'bold' }}>€{total.toFixed(2)}</span>
            </div>
            <span onClick={() => dispatch(emptyCart())} className={style.cart__empty}>Delete All</span>
            <Link href='/cart'><span className={style.cart__viewcart}>View cart</span></Link>
        </div>
    )
}
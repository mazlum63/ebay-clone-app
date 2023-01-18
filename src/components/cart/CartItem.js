import style from '../../styles/cart.module.css'
import Image from 'next/image'
import { Star } from '../../icons/Icons'
import { deleteItem } from '../../slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function CartItem({ item }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.cartItems)
    useEffect(() => {
    }, [cartItems])

    return (
        <div className={style.cart__container}>
            <div className={style.cart__item}>
                <div className={style.item__image}>
                    <Image
                        src={item.image}
                        fill
                        objectFit='contain'
                        alt={item.title}
                    />
                </div>
                <div className={style.item__detail}>
                    <div className={style.item__title}>{item.title}</div>
                    <div className={style.item__rating}>
                        <div className={style.rating__rate}>
                            {Array(Math.ceil(item.rating.rate)).fill().map((_, i) => (
                                <Star key={i + 's'} className='text-yellow-400' />
                            ))}
                        </div>
                        <div style={{ marginLeft: 5 }}>{item.rating.count}</div>
                    </div>
                    <div className={style.item__count}>QTY: {item.count}</div>
                </div>
                <div className={style.item__price}>€{item.price}</div>
            </div>
            <div className={style.item__remove}>
                <button onClick={() => dispatch(deleteItem(item.id))} type='button'>Remove</button>
            </div>
        </div>
    )
}

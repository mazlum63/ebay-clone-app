import style from '../../styles/header.module.css'
import Image from 'next/image';
import { Trash } from '../../icons/Icons';
import { deleteItem } from '../../slices/cartSlice';
import { useDispatch } from 'react-redux';

export default function ShoppingCartItem({ id, title, price, image, count }) {
    const dispatch = useDispatch()
    function cutWord(word) {
        return word.substr(0, 20) + '...';
    }
    return (
        <div className={style.cart__item}>
            <div className={style.cart__container}>
                <div className={style.item__image}>
                    <Image
                        src={image}
                        width={30}
                        height={30}
                        alt={title}
                    />
                </div>
                <div className={style.item__detail}>
                    <h2>{cutWord(title)}</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className={style.item__price}>
                            €{price}
                        </p>
                        <p className={style.item__quantity}>Qty: {count}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => dispatch(deleteItem(id))} className={style.item__delete}><Trash /></button>
        </div>
    )
}

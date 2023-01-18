import { useState, useEffect } from "react"
import style from "../../styles/header.module.css"
import Dropdown from "./Dropdown";
import { Bell, ShopCar } from "../../icons/Icons";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";


export default function HeaderTopRight() {
    const cartItems = useSelector(state => state.cart.cartItems)
    const [watchlist, setWatchList] = useState(null);
    const [myEbay, setMyEbay] = useState(null)
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setWatchList({
            dropdownName: 'Wathclist',
            dropdownItems: [
                'item1',
                'item2',
                'item3'
            ]
        })
        setMyEbay({
            dropdownName: 'My eBay',
            dropdownItems: [
                'Summary',
                'Recently Viewed',
                'Birds/Offers',
                'Watchlist',
                'Puschase History',
                'But Again',
                'Selling',
                'Saved Searches',
                'Saved Sellers',
                'My Garage',
                'Messages',
                'Collection beta',
                'TheeBay vault'
            ]
        })
    }, [])

    return (
        <div>
            <ul className={style.header__top__lists}>
                <li className={style.header__list}><a className={style.header__link} href="#">Sell</a></li>
                <li className={style.btn__hide} style={{ padding: 0 }}>
                    {watchlist !== null ? <Dropdown dropDown={watchlist} /> : ''}
                </li>
                <li style={{ padding: 0 }}>
                    {myEbay !== null ? <Dropdown dropDown={myEbay} /> : ''}
                </li>
                <li>
                    <Bell className={style.header__icon} />
                </li>
                <li style={{ margin: 0, position: 'relative' }}>
                    <button onClick={() => { setIsActive(!isActive) }}>
                        <ShopCar className={style.header__icon} />
                        {cartItems.length > 0 && <div className={style.cart__count}>{cartItems.length}</div>}
                    </button>
                    {
                        isActive ? <ShoppingCart /> : ''
                    }
                </li>
            </ul>
        </div >
    )
}

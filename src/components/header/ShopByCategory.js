import { useState } from "react"
import { ArrowDown, ArrowRight } from "../../icons/Icons"
import style from '../../styles/header.module.css'
import ShopCategories from "./ShopCategories"
import Link from "next/link"

export default function ShopByCategory() {
    const shopByCategory = [
        {
            id: 1,
            categoryHeader: 'Motors',
            category: [
                'Parts & accessories',
                'Cars & trucks',
                'Motorcycles',
                'Other vehicles'
            ]
        },
        {
            id: 2,
            categoryHeader: 'Electronics',
            category: [
                'Computers, Tablets & Network Hardware',
                'Cell Phones, Smart Watches & Accessories',
                'Video Games & Consoles',
                'Cameras & Photo'
            ]
        },

        {
            id: 3,
            categoryHeader: 'Collectibles & Art',
            category: [
                'Trading Cards',
                'Collectibles',
                'Coins & Paper Money',
                'Sports Memorabilia'
            ]
        },

        {
            id: 4,
            categoryHeader: 'Clothing & Accessories',
            category: [
                'Women',
                'Men',
                'Handbags',
                'Collectible Sneakers'
            ]
        },

        {
            id: 5,
            categoryHeader: 'Business & Industrial',
            category: [
                'Modular & Pre-Fabricated Buildings',
                'Test, Measurement & Inspection Equipment',
                'Heavy Equipment, Parts & Attachments',
                'Restaurant & Food Service'
            ]
        },
        {
            id: 6,
            categoryHeader: 'Home & garden',
            category: [
                'Yard, Garden & Outdoor Living Items',
                'Tools & Workshop Equipment',
                'Home Improvement',
                'Kitchen, Dining & Bar Supplies'
            ]
        },
        {
            id: 7,
            categoryHeader: 'Sporting goods',
            category: [
                'Hunting Equipment',
                'Golf Equipment',
                'Outdoor sports',
                'Cycling Equipment'
            ]
        },
        {
            id: 8,
            categoryHeader: 'Jewelry & Watches',
            category: [
                'Luxury Watches',
                'Wristwatches',
                'Fashion Jewelry',
                'Fine Jewelry'
            ]
        },
        {
            id: 9,
            categoryHeader: 'Other categories',
            category: [
                'Books, Movies & Music',
                'Toys & Hobbies',
                'Health & Beauty',
                'Baby Essentials'
            ]
        }
    ]
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={style.shop__category}>
            <button
                onClick={() => { setIsActive(!isActive) }}
                className={style.shop__category__btn}>
                Shop by<br />category <span><ArrowDown /></span>
            </button>
            {
                isActive ? (
                    <div className={style.shop__category__categories}>
                        {
                            shopByCategory.map(item => (
                                <ShopCategories key={item.id} items={item} />
                            ))
                        }

                        <div className={style.shop__category__line}></div>
                        <div className={style.shop__category__bottom}><Link href='#'>All Brands <span><ArrowRight /></span></Link></div>
                        <div className={style.shop__category__bottom}><Link href='#'>All Categories <span><ArrowRight /></span></Link></div>
                        <div className={style.shop__category__bottom}><Link href='#'>Seasonal Sales & Events <span><ArrowRight /></span></Link></div>
                    </div>
                ) : ''
            }
        </div>
    )
}
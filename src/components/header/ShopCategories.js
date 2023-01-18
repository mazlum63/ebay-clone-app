import Link from "next/link"
import style from '../../styles/header.module.css'

export default function ShopCategories({ items }) {
    return (
        <ul style={{ width: 250 }}>
            <li className={style.shop__category__header}><Link href='#'>{items.categoryHeader}</Link></li>
            {items.category.map((item, index) => (
                <li
                    className={style.shop__category__list}
                    key={index}>
                    <Link href='#'>
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

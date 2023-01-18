import style from '../../styles/products.module.css'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Product from './Product'

export default function Products({ category, notLoad }) {
    const getProducts = useSelector(store => store.products.products)
    const [products, setProducts] = useState(null)
    useEffect(() => {
        setProducts(getProducts)
    }, [getProducts])

    return (
        <div className={style.products}>
            <div className={style.product}>
                <h1 className={style.product__header}>
                    {
                        notLoad ? 'Similar sponsored items' : category
                    }
                </h1>
                <div className={style.product__items}>
                    {
                        (products != null) && (products.map(item => (
                            (item.category == category && item.id != notLoad) && (
                                <Product
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                />
                            )
                        )))
                    }
                </div>
            </div>
        </div>
    )
}

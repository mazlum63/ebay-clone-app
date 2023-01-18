import { getAllProducts } from "../../lib/products"
import { useRouter } from "next/router";
import Products from "../../components/products/Products";
import { useState, useEffect } from "react";
import style from '../../styles/dynamic.module.css'
import Image from "next/image";
import { Star } from "../../icons/Icons";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addToCart } from "../../slices/cartSlice";

export default function Items({ productsItems }) {
    const dispatch = useDispatch();
    const countRef = useRef('')
    const router = useRouter();
    const { id } = router.query;
    const [currentItem, setCurrentItem] = useState(null);
    const [inputValue, setInputValue] = useState(1);
    function cutWord(word, n) {
        return word.substr(0, n) + '...'
    }
    useEffect(() => {
        productsItems.map(item => {
            item.id == id && setCurrentItem(item);
        })
    }, [id])

    return (
        <>
            {currentItem !== null && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30, width: '100%' }}>
                    <div className={style.item__container}>
                        <div className={style.image__container}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <Image
                                    src={currentItem.image}
                                    objectFit={"contain"}
                                    fill
                                    alt={currentItem.title}
                                ></Image>
                            </div>
                        </div>
                        <div className={style.details__container}>
                            <h1 className={style.item__title}>{cutWord(currentItem.title, 100)}</h1>
                            <p className={style.item__description}>{cutWord(currentItem.description, 200)}</p>
                            <div className={style.item__rating}>
                                <div className={style.rating__rate}>
                                    {Array(Math.ceil(currentItem.rating.rate)).fill().map((_, i) => (
                                        <Star key={i + 's'} className='text-yellow-400' />
                                    ))}
                                </div>
                                <div className={style.rating__count}>{currentItem.rating.count}</div>
                            </div>
                            <div className={style.item__price}>€{currentItem.price}</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: 5 }}>Quantity:</span>
                                <input className={style.item__count}
                                    ref={countRef}
                                    type="number"
                                    name="itemCount"
                                    id="itemCount" placeholder="1"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    min={1} />
                            </div>
                            <button onClick={() => dispatch(addToCart({
                                id: currentItem.id,
                                title: currentItem.title,
                                price: currentItem.price,
                                description: currentItem.description,
                                category: currentItem.category,
                                image: currentItem.image,
                                rating: currentItem.rating,
                                count: countRef.current.value
                            }))}
                                className={style.item__add}>Add To Cart</button>
                        </div>
                    </div>
                    <Products category={currentItem.category} notLoad={id} />
                </div>
            )
            }
        </>
    )
}

export async function getStaticProps() {
    const productsItems = await getAllProducts();
    return {
        props: {
            productsItems,
        }
    }
}


export async function getStaticPaths() {
    const products = await getAllProducts();
    const paths = products.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });

    return { paths: paths, fallback: false }
}
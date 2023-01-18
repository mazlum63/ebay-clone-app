import style from '../../styles/products.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Product({ id, title, price, image }) {
    return (
        <div className={style.product__container}>
            <Link href={`/posts/${id}`}>
                <Image
                    src={image}
                    width={100}
                    height={100}
                    alt={title}
                    sizes='100%, 100%'
                />
                <p className={style.product__price}>€{price}</p>
            </Link>
        </div >
    )
}

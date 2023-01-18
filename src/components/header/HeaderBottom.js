import Image from "next/image"
import style from '../../styles/header.module.css'
import Link from "next/link"
import ShopByCategory from "./ShopByCategory"
import Form from "./Form"

export default function HeaderBottom() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={style.header__bottom}>
                <div style={{ marginRight: 20 }}>
                    <Link href="/">
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/300px-EBay_logo.svg.png"}
                            width={117}
                            height={48}
                            alt='ebay logo'
                            priority
                        />
                    </Link>
                </div>
                <ShopByCategory />
                <Form />
            </div>
        </div>
    )
}
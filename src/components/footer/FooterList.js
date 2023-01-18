import style from '../../styles/footer.module.css'
import Link from 'next/link'

export default function FooterList(item) {

    return (
        <ul style={{ marginBottom: 20 }}>
            <li className={style.footer__header}>
                <Link href='#'>{item.links.header}</Link>
            </li>
            {
                item.links.links.map((link, index) => (
                    <li className={style.footer__link} key={index}>
                        <Link href='#'>{link}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

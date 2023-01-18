import style from '../../styles/header.module.css'
import HeaderTopLeft from './HeaderTopLeft'
import HeaderTopRight from './HeaderTopRight'

export default function HeaderTop() {
    return (
        <div className={style.header__top}>
            <div className={style.header__top__items}>
                <HeaderTopLeft />
                <HeaderTopRight />
            </div>
        </div>
    )
}
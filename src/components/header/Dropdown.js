import { useState } from 'react';
import style from '../../styles/header.module.css'
import { ArrowDown } from '../../icons/Icons';


export default function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);
    const dropDown = props.dropDown;

    return (
        <div className={style.header__dropdown}>
            <button
                onClick={() => { setIsActive(!isActive) }}
                className={style.header__dropdown__btn + " " + (isActive ? style.btn__bordered : '')}>
                <span>{dropDown.dropdownName}</span>
                <span>{<ArrowDown />}</span></button>
            {isActive ? (
                <ul
                    className={style.header__dropdown__items}>
                    {dropDown.dropdownItems.map((item, index) => (
                        <li key={index} className={style.header__list}><a className={style.header__link} href="#">{item}</a></li>
                    ))}
                </ul>
            ) : ''}
        </div>
    )
}

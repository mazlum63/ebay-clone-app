import React from 'react'
import Image from 'next/image'
import style from '../../styles/header.module.css'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

export default function Header() {
    return (
        <header className={style.header}>
            <HeaderTop />
            <HeaderBottom />
        </header>
    )
}

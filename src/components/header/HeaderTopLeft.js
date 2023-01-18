import style from "../../styles/header.module.css"
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { Close } from "../../icons/Icons";
import { logout } from "../../slices/signinSlice";

export default function HeaderTopLeft() {
    const user = useSelector(store => store.signin.user);
    const dispatch = useDispatch()
    return (
        <div>
            <ul className={style.header__top__lists}>
                <li>
                    <span style={{ marginRight: 3 }}>Hi!</span>
                    {
                        user ? <span style={{ position: 'relative' }}>
                            {user.name.firstName}
                            <div
                                onClick={() => dispatch(logout())}
                                className={style.user__logout}>
                                <Close />
                            </div>
                        </span> : (
                            <>
                                <Link href={'/signin'} className={style.header__sign_reg}>Sign in</Link>
                                <span style={{ margin: '0 3px' }}>or</span>
                                <Link href={'/register'} className={style.header__sign_reg}>Register</Link>
                            </>
                        )
                    }
                </li>
                <li className={style.header__list + " " + style.daily__hide}><a className={style.header__link} href="#">Daily Deals</a></li>
                <li className={style.header__list + " " + style.brand__hide}><a className={style.header__link} href="#">Brand Outlet</a></li>
                <li className={style.header__list + " " + style.help__hide}><a className={style.header__link} href="#">Help & Contact</a></li>
            </ul>
        </div>
    )
}

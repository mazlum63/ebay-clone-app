import style from '../styles/register.module.css'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../slices/signinSlice';
import Link from 'next/link';

export default function Signin() {
    const registeredUsers = useSelector(store => store.register.users);
    const dispatch = useDispatch()
    const email = useRef('');
    const pass = useRef('');
    useEffect(() => {
    }, [])

    return (
        (registeredUsers === null) ? (
            <div className={style.register}>
                <div className={style.register__container}>
                    <form style={{ width: '100%' }}>
                        <input ref={email} className={style.form__input} type="email" placeholder='Email' />
                        <input ref={pass} className={style.form__input} type="password" placeholder='Password' />
                        <button
                            onClick={() => dispatch(
                                login({
                                    users: registeredUsers,
                                    user: {
                                        email: email.current.value,
                                        pass: pass.current.value
                                    }
                                })
                            )}
                            className={style.form__btn}
                            type='button'
                        >Sign in</button>
                    </form>
                </div>
            </div>
        ) : (
            <div className={style.register__link}>
                <p style={{ marginRight: 10 }}>You don't have an account?</p>
                <Link href="/register"><span style={{ color: "blue" }}>Register here!</span></Link>
            </div>
        )
    )
}

import style from '../styles/register.module.css'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../slices/registerSlice';

export default function Register() {
    const registeredUsers = useSelector(store => store.register.register);
    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');
    const pass = useRef('');
    const dispatch = useDispatch()
    useEffect(() => {

    }, [registeredUsers])

    return (
        <div className={style.register}>
            <div className={style.register__container}>
                <form style={{ width: '100%' }}>
                    <div className={style.register__name}>
                        <input ref={firstName} className={style.form__input} type="text" name='firstName' id='firstName' placeholder='First Name' required />
                        <input ref={lastName} className={style.form__input} type="text" name='lastName' id='lastName' placeholder='Last Name' required />
                    </div>
                    <input ref={email} className={style.form__input} type="email" name='email' id='email' placeholder='Email' required />
                    <input ref={pass} className={style.form__input} type="password" name='password' id='password' placeholder='Password' required />
                    <button onClick={() => dispatch(register({
                        name: {
                            firstName: firstName.current.value,
                            lastName: lastName.current.value
                        },
                        email: email.current.value,
                        pass: pass.current.value
                    }))}
                        className={style.form__btn}
                        type='button'>Create Account</button>
                </form>
            </div>
        </div>
    )
}

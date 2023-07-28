import React from 'react'
import background from '../assets/background.png'
import '../Scss/Sign_up.scss'
import { NavLink } from 'react-router-dom'

const Sign_up = () => {
    return (
        <>
            <div className='sign_up'>
                <div className="sign_up_card ">
                    <h1>Войти в аккаунт</h1>
                    <div className="input_sign_up">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder='Имя пользователя' />
                    </div>
                    <div className="input_sign_up">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder='Электронная почта' />
                    </div>
                    <div className="input_sign_up">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder='Парол' />
                    </div>
                    <button>Войти</button>
                    <p className='accaount'>
                        Если у вас всё ещё нету аккаунты вы можете <NavLink to='/'>создать</NavLink>
                    </p>
                </div>
            </div>
            <img className="position" src={background} alt="" />
        </>
    )
}

export default Sign_up
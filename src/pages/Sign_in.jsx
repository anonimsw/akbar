import React from 'react'
import '../Scss/Sign_in.scss'
import background from '../assets/background.png'
import { NavLink } from 'react-router-dom'

const Sign_in = () => {
    return (
        <>
            <div className='sign_in'>
                <div className="sign_in_card ">
                    <h1>Создать аккаунт</h1>
                    <div className="input_sign_in">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder='Имя пользователя' />
                    </div>
                    <div className="input_sign_in">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder='Электронная почта' />
                    </div>
                    <div className="input_sign_in">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder='Парол' />
                    </div>
                    <button>Создать</button>
                    <p className='accaount'>
                        Если у вас есть аккаунт вы можете <NavLink to='/sign_up'>войти</NavLink>
                    </p>
                </div>
            </div>
            <img className="position" src={background} alt="" />
        </>
    )
}

export default Sign_in
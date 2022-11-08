import React from 'react'
import s from './Error404.module.css'
import errorImg from './404.png'

function Error404() {
    return (
        <div>
            <div className={s.container}>
                <div className={s.imgContainer}>
                    <img src={errorImg} alt="404 image"/>
                </div>
            </div>
        </div>
    )
}

export default Error404

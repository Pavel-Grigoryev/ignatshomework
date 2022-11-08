import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import arrow from "./arrow.svg"


function Header() {

    const [active, setActive] = useState<boolean>(false);

    const moveMenu = () => {
         setActive(!active)
    }

    const finalMenuClass = active ? s.menu + ' ' + s.active : s.menu;
    const finalButtonImg = active ? s.buttonImg + ' ' + s.active : s.buttonImg;

    return (
        <header className={s.header}>
            <nav className={finalMenuClass}>
                <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ?
                    s.activeItem + ' ' + s.menuItem :
                    s.menuItem}>Prejunior</NavLink>
                <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ?
                    s.activeItem + ' ' + s.menuItem :
                    s.menuItem}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ?
                    s.activeItem + ' ' + s.menuItem :
                    s.menuItem}>Juniorplus</NavLink>
                <SuperButton onClick={moveMenu}>
                        <img src={arrow} alt="" className={finalButtonImg}/>
                </SuperButton>
            </nav>
        </header>
    )
}

export default Header

import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }
    // need to fix

    const affairClass = `${s.item__priority} ${s[props.affair.priority]}`

    return (
        <div className={s.item}>
            <div className={s.item__name}>{props.affair.name}</div>
            <div className={affairClass}>{props.affair.priority}</div>
            <SuperButton onClick={deleteCallback}>
                X
            </SuperButton>
        </div>
    )
}

export default Affair

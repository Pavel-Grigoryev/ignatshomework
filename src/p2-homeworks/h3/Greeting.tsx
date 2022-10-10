import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void  // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onButtonPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onButtonPress} // деструктуризация пропсов
) => {
    const inputClass = error ? `${s.input} ${s.error}` : s.input// need to fix with (?:)

    return (
        <div className={s.inputBlock}>
            <div className={s.inputWrapper}>
                <SuperInputText value={name}
                                onChange={setNameCallback}
                                onKeyPress={onButtonPress}
                                error={error}
                                className={inputClass}
                                onBlur={setNameCallback}
                                spanClassName={s.inputBlock__err}
                />
            </div>
            <div className={s.inputBlock__buttonWrapper} >
                <SuperButton onClick={addUser}>
                    Add
                </SuperButton>
            </div>
            <span className={s.inputBlock__totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting

import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

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
    const inputClass = error? `${s.input} ${s.error}` : s.input// need to fix with (?:)

    return (
        <div className={s.inputBlock}>
            <input value={name} onChange={setNameCallback} onKeyDown={onButtonPress} className={inputClass}/>
            <button onClick={addUser} className={s.inputBlock__button}>add</button>
            <span>{totalUsers}</span>
            <div className={s.inputBlock__err}>{error}</div>
        </div>
    )
}

export default Greeting

import { useState } from 'react'
import classNames from 'classnames'

export default function Switch(){
    const[isSelected, setIsSelected] = useState(false);
    return (
        <div onClick={()=> setIsSelected(!isSelected)} className= {classNames("flex h-10 w-[74px] bg-sky-500  rounded-full transition-all duration-500")}>
            <span  className= {classNames("flex mt-[2px] m-1 h-9 w-9 bg-white rounded-full transition-all duration-500 shadow-lg", {"ml-[34px]": isSelected})}/>
        </div>
    )
}

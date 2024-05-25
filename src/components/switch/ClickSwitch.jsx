import React, { useState } from 'react'
import classNames from 'classnames'
import images from '../../assets'
import { useContext } from "react";
import { ThemContext } from '../../App';
export default function Switch(){
    const {isDarkMode, setIsDarkMode} = useContext(ThemContext);
    return (
        
            <div className="flex flex-row px-1.5 border h-12 w-[300px] dark:bg-[#6c757d] bg-white rounded-[8px] transition-all duration-500 space-x-2">
               
                <button onClick={() => setIsDarkMode(false)} 
                    className={classNames("mt-1.5 space-x-1 h-[34px] w-[150px] flex items-center content-center text-center justify-center text-base text-sky-600 font-semibold transition-all duration-500", {"bg-slate-300": !isDarkMode})}>
                    <img src={images.sun} alt="Sun" className="flex h-5 w-5 mx-1"/>
                    Light Mode
                </button>
                
                <button onClick={() => setIsDarkMode(true)} 
                    className={classNames("mt-1.5 h-[34px] w-[150px] flex m items-center  text-center justify-center text-base text-slate-600 font-semibold transition-all duration-500", {"bg-slate-300": isDarkMode})}>
                    <img src={images.moon} alt="Moon" className="flex h-5 w-5 mx-1"/>
                    Dark Mode
                </button>
                
            </div>
        
    )
}

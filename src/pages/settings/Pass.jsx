import React from "react";
import ChangePass from '../../components/Modal/ChangePass';
import { useState } from 'react';

export default function Pass(){
    const[showModal, setShowModal] = useState(false);
    
    return(
    <div className = "mt-6 h-32 flex w-[384px] py-[24px] px-[24px] bg-white justify-center  rounded-[20px] gap-[20px]">
                        <div className = "text-center mt-5">
                            <h1 className = "text-black text-2xl font-bold text-center mt-0.5">Password</h1> 
                        </div>
                        <button onClick ={()=> setShowModal(true)} className = "text-white space-y-0 mt-5 ml-4 btn h-9 bg-sky-500 hover:bg-sky-400/100">Change Password</button>
                        <ChangePass onClose={()=> setShowModal(false)} isVisible = {showModal}></ChangePass>
                    </div>
                    )
}
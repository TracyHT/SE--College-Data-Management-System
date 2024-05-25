import ChangePass from '../../components/Modal/ChangePass';
import { useState } from 'react';

export default function Pass(){
    const[showModal, setShowModal] = useState(false);
    
    return(
    <div className = "mt-6 h-32 flex w-[384px] py-[24px] px-[24px] bg-white justify-center  rounded-[20px] gap-[20px]">
                        <div className = "text-center mt-5">
                            <h1 className = "text-black text-2xl font-bold text-center mt-0.5">Password</h1> 
                        </div>
                        <div className = "">
                        <button onClick ={()=> setShowModal(true)} className = "text-white text-sm font-bold font-['Montserrat'] leading-tight space-y-0 mt-5 ml-4 btn h-9w-[183px] h-10 px-4 py-2.5 bg-blue-500 rounded-md justify-center items-center gap-2 inline-flex hover:bg-sky-400/100">Change Password</button>
                        </div>
                        <ChangePass onClose={()=> setShowModal(false)} isVisible = {showModal}></ChangePass>
                    </div>
                    )
}
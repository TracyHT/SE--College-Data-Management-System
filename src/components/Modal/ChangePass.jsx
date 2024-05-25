import React from 'react'
import InputPassword from '../form/input-password'

const ChangePass = ({isVisible, onClose})=>{
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center ">
            <div className="w-[600px] flex flex-col bg-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Change Password</h2>
                <InputPassword id="password" placeholder="Current Password" className="flex space-y-" label = "Current Password"/>
                <br></br>
                <InputPassword id="password" placeholder="New Password" className="flex" label = "New Password"/>
                <br></br>
                <InputPassword id="password" placeholder="Confirm New Password" className = "flex" label= "Confirm New Password"/>
                <br></br>
                <div className="flex   space-x-4">
                    <button onClick = {()=> onClose()} className="flex w-[300px] justify-center border border-slate-500 px-4 py-2 rounded bg-white text-black">Cancel</button>
                    <button onClick = {()=> onClose()} className="flex w-[300px] justify-center px-4 py-2 rounded bg-blue-500 text-white">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePass;


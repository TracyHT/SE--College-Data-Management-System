import React from "react";
import Switch from "../../components/switch/Switch";
import ClickSwitch from "../../components/switch/ClickSwitch";
import Dropdown from "../../components/switch/Dropdown";

export default function SystemSet(){
    return (
    <div className = "flex mt-6 flex-col h-80 space-y-5 w-[800px] py-[24px] px-[24px] bg-white  rounded-[20px] gap-[20px]">
                            <h1 className = "text-2xl font-bold text-sky-800">System Settings</h1>
                            <div className = "flex flex-col justify-self-center space-y-10">
                                <div className = "flex justify-between items-center text-xl text-black font-semibold ">Send Notification to email
                                <div ><Switch></Switch></div>
                                </div>
                                
                                <div className = " flex justify-between items-center text-xl text-black font-semibold">Theme
                                <ClickSwitch></ClickSwitch>
                                </div>
                               
                                <div className = "flex justify-between items-center text-xl text-black font-semibold">Language
                                <Dropdown className = "flex flex-row w-[50px]"></Dropdown>
                                </div>

                                
                            </div>
                        </div>
                        )
}
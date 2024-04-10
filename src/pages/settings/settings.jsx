import LayoutLogged from '../../layouts/layout-logged';
import { useState } from 'react';
import images from "../../assets"
import Input from '../../components/form/input';
import Switch from '../../components/switch/Switch';
import ClickSwitch from '../../components/switch/ClickSwitch';
import Dropdown from '../../components/switch/Dropdown';
import ChangePass from '../../components/Modal/ChangePass';

const MENU_ITEM = [
    {
        // index: 0,
        icon: images.bookImage,
        titles: "Overview",
        numberNoti: 2,
        activePage: false,
        children: {
            data:[
                {
                    id:1,
                    titles: "Notice Board",
                    numberNoti: 1,
                    activePage: true,
                },
                {
                    id:2,
                    titles: "Course Annoucement",
                    numberNoti: 1,
                    activePage: false,
                }
            ]
        }
    
    },
    {
        // index: 1,
        icon: images.bellImage,
        titles: "Notification",
        numberNoti: 2,
        activePage: false,
        children: {
            data:[

            ]
        }
    
    },
    {
        // index: 2,
        icon: images.graduateImage,
        titles: "Gradebook",
        numberNoti: 2,
        activePage: false,
        children: {
            data:[]
        }
    
    },
    {
        // index: 3,
        icon: images.calendarImage,
        titles: "Timetable",
        numberNoti: 2,
        activePage: false,
        children: {
            data:[]
        }
    
    },
    {
        // index: 4,
        icon: images.settingImage,
        titles: "Settings",
        numberNoti: 0,
        activePage: true,
        children: {
            data:[]
        }
    
    },
];


export default function Settings(){
    
        const [menuData,setMenuData] = useState(MENU_ITEM)
        
        const[showModal, setShowModal] = useState(false);

        const updateMenuData = (updatedData) => {
            setMenuData(updatedData);
            };
            

        return  <LayoutLogged menuData={menuData} label={"Settings"} updateMenuData={updateMenuData} >
            <div className = "h-[800px] w-[1200px] flex space-x-6 space-y-2 ml-20"> 
                <div className = "flex flex-col ">
                    
                        <div className="mt-2 h-96 flex flex-col  w-[384px] py-[24px] px-[24px] bg-gradient-to-r from-blue-700 to-blue-800  rounded-[20px] gap-[20px]">
                            
                            <div className = "mb-6">
                                <div className = "ml-0">
                                    <h1 className="text-2xl not-italic font-bold leading-8 text-[#FFF]">User Profile</h1>
                                </div>
                                <div className="flex mt-4">
                                    <img className="w-[90px] h-[90px]" src={images.avatar}></img>
                                    <div className="ml-4">
                                        <span className="text-white text-xl font-bold">Thomas Anree</span>
                                        <br></br>
                                        <span className="text-white">ITITIU00000</span>
                                        
                                        <button id= "myBtn" className = "text-white mt-1 btn max-w-fit bg-sky-500/100 hover:bg-sky-400/100">Change Avatar</button>
                                        
                                    </div>
                                </div>
                                <div className ="mt-4">
                                    <span className = "text-white font-sans text-base">Department</span>
                                    <br></br>
                                    <span className="text-white text-lg font-bold">Computer Science & Engineering</span>
                                    <br></br>
                                    <div className='mt-5'>
                                        <div className = "flex justify-between">
                                            <p className = "flex  text-white font-semibold text-sm ">Gender:</p>
                                            <p className = "flex  text-white font-base text-sm ">Male</p>
                                        </div>
                                        <div className = "flex justify-between">
                                            <p className = "flex  text-white font-semibold text-sm ">Birthday:</p>
                                            <p className = "flex  text-white font-base text-sm ">30/2/2003</p>
                                        </div>
                                        <div className = "flex justify-between">
                                            <p className = "flex  text-white font-semibold text-sm ">Student ID:</p>
                                            <p className = "flex  text-white font-base text-sm ">ITITIU00000</p>
                                        </div>
                                        <div className = "flex justify-between">
                                            <p className = "flex  text-white font-semibold text-sm ">Class year:</p>
                                            <p className = "flex  text-white font-base text-sm ">2021</p>
                                        </div>
                                        <div className = "flex justify-between">
                                            <p className = "flex  text-white font-semibold text-sm ">Email:</p>
                                            <p className = "flex  text-white font-base text-sm ">ITITIU21000@student.hcmiu.edu.vn</p>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        
                        </div>
                    
                    <div className = "mt-6 h-32 flex w-[384px] py-[24px] px-[24px] bg-white justify-center  rounded-[20px] gap-[20px]">
                        <div className = "text-center mt-5">
                            <h1 className = "text-black text-2xl font-bold text-center mt-0.5">Password</h1> 
                        </div>
                        <button onClick ={()=> setShowModal(true)} className = "text-white space-y-0 mt-5 ml-4 btn h-9 bg-sky-500 hover:bg-sky-400/100">Change Password</button>
                        <ChangePass onClose={()=> setShowModal(false)} isVisible = {showModal}></ChangePass>
                    </div>
                </div>
                
                <div className = "flex flex-col">
                    <div className = "h-96 space-y-0 flex-col w-[800px] py-[20px] px-[24px] bg-white  rounded-[20px] gap-[20px]">
                        <h1 className = "text-2xl font-bold text-sky-800">Contact Information</h1>
                        <br></br>
                        <div className = "">
                            <Input className="" placeholder = "12 ABCD Street, Ward 18, District 3, Ho Chi Minh City" label="Address" />
                        </div>
                        <br></br>
                        <div className = "">
                            <Input className="" placeholder = "0909 090 090" label="Phone Number" />
                        </div>
                        <div className= "flex justify-end">
                            
                            <button  className = "text-gray-500 w-[120px] space-y-0 mt-8 ml-4 btn h-9 border border-black bg-white hover:bg-gray-500 hover:text-white">Cancel</button>
                            
                            <button  className = "text-gray-500 w-[120px] space-y-0 mt-8 ml-4 btn h-9  border border-black  hover:bg-gray-500 hover:text-white">Save</button>
                        </div>
                    </div>
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
                </div>
            </div>
            
        </LayoutLogged> 
        
        }

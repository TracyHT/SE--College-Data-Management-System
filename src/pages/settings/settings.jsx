import LayoutLogged from '../../layouts/layout-logged';
import { useState } from 'react';
import images from "../../assets"
import Switch from '../../components/switch/Switch';
import ClickSwitch from '../../components/switch/ClickSwitch';
import Dropdown from '../../components/switch/Dropdown';
import ContactInfo from './ContactInfo';
import Profile from '../settings/profile';
import Pass from '../settings/Pass';
import SystemSet from './SystemSet';


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
        

        const updateMenuData = (updatedData) => {
            setMenuData(updatedData);
            };
            

        return  <LayoutLogged menuData={menuData} label={"Settings"} updateMenuData={updateMenuData} >
            <div className = "h-[800px] w-[1200px] flex space-x-6 space-y-2 ml-20"> 
                <div className = "flex flex-col ">
                    
                    <Profile />
                
                    <Pass />
                </div>
                
                <div className = "flex flex-col">
                    <ContactInfo />
                    
                    <SystemSet />
                </div>
            </div>
            
        </LayoutLogged> 
        
        }

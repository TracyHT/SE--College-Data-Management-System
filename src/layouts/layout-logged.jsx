import PropTypes from 'prop-types';
import images from '../assets';
import {Topbar} from "../components/topbar"
import {Sidebar} from "../components/sidebar"
import { useState  } from 'react';
import RouterNoti from '../pages/notification/routerNoti';
import RouterTime from '../pages/timetable/routerTime';

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
                    titles: "Course Announcement",
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
        activePage: true,
        children: {
            data:[
                {
                    id:1,
                    titles: "Notice Board",
                    numberNoti: 1,
                    activePage: false,
                },
                {
                    id:2,
                    titles: "Course Announcement",
                    numberNoti: 1,
                    activePage: true,
                }
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
            data:[
                {
                    id:1,
                    titles: "Notice Board",
                    numberNoti: 1
                },
                {
                    id:2,
                    titles: "Course Announcement",
                    numberNoti: 1
                }
            ]
        }
    
    },
    {
        // index: 3,
        icon: images.calendarImage,
        titles: "Timetable",
        numberNoti: 2,
        activePage: false,
        children: {
            data:[
                {
                    id:1,
                    titles: "asd Board",
                    numberNoti: 1
                },
                {
                    id:2,
                    titles: "Course Announcement",
                    numberNoti: 1
                }
            ]
        }
    
    },
    {
        // index: 4,
        icon: images.settingImage,
        titles: "Settings",
        numberNoti: 2,
        activePage: false,
        children: {
            data:[
                {
                    id:1,
                    titles: "Notice Board",
                    numberNoti: 1
                },
                {
                    id:2,
                    titles: "Course Announcement",
                    numberNoti: 1
                }
            ]
        }
    
    },
];

export default function LayoutLogged ({ label, children}){
    
    const [menuData,setMenuData] = useState(MENU_ITEM)

    const updateMenuData = (updatedData) => {
        setMenuData(updatedData);
    };

    return (
        <div className={`bg-[#F1F5F9] w-full h-full min-h-[100vh]`}>
            <Topbar label={label}></Topbar> 
            <Sidebar menuData={menuData} updateMenuData={updateMenuData}></Sidebar>
            <div className={"w-full h-full pb-[3rem]"}>
                <div className={"inline-flex flex-col items-start mt-[10rem] pl-[26em] w-max h-full "}>
                    
                    {children}
                </div>
            </div>
    </div>)
}
LayoutLogged.propTypes = {
    children: PropTypes.node, 
    label :PropTypes.string.isRequired,
};
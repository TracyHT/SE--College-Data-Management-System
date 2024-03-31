import LayoutLogged from '../../layouts/layout-logged';
import images from "../../assets"
import CourseAnnoucement from './courseAnnoucement';
import NoticeBoard from './noticeBoard';
import { useState } from 'react';
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
                    titles: "Course Annoucement",
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
                    titles: "Course Annoucement",
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
                    titles: "Course Annoucement",
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
                    titles: "Course Annoucement",
                    numberNoti: 1
                }
            ]
        }
    
    },
];

export default function Notification() {
    const [menuData,setMenuData] = useState(MENU_ITEM)

    const renderContent = () => {

        const activeChild = menuData.find(item => {
            if (item.activePage){
                const activeChildItem = item.children.data.find(child => child.activePage);
                return activeChildItem;
            }

        }); 
        if (activeChild) {
            const activeChildItem = activeChild.children.data.find(child => child.activePage);
            if (activeChildItem.titles === "Notice Board") {
                return <NoticeBoard />;
            } else if (activeChildItem.titles === "Course Annoucement") {
                return <CourseAnnoucement />;
            }
        }
        
        // Default return if no active child item found
        return null;
    };

    const updateMenuData = (updatedData) => {
        setMenuData(updatedData);
    };
    return <LayoutLogged menuData={menuData} label={"Notification"} updateMenuData={updateMenuData} >
        {renderContent()}
        {/* <CourseAnnoucement></CourseAnnoucement> */}
    </LayoutLogged>
}


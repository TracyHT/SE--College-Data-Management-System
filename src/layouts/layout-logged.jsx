import PropTypes from 'prop-types';
import images from '../assets';
import {Topbar} from "../components/topbar"
import {Sidebar} from "../components/sidebar"
import CourseAnnoucement from '../pages/notification/courseAnnoucement';
import NoticeBoard from "../pages/notification/noticeBoard"
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseAnnouceDetail from '../pages/notification/courseAnnouceDetail';
import NoticeBoardDetail from '../pages/notification/noticeBoardDetail';

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
                return (
                    
                    <Routes>
                    <Route path="/notice-board/detail" element={<NoticeBoardDetail />} />
                    <Route path="/notice-board/*" element={<NoticeBoard />} />  
                    </Routes>
                
            );
            
            } else if (activeChildItem.titles === "Course Announcement") {
                return (
                    <Routes>
                    <Route path="/course-announcement/detail" element={<CourseAnnouceDetail />} />
                    <Route path="/*" element={<CourseAnnoucement />} />  
                    </Routes>
                
            );
            }
        }
        
        // Default return if no active child item found
        return null;
    };
    const updateMenuData = (updatedData) => {
        setMenuData(updatedData);
    };
    return (
    <div className="mx-auto bg-[#F1F5F9] w-max h-max" >
            <Topbar label={label}></Topbar>
            <Sidebar menuData={menuData} updateMenuData={updateMenuData}></Sidebar>
            <div className={""}>
                <div className={"inline-flex flex-col items-start mt-[9rem] ml-[5rem] px-[20em] w-full bg-[#F1F5F9] h-[2000px]"}>
                    {renderContent()}
                    {children}
                </div>
            </div>
    </div>)
}
LayoutLogged.propTypes = {
    children: PropTypes.node, 
    label :PropTypes.string.isRequired,
};
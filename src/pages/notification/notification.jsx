
import circle from "../../assets/circle.png"
import LayoutLogged from '../../layouts/layout-logged';

import images from "../../assets"
import markAll from "../../assets/check2-all.png"

export default function Notification() {
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
    
    return <LayoutLogged menuData={MENU_ITEM} label={"Notification"} >
            <div className="w-full">

                <div className="flex justify-between items-center self-stretch ">
                    <span className="flex text-3xl not-italic font-bold leading-10 text-[#080D25]">Courses Annoucement</span>
                    <div className="flex items-center gap-[8px] mr-[450px]">
                        <img src={markAll} alt="mark"></img>
                        <span className="text-sm not-italic font-semibold leading-5 text-[#6C757D] ">Mark all as read</span>

                    </div>
                </div>
                <div className="flex items-start gap-[20px]">
                    <div className="flex flex-col items-start gap-[20px] py-[32px]">
                        <div className="flex h-64 flex-col justify-center items-start w-[348px] py-[32px] px-[24px] bg-[#022081] rounded-[20px] gap-[24px]" >
                                                                                                                                                
                            <div className="flex flex-col justify-center items-start self-stretch">
                                <span className="text-sm not-italic font-medium leading-5 text-[#F8F9FA]">COURSE INFORMATION</span>
                                <span className="self-stretch text-xl not-italic font-bold leading-7 text-[#FFF]">Computer Architecture _S2_2023-24_G01</span>
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <div className="flex justify-between items-center w-[292px]">
                                    <span className="text-sm not-italic font-semibold leading-5 text-[#F8F9FA]">Lecturer:</span>
                                    <span className="text-sm not-italic font-normal leading-5 text-[#F8F9FA]">Quoc Cuong Pham</span>
                                </div>
                                <div className="flex justify-between items-center w-[292px]">
                                    <span className="text-sm not-italic font-semibold leading-5 text-[#F8F9FA]">Contact:</span>
                                    <span className="text-sm not-italic font-normal leading-5 text-[#F8F9FA]">cuongpham@hcmut.edu.vn</span>
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col items-start bg-white rounded-[20px] px-[24px] py-[32px]  w-[348px] gap-[24px]">
                                <span className="text-xl not-italic font-bold leading-7 text-[#052C65]">Courses with updates</span>
                                <div className="flex flex-col items-start self-stretch gap-[8px]">
                                    <div className="flex justify-between items-center self-stretch px-[24px] py-[16px] rounded-[12px] bg-[#CFE2FF]">
                                        <span className="text-xl not-italic font-bold leading-7 text-[#3D8BFD] pr-[20px] w-3/4  break-words"> Computer Architecture_S2_2023-24_G01</span>
                                        
                                        <span className="flex h-5 w-5 p-2 flex-col justify-center items-center gap-[10px] rounded-[100px] bg-[#DC3545] mr-[10px]">
                                            <span className="text-xs not-italic font-bold leading-6 text-[#FFF]">
                                                1
                                        </span>
                                        </span>
                                        
                                    </div>
                                    <div className="flex justify-between items-center self-stretch px-[24px] py-[16px] ">
                                        <span className="text-xl not-italic font-bold leading-7 text-[#3D8BFD] pr-[20px]"> Software Engineering_S2_2023-24_G01</span>
                                        
                                        <span className="flex h-5 w-5 p-2 flex-col justify-center items-center gap-[10px] rounded-[100px] bg-[#DC3545]">
                                            <span className="text-xs not-italic font-bold leading-6 text-[#FFF]">
                                                1
                                        </span>
                                        </span>
                                        
                                    </div>
                                    <div className="flex justify-between items-center self-stretch px-[24px] py-[16px] ">
                                        <span className="text-xl not-italic font-normal leading-7 text-[#000] pr-[20px]"> Computer Architecture_S2_2023-24_G01</span>
                                                                            
                                    </div>
                                    <div className="flex justify-between items-center self-stretch px-[24px] py-[16px] ">
                                        <span className="text-xl not-italic font-normal leading-7 text-[#000] pr-[20px]"> Computer Architecture_S2_2023-24_G01</span>

                                        
                                    </div>
                                    <div className="flex justify-between items-center self-stretch px-[24px] py-[16px] ">
                                        <span className="text-xl not-italic font-normal leading-7 text-[#000] pr-[20px]"> Computer Architecture_S2_2023-24_G01</span>

                                    </div>
                                </div>

                            </div>
                    </div>
                    <div className="flex p-8 flex-col items-end self-stretch w-[750px] h-[1000px] bg-white rounded-[20px] mt-[32px]">
                        <div className="flex flex-col items-start self-stretch px-[12px] py-[24px] gap-[14px]   border-solid border-b-2 border-[#000] "  >
                            <div className="flex items-center self-stretch gap-[8px]">
                                <img className="w-[15px] h-[15px]" src={circle}></img>
                                <span className="text-xl not-italic font-semibold leading-7 text-[#3D8BFD]">Cancel CA class on Tuesday, 19 March 2024</span>
                            </div>
                            <p className="text-base not-italic font-medium leading-6 text-[#343A40]">
                            Dear all,<br></br><br></br>

Due to an urgent meeting scheduled at the same time with our class, the class on Tuesday, 19-March will be cancelled.<br></br><br></br>

Sorry for inconvenience.<br></br><br></br>

Best regards,<br></br><br></br>
Cuong
                            </p>
                            <div className="flex justify-between items-start self-stretch">
                                <span className="text-sm not-italic font-semibold leading-5 text-[#AFB5BB]">3 days ago </span>
                                <span className="text-right text-sm not-italic font-semibold leading-5 text-sm not-italic font-medium leading-5 text-[#080D25]">Posted by: Quoc Cuong Pham</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
    </LayoutLogged>
}


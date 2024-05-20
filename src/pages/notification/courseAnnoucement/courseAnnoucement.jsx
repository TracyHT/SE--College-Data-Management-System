
import images from "../../../assets"

// import images from "../../assets"
import CourseItem from "./courseItem"
import Letter from "../noticeBoard/letter"


export default function CourseAnnoucement()  {
    return(
<div className="w-full">

<div className="flex justify-between items-center self-stretch ">
    <span className="flex text-3xl not-italic font-bold leading-10 text-[#080D25]">Courses Annoucement</span>
    <div className="flex items-center gap-[2em] ">
        <div>
            <span className="text-sm not-italic font-bold leading-5 text-[#DC3545]">1 unread notifications</span>
        </div>
        <div className="flex items-center gap-[1em] cursor-pointer">
            <img src={images.check2allImage} alt="mark"></img>
            <span className="text-sm not-italic font-semibold leading-5 text-[#6C757D] ">Mark all as read</span>
        </div>
    </div>
</div>
<div className="flex items-start gap-[3em]">
    <div className="flex flex-col items-start gap-[3em] py-[2em]">
        <div className="flex h-64 flex-col justify-center items-start w-[24em] py-[2em] px-[2em] bg-[#022081] rounded-[2em] gap-[2em]" >
                                                                                                                                
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
        <div className="flex flex-col items-start bg-white rounded-[2em] px-[1.75em] py-[2em]  w-[24em] gap-[2em]">
                <span className="text-xl not-italic font-bold leading-7 text-[#052C65]">Courses with updates</span>
                <div className="flex flex-col items-start self-stretch gap-[1em]">  
                  <CourseItem title={"Computer Architecture_S2_2023-24_G01"} numberOfNoti={1} active={true} ></CourseItem>
                  <CourseItem title="Software Engineering_S2_2023-24_G01" numberOfNoti={1} active={false} ></CourseItem>  
                  <CourseItem title="Computer Architecture_S2_2023-24_G01" numberOfNoti={0} active={false} ></CourseItem>  
                  <CourseItem title="Computer Architecture_S2_2023-24_G01" numberOfNoti={0} active={false} ></CourseItem>   
                  <CourseItem title="Computer Architecture_S2_2023-24_G01" numberOfNoti={0} active={false} ></CourseItem>   
                </div>

            </div>
    </div>
    <div className="flex p-8 flex-col items-end self-stretch w-[50em] bg-white rounded-[20px] mt-[2em] gap-[2em]">
    
        <Letter 
        title={"Cancel CA class on Tuesday, 19 March 2024"} 
        content={`Dear all,

Due to an urgent meeting scheduled at the same time with our class, the class on Tuesday, 19-March will be cancelled.
Sorry for inconvenience.

Best regards,
Cuong`}
        daySend = {"Sunday, March 17, 2024"}
        nameSender = {"Quoc Cuong Pham"}
        readed={true}
        ></Letter>

<Letter 
        title={"Online class"} 
        content={`Dear all,

According to the regulation from IU, our first class in this semester will be organized online. Please join the following link for the class:

Meeting ID: 413 285 071 138
Passcode: NFPhRF`}
        daySend = {"Monday, February 19, 2024"}
        nameSender = {"Quoc Cuong Pham"}
        ></Letter>
    </div>
    
</div>

</div>
    )
}
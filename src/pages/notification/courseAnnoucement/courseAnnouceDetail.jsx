import images from '../../../assets';
// import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import CourseDetailItem from './courseDetailItem';
export default function CourseAnnouceDetail() {
    const navigate = useNavigate();
    const handleOnClickBackCourseAnnouce = () => {
        navigate("/noti/course-announcement")
    }
    return (
    <div className="w-full inline-flex flex-col items-start gap-[2em]">

        <div className="flex flex-col justify-center items-start">
            <div className="flex flex-col justify-center items-start p-[1em] gap-[2em]">
                <div className="flex items-center gap-[1em] cursor-pointer" onClick={handleOnClickBackCourseAnnouce}>
                    <img src={images.navLeftImage} className={"w-8 h-8"}></img>
                    <div className="text-xl not-italic dark:text-[#fff] font-semibold leading-7 text-[#0A150F]">Back</div>
                </div>
            </div>
            <div className="flex justify-center items-start self-stretch px-[3em] gap-[2em]">
                <div className="text-3xl not-italic dark:text-[#cfe2ff] font-bold leading-10 text-[#080D25]">
                Computer Architecture _S2_2023-24_G01
                </div>
            </div>

        </div>

        <CourseDetailItem 
                title="Cancel CA class on Tuesday, 19 March 2024"
                daySend="Sunday, March 17, 2024 8:11:08 AM ICT"
                nameSender="Quoc Cuong Pham"
                content={`Dear all,

Due to an urgent meeting scheduled at the same time with our class, the class on Tuesday, 19-March will be cancelled.

Sorry for inconvenience.

Best regards,
Cuong`}
            />
            
            </div>

    )
}


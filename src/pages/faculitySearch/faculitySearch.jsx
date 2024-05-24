import PropTypes from "prop-types";
import images from "../../assets";
import { useNavigate } from "react-router-dom";

export default function FaculitySearch(){
    const navigate = useNavigate();
    const handleOnClickDetailFaculity = () => {
        navigate("/faculitySearch/detail")
    }
    return (
        <div className="flex flex-col items-center gap-[32px] w-full">
            
                <p className="text-3xl not-italic font-bold leading-10 text-[#022081] text-center">Search for Lecturer Information</p>
                <div className ="">
                    <div className="flex items-start gap-[16px]">
                        <div className="flex h-10 flex-col items-start gap-[5px] w-[500px]">
                            <div className="flex items-center self-stretch px-[20px] py-[12px] gap-[10px] rounded-md bg-white border-solid border-2 border-[#AFB5BB] ">
                                <img src={images.search} alt="" className="w-4 h-4"></img>
                                <p className="text-base not-italic font-normal leading-6 text-[#49505] ">Search by Lecturer’s name</p>
                            </div>
                        </div>
                        <div className="flex h-10 flex-col items-start w-[320px] gap-[5px]">
                            <div className="flex items-center self-stretch px-[20px] py-[12px] gap-[10px]  rounded-md bg-white border-solid border-2 border-[#AFB5BB]">
                                
                                <div className="flex justify-between items-center">
                                    <p className="text-base not-italic font-normal leading-6 text-[#495057]">Information Technology</p>
                                </div>
                                <img src={images.arrowDown} alt="" className="w-3 h-3 flex-shrink-0"></img>
                            </div>  
                        </div>
                        <div className="flex w-32 h-[50px] justify-center items-center px-[16px] py-[10px] gap-[8px] rounded-md bg-[#3D8BFD] cursor-pointer">
                                <p className="text-base not-italic font-bold leading-5 text-[#FFF]">Search</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start self-stretch gap-[20px]">
                    <p className="text-xl not-italic font-bold leading-7 text-[#6C757D]">Search Results</p>
                    <div className="flex p-8 justify-between items-center self-stretch bg-white rounded-[20px]">
                        <div className="flex flex-col items-center gap-[4px] ">
                            <p className="text-3xl not-italic font-bold leading-10 text-[#080D25] self-stretch">
                                    Lecture Name
                            </p>
                            <p className="text-xl not-italic font-medium leading-6 text-[#6C757D] self-stretch">
                                    Associate Professor
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-[40px] cursor-pointer" onClick={handleOnClickDetailFaculity}>
                            <div className="flex w-64 flex-col items-start gap-[4px]">
                                <p className="text-xl not-italic font-bold leading-6 text-[#212529]">Status</p>
                                <p className="text-xl not-italic font-medium leading-6 text-[#6C757D]">
                                    Head of DS Department
                                </p>
                            </div>
                            <img src={images.navRightImage} className="w-8 h-8 stroke-1" alt="error  "></img>
                        </div>
                    </div>
                    <div className="flex p-8 justify-between items-center self-stretch bg-white rounded-[20px]">
                        <div className="flex flex-col items-center gap-[4px]">
                            <p className="text-3xl not-italic font-bold leading-10 text-[#080D25] self-stretch">
                            Grove Gunbie
                            </p>
                            <p className="text-xl not-italic font-medium leading-6 text-[#6C757D] self-stretch">
                                    Associate Professor
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-[40px] cursor-pointer" onClick={handleOnClickDetailFaculity}>
                            <div className="flex w-64 flex-col items-start gap-[4px] ">
                                <p className="text-xl not-italic font-bold leading-6 text-[#212529]">Status</p>
                                <p className="text-xl not-italic font-medium leading-6 text-[#6C757D]">
                                Guest Lecturer
                                </p>
                            </div>
                            <img src={images.navRightImage} className="w-8 h-8 stroke-1" alt="error"></img>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}

FaculitySearch.propTypes = {
    children: PropTypes.node,
}
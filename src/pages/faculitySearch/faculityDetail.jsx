import images from "../../assets";

export default function FaculityDetail () {
    return (
        <div className="flex flex-col items-start self-stretch gap-[32px]">
            <div className="inline-flex flex-col items-start gap-[32px]">
                <div className="flex flex-col justify-center items-start w-[1101]px">
                    <div className="flex flex-col justify-center items-start px-[12px] gap-[10px]">
                        <div className="flex items-center gap-[8px]">
                            <img src={images.navLeftImage} className="w-8 h-8"></img>
                            <p className="text-xl not-italic font-semibold leading-7 text-[#0A150F]">Back</p>
                        </div>
                        <div className="flex items-center self-stretch gap-[24px] w-full">
                            <img src={images.facilityImage} className="w-32 h-32 rounded-[12px]"></img>
                            <div className="flex p-8 justify-between items-center rounded-[12px] bg-[#FFF] w-[80rem]">
                                <div className="flex flex-col items-center gap-[4px] w-full">
                                    <p className="text-3xl not-italic font-bold leading-10 text-[#080D25] self-stretch">
                                    Grove Gunbie
                                    </p>
                                    <p className="text-xl not-italic font-medium leading-6 text-[#6C757D] self-stretch">
                                            Associate Professor
                                    </p>
                                </div>
                                <div className="flex justify-end items-center gap-[40px] " >
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

                </div>
            </div>
            <div className="inline-flex items-start gap-[32px]">
                <div className="flex flex-col items-start self-stretch gap-[32px]">
                    <div className="flex flex-col items-start w-[500px] px-[24px] py-[36px] gap-[20px] rounded-[20px] bg-[#FFF]">
                        <p className="text-xl not-italic font-bold leading-7 text-[#052C65]">Contact Information</p>
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="text-base not-italic font-bold leading-5 text-[#052C65]">Email</p>
                            <p className="text-base not-italic font-medium leading-6 text-[#343A40]">rellgood0@youku.com</p>
                        </div>
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="text-base not-italic font-bold leading-5 text-[#052C65]">Publication</p>
                            <p className="text-base not-italic font-medium leading-6 text-[#343A40]">www.journalofstudies2.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-[500px] px-[24px] py-[36px] gap-[20px] rounded-[20px] bg-[#FFF]">
                        <p className="text-xl not-italic font-bold leading-7 text-[#052C65]">Education</p>
                        <p className="text-base not-italic font-medium leading-6 text-[#343A40]">Harvard University</p>
                    </div>
                    <div className="flex flex-col items-start w-[500px] px-[24px] py-[36px] gap-[20px] rounded-[20px] bg-[#FFF]">
                        <p className="text-xl not-italic font-bold leading-7 text-[#052C65]">Field of Interest</p>
                        <p className="text-base not-italic font-medium leading-6 text-[#343A40]">Machine Learning</p>
                    </div>
                </div>

                <div className="flex flex-col items-start flex-shrink-0 w-[800px] h-[600px] px-[24px] py-[32px] gap-[24px] rounded-[20px] bg-[#FFF]">
                    <p className="text-xl not-italic font-bold leading-7 text-[#052C65]">Teaching Courses</p>
                    <p className="text-base not-italic font-medium leading-6 text-[#343A40]">
                    Machine Learning, Image Processing, Introduction to AI
                    </p>
                    <p className="h-px bg-gray-300 w-[700px]"></p>
                    <p className="text-xl not-italic font-bold leading-7 text-[#052C65]">Projects</p>
                    <p className="text-base not-italic font-medium leading-6 text-[#343A40]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

        </div>
    )
}
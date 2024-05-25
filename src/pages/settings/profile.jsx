import images from "../../assets"

export default function Profile(){
    return(
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
                                        <br></br>
                                        <div className="w-[131px] h-8 px-3 py-[5px] bg-blue-500 hover:bg-sky-400/100 rounded-md justify-start items-start gap-2 inline-flex">
                                            <button className = "text-white text-sm font-semibold font-['Montserrat'] leading-none mt-1 btn max-w-fit">Change Avatar</button>
                                        </div>
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
                        )
}
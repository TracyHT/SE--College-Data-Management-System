import { PropTypes } from 'prop-types';


export default function CourseItem ({className,title,numberOfNoti,active=false}){
    return (
        <div className={`flex justify-between items-center self-stretch px-[2em] py-[1.5em] rounded-[1.5em] ${!active || "bg-[#CFE2FF] dark:bg-[#3d8bfd]"} ${className}`}>
            <span className={`text-xl not-italic leading-7 ${!numberOfNoti ? "text-[#000] dark:text-[#fff]" : "text-[#3D8BFD] dark:text-[#cfe2ff] font-bold "}  pr-[1em] w-3/4  break-words`}> {title}</span>     
                { numberOfNoti>0 && <span className="flex h-[1.75em] w-[1.75em]  flex-col justify-center items-center gap-[1em] rounded-[1em] bg-[#DC3545] mr-[0.5em]">
                    <span className={`text-xs not-italic font-bold leading-6 text-[#FFF]`}>
                       {numberOfNoti}
                    </span>
                </span>
                }                        
        </div>
    )
}

CourseItem.propTypes  = {
    className : PropTypes.string,
    title : PropTypes.string,
    numberOfNoti : PropTypes.number,
    active : PropTypes.bool
}
import { PropTypes } from 'prop-types';
import images from "../../../assets"
import { useNavigate } from "react-router-dom";


export default function Letter ({className,title,content,daySend, nameSender, readed=false}){
    const navigate = useNavigate();

    const handleClickLetterDetail = () =>{
        navigate("/noti/course-announcement/detail")
    }
    return (
        <div className={`${className} flex flex-col items-start self-stretch px-[1.75em] py-[1.5em] gap-[2em] border-solid border-b-2 dark:border-[#fff] border-[#000] ` } >
                    <div className={"cursor-pointer"} onClick={handleClickLetterDetail}>
                        <div className="flex items-center self-stretch gap-[1em] ">
                            {readed && <img className="w-[1em] h-[1em]" src={images.circleImage}></img>}
                            <span className={`text-xl not-italic font-semibold leading-7 ${readed  ? "dark:text-[#6ea8fe] text-[#3D8BFD]" : "dark:text-[#fff] text-[#000]"}`}>{title}</span>
                            <img src={images.navRightImage} className={`w-[1em] h-[1em] ${readed && "color-[#3D8BFD]"}`}></img>
                        </div>
                    </div>
                    <p className={"text-base not-italic font-medium leading-6 dark:text-[#fff] text-[#343A40] whitespace-pre-line"}>
                        {content}
                    </p>
                    <div className="flex justify-between items-start self-stretch">
                        <span className="text-sm not-italic font-semibold leading-5 dark:text-[#e9ecef] text-[#AFB5BB]">{daySend} days ago </span>
                        <span className="text-right text-sm not-italic font-semibold leading-5 text-sm not-italic font-medium leading-5 dark:text-[#fff] text-[#080D25]">Posted by: {nameSender}</span>
                    </div>
        </div>
    )
}

Letter.propTypes  = {
    className : PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    daySend : PropTypes.string.isRequired, 
    nameSender : PropTypes.string.isRequired,
    readed : PropTypes.bool

}
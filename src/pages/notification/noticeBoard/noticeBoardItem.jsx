import PropTypes from 'prop-types';
import images from '../../../assets';
import { useNavigate } from "react-router-dom";
export default function NoticeBoardItem({ title, dayPost, readed=false }) {
    const navigate = useNavigate();
    const handleOnClickNotiDetail = () => {
        navigate("/noti/notice-board/detail")
    }
    return (
        <div className={`flex flex-col items-start self-stretch px-[1em] py-[1em] gap-[1em] border-b-[1px] dark:border-gray-50 border-gray-500`}>
            <div className="flex items-center self-stretch gap-[1em] cursor-pointer" onClick={handleOnClickNotiDetail}>
                {readed && <img src={images.circleImage} className="w-4 h-4"></img>}
                <p className={`text-xl not-italic font-semibold leading-7 ${readed ? "dark:text-[#6ea8fe] text-[#3D8BFD]" : "dark:text-[#fff] text-[#000]"}`}>{title}</p>
                <img src={images.navRightImage} className="w-5 h-5"></img>
            </div>
            <div className="flex items-start">
                <p className="text-sm not-italic font-semibold leading-5 dark:text-[#f8f9fa] text-[#6C757D]">
                    {dayPost}
                </p>
            </div>
        </div>
    );
}

NoticeBoardItem.propTypes = {
    title: PropTypes.string.isRequired,
    dayPost: PropTypes.string.isRequired,
    readed: PropTypes.bool,

};

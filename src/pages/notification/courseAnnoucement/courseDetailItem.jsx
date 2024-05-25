import PropTypes from 'prop-types';
import images from '../../../assets';

export default function CourseDetailItem({ title, content, daySend, nameSender }) {
    return (
        <div className="flex p-8 items-start self-stretch gap-[3em] rounded-[2em] dark:bg-[#6c757d] bg-[#FFF] w-[75em]">
            <div className="flex h-56 flex-col justify-between items-start w-[20em]">
                <div className="flex flex-col items-start self-stretch gap-[1em]">
                    <div className="self-stretch text-xl not-italic font-semibold leading-7 dark:text-[#cfe2ff] text-[#3D8BFD]">
                        {title}
                    </div>
                    <div className="text-sm not-italic font-semibold leading-5 text-[#6C757D]">
                        {daySend}
                    </div>
                </div>
                <div className="flex items-start self-stretch gap-[2em]">
                    <img src={images.userCourseAnnouceImage} className="rounded-lg w-12 h-12" alt="Profile"></img>
                    <div className="flex flex-col items-start gap-[0.25em]">
                        <p className="text-sm not-italic font-normal leading-5 dark:text-[#0a58ca] text-[#052C65]">
                            Posted by
                        </p>
                        <p className="text-base not-italic font-bold leading-5 self-stretch dark:text-[#0a58ca] text-[#052C65]">
                            {nameSender}
                        </p>
                    </div>
                </div>
            </div>
            <p className="w-px h-56 dark:bg-gray-50 bg-gray-500"></p>
            <p className="text-base not-italic font-medium leading-6 dark:text-[#f8f9fa] text-[#343A40] whitespace-pre-line">
                {content}
            </p>
        </div>
    );
}

CourseDetailItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    daySend: PropTypes.string.isRequired,
    nameSender: PropTypes.string.isRequired,
};

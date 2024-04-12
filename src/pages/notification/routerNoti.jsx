import { Routes, Route } from 'react-router-dom';
import NoticeBoard from "./noticeBoard/noticeBoard"
import NoticeBoardDetail from "./noticeBoard/noticeBoardDetail"
import CourseAnnouncement from "./courseAnnoucement/courseAnnoucement"
import CourseAnnouceDetail from "./courseAnnoucement/courseAnnouceDetail"

const RouterNoti = () => {
    return (
        <Routes>
            <Route path="/notice-board/detail" element={<NoticeBoardDetail />} />
            <Route path="/notice-board/*" element={<NoticeBoard />} />  

            <Route path="/course-announcement/detail" element={<CourseAnnouceDetail />} />
            <Route path="/*" element={<CourseAnnouncement />} />  
        </Routes>
    );
};

export default RouterNoti;

import { Routes, Route } from 'react-router-dom';
import NoticeBoard from "./noticeBoard"
import NoticeBoardDetail from "./noticeBoardDetail"
import CourseAnnouncement from "./courseAnnoucement"
import CourseAnnouceDetail from "./courseAnnouceDetail"

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

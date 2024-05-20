import { Routes, Route } from 'react-router-dom';
import Time from './Time';

const RouterTime = () => {
    return (
        <Routes>
            <Route path="/timetable" element={<Time />}  />
            
        </Routes>
    );
};

export default RouterTime;

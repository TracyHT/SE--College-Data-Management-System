import { TableGradebook } from "../../components/Gradebook/TableGradebook";
import LayoutDefaults from "../../layouts/Layout-defaults";

export default function Gradebook(){
   const tags = [
        {
            id: 1,
            title : 'GPA (SCALE 4.0)',
            value : 2.8
        }, 
        {
            id: 1,
            title : 'GPA (SCALE 4.0)',
            value : 2.8
        }
    ]
    const SEMESTERS = [
        {
            id: 1,
            courseID : 'Course ID',
            courseName : 'Course Name',
            Credits : 'Credits',
            inclass : 'Inclass',
            Midterm : 'Midterm',
        }
    ]
    return <LayoutDefaults>
        <div className="container">
            <div className="grid grid-cols-1">
                <TableGradebook title="THIS SEMESTERS" tableData={SEMESTERS} subText={'NOT AVAILABLE'} tags={tags}/>
                <TableGradebook title="THIS SEMESTERS" tableData={SEMESTERS} subText={'NOT AVAILABLE'} tags={tags}/>
                <TableGradebook title="THIS SEMESTERS" tableData={SEMESTERS} subText={'NOT AVAILABLE'} tags={tags}/>
            </div>
        </div>
    </LayoutDefaults>
}
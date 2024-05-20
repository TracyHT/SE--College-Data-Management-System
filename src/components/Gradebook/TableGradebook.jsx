
import PropTypes from 'prop-types';

export function Tag ({title,value}){
    return <div className="flex py-1 items-center justify-center font-semibold px-4 text-[#052C65] bg-[#FCECBC] rounded-3xl text-[11px]">
    {title}
  <span className="font-bold ms-5 text-[16px]">{value}</span>
</div>
}

export function Table({data = []}) {
    return  <table className="w-full">
    <thead className="text-[#757575] font-medium text-xs  border-collapse border-b  ">
         <tr className="text-center">
             <th className="p-3">No.</th>
             <th className="p-3">Course ID</th>
             <th className="p-3">Course Name</th>
             <th className="p-3">Credits</th>
             <th className="p-3">Inclass</th>
             <th className="p-3">Midterm</th>
             <th className="p-3">Final</th>
             <th className="p-3">N.Grade</th>
             <th className="p-3">Status</th>
             <th className="p-3">L.Garde</th>
         </tr>
    </thead>
    <tbody className="font-medium text-center">
        {data.map(function(data , index) {
            return <tr className="border-collapse border-b " key={data.id ?? index}>
              <td className="p-3">1</td>
              <td className="p-3">IT089IU</td>
              <td className="p-3 text-[#022081]" >Engineering Ethics and Professional Skills</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
          </tr>
        })}
    </tbody>
 </table>
}
export function TableGradebook({title , tags = [], tableData = []}){
    return   <div className="flex flex-col mb-7">
    <h4 className="text-xl font-bold text-[#6C757D] uppercase mb-5"> {title}</h4>
    <div className="card shadow border p-8">
       <div className="flex justify-between items-center mb-10">
           <div className="font-bold me-auto">  
               <p className="text-[28px] text-[#022081]">{title}</p>
               <p className="text-sm text-[#6C757D]">  ACADEMIC RATING: <span className="font-bold text-[#343A40]"> NOT AVAILABLE </span></p>
           </div>
           <div className="max-w-[600px] flex flex-wrap gap-2">
               {tags.map(tag => <Tag title={tag.title} value={tag.value} key={tag.id}/>)}
           </div>
       </div>
       <Table data={tableData}/>
    </div>
 </div>
}

TableGradebook.propTypes = {
    title : PropTypes.string,
    tags : PropTypes.array,
    tableData : PropTypes.array,
}
Table.propTypes = {
    data : PropTypes.array
}
Tag.propTypes = {
    title : PropTypes.string,
    value : PropTypes.string
}
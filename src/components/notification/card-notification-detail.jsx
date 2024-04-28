import PropTypes from 'prop-types';
import { ChevronRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

 function CardNotificationDetail({className , content , title, notTalk = false , date , name}){
    return  <div className={`border-bottom p-6  ${className}`}>
    <div className={`flex justify-start mb-3 items-center  ${!notTalk ? 'text-[#052C65]' : 'text-[#3D8BFD]'} `}>
         {notTalk &&  <span className={`p-2 rounded-full bg-[#3D8BFD] me-2`}> </span>}
         <h4 className="font-semibold text-[20px]">{title}</h4>
         <Link to={name} className="text-[20px] ms-1 cursor-pointer">
            <ChevronRight/>
         </Link>
    </div>
    <div className="text-base" dangerouslySetInnerHTML={{ __html: content }}>
    </div>
    <div className="flex justify-between items-center mt-4">
       <span className="text-[#6C757D] font-semibold">{date}</span>
       <p className="text-[#080D25] font-medium"><span className="font-bold">Posted by:</span> {name}</p>
    </div>
 </div>
}
CardNotificationDetail.propTypes = {
    content : PropTypes.string,
    title : PropTypes.string,
    notTalk : PropTypes.bool,
    date : PropTypes.string,
    name : PropTypes.string,
    className : PropTypes.string
}

export default CardNotificationDetail;

import PropTypes from 'prop-types';
export default function HeaderNotification({title }){
    return <div className="flex justify-between items-center mb-8">
       <p className="text-[#080D25] font-bold text-[28px]">{title}</p>
       <div className="flex justify-start items-center">
          <p className="text-[#DC3545] text-sm font-bold me-4">2 unread notifications</p>
          <p className="text-sm  text-[#6C757D] font-semibold">Mark all as read</p>
       </div>
    </div>
}
HeaderNotification.propTypes = {
    title : PropTypes.string
}
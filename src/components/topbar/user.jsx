import { PropTypes } from 'prop-types';
import dropDownIcon from "../../assets/dropdown-icon.png"
export default function User ({className,img,name,id}){
    return (
        <div className={` ${className}`}>
            <div className="flex items-center gap-[24px]">
                <img src={img} className="w-12 h-12 rounded-lg" ></img>
                <div className="flex flex-col justify-center items-start">
                    <strong className="text-right text-base not-italic font-semibold leading-6 color-primary">{name}</strong>
                    <span className="text-right text-sm not-italic font-medium leading-3 text-[#495057]">{id}</span>
                </div>
                    <img src={dropDownIcon} className="w-5 h-5"></img>
            </div>
        </div>
    )
}

User.propTypes  = {
    className : PropTypes.string,
    name : PropTypes.string,
    id : PropTypes.string,
    img : PropTypes.string
}
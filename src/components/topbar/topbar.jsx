import { PropTypes } from 'prop-types';
import Bell  from '../../assets/Bell.png';
import User from './user';
import avatar from "../../assets/avatar.png"


export default function Topbar ({className, label , ...prop }){

    return(
        <div className={`bg-white fixed pl-[350px] flex justify-between items-center flex-shrink-0 w-full
        px-[32px] py-[40px] overflow-hidden ${className}`} {...prop} >
            <header className='flex items-center flex-shrink-0 width-[524.5px] gap-[16px]'>
            <img src={Bell} alt=""></img>
            <span className="text-right font-bold text-primary text-3xl ">{label}</span>
             </header>
            <User img={avatar} name={"Thomas Anree"} id={"ITITIU21000"}></User>
        </div>
    )
} 

Topbar.propTypes  = {
    className : PropTypes.string,
    label : PropTypes.string,
}
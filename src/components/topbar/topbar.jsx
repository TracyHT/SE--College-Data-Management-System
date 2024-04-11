import { PropTypes } from 'prop-types';

import User from './user';
import avatar from "../../assets/avatar.png"
import images from '../../assets';

export default function Topbar ({className, label , ...prop }){
    return(
        <div className={`bg-white fixed pl-[25em] flex justify-between items-center flex-shrink-0 w-full
        px-[1.25em] py-[2.25em] overflow-hidden ${className}`} {...prop} >
            <header className='flex items-center flex-shrink-0 gap-[1.25em]'>
            <img className="w-10 h-10 flex-shrink-0 color-primary" src={images.bellImage}  alt=""></img>
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
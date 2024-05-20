import { PropTypes } from 'prop-types';

import User from './user';
import avatar from "../../assets/avatar.png"
import images from '../../assets';
import { useLocation } from 'react-router-dom';

export default function Topbar ({className, menuData , ...prop }){
    const location = useLocation();
    console.log(menuData.length);
    const findLabel = () => {
        let result = null;
        for(let i = 0; i < menuData.length; i++) {
            if(menuData[i]?.children) {
                const titleChildren = menuData[i].children.data.filter((children) => location.pathname.startsWith(menuData[i].path + children.path));
                if (titleChildren) {
                    result = titleChildren[0]?.titles;
                    
                }
            } else {
                console.log(location.pathname);
                console.log("/gradebook".startsWith(menuData[i]?.path));
                console.log(menuData[i]);
                if (location.pathname.startsWith(menuData[i]?.path)) {
                    result = menuData[i]?.titles;
                }
            }

        }
        console.log(result);
        return result;
    }
    return(
        <div className={`bg-white fixed pl-[25em] flex justify-between items-center flex-shrink-0 w-full
        px-[1.25em] z-40 py-[2.25em] overflow-hidden ${className}`} {...prop} >
            <header className='flex items-center flex-shrink-0 gap-[1.25em]'>
            <img className="w-10 h-10 flex-shrink-0 color-primary" src={images.bellImage}  alt=""></img>
            <span className="text-right font-bold text-primary text-3xl ">{findLabel()}</span>
             </header>
            <User img={avatar} name={"Thomas Anree"} id={"ITITIU21000"}></User>
        </div>
    )
} 

Topbar.propTypes  = {
    className : PropTypes.string,
    label : PropTypes.string,
}
import { PropTypes } from 'prop-types';
import MenuItem from './menuItem';


import images from '../../assets';

export default function Sidebar ({className, menuData , ...prop }){
    const renderItems = () => {
        return menuData.map((item, index)=> {
            return(
                <div key={index} className="w-full">
                <MenuItem  
                    data = {item}
                    
                    >
                    </MenuItem>
                    { !item.activePage || renderChildren(item)}
                </div>
            )
        })
    };
    const renderChildren = (item) => {
            return item.children.data.map((child)=>{
                return(
                    <button className="flex items-center self-stretch py-[12px] pl-[50px] pr-[20px] w-full justify-between" key={child.id} >
                        <span className="text-left text-base not-italic font-semibold leading-6 text-white">
                            {child.titles}
                            
                        </span>
                        <span className="flex w-5 h-5 p-2 justify-center items-center rounded-[100px] bg-[#DC3545]">
                            {child.numberNoti}
                        </span>
                    </button>
                    )
    
            })
    };
    return(
        <div className={`fixed inline-flex flex-col items-start flex-shrink-0 height-[1329px] gap-[24px] z-1  ${className} `} {...prop} >
            <img className="relative"src={images.sideBarBgImage}></img>
            <div className="mt-[16px] absolute px-[24px] ">

                <div className="flex items-center self-stretch py-[20px] gap-[9px]">
                    <img src ={images.rectangleImage} className="w-8 h-8"></img>
                    <span className="text-xl not-italic font-bold leading-7 text-[#F8F9FA]">PlatformName</span>
                </div>

                <div className="flex w-56 flex-col items-start"> 
            
                    <span className="text-sm not-italic font-medium leading-5 text-[#F8F9FA]">MENU </span>
                    <div className="flex flex-col items-start self-stretch ">
                        {renderItems()}
                    </div>

            </div>
            
            </div>
        </div>
    )
} 

Sidebar.propTypes  = {
    className : PropTypes.string,
    label : PropTypes.string,
    menuData : PropTypes.array.isRequired ,
}
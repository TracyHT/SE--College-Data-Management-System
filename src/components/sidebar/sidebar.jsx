import { PropTypes } from 'prop-types';
import MenuItem from './menuItem';
import images from '../../assets';

export default function Sidebar ({className, menuData ,updateMenuData, ...prop }){

    const handleClickMenu = (parentIndex, childIndex) => {
        const updatedData = menuData.map((item, index) => {
            if (index === parentIndex) {
                // Clicked on a parent item
                if (typeof childIndex === 'undefined') {
                    return {
                        ...item,
                        activePage: !item.activePage
                    };
                } else {
                    // Clicked on a child item
                    return {
                        ...item,
                        children: {
                            data: item.children.data.map((child, idx) => ({
                                ...child,
                                activePage: idx === childIndex // Set only the clicked child's activePage to true
                            }))
                        }
                    };
                }
            }
            return item;
        });
        updateMenuData(updatedData);
    };

    const renderItems = () => {
        
        return menuData.map((item, parentIndex) => (
            <div key={parentIndex} className="w-full">
                <MenuItem data={item} onClick={() => handleClickMenu(parentIndex)} />
                {!item.activePage || renderChildren(item, parentIndex)}
            </div>
        ));
    };

    const renderChildren = (item, parentIndex) => {
        return item.children.data.map((child, childIndex) => (
            <button className="flex items-center self-stretch py-[12px] pl-[60px] pr-[20px] w-full justify-between" key={child.id} 
                onClick={() => handleClickMenu(parentIndex, childIndex)}>
                <span className={"text-left text-base not-italic font-semibold leading-6 " + (child.activePage ? " text-white" : " text-[#AFB5BB]")} >
                    {child.titles}
                </span>
                <span className="flex w-5 h-5 p-2 justify-center items-center rounded-[100px] bg-[#DC3545]">
                    {child.numberNoti}
                </span>
            </button>
        ));
    };

    return (
        <div className={`fixed inline-flex flex-col items-start flex-shrink-0 height-[1329px] gap-[24px] z-1  ${className} `} {...prop} >
            <img className="relative" src={images.sideBarBgImage} alt="Sidebar background" />
            <div className="mt-[16px] absolute px-[24px] ">
                <div className="flex items-center self-stretch py-[20px] gap-[9px]">
                    <img src={images.rectangleImage} className="w-8 h-8" alt="Platform logo" />
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
    );
} 

Sidebar.propTypes  = {
    className : PropTypes.string,
    label : PropTypes.string,
    menuData : PropTypes.array.isRequired ,
    updateMenuData: PropTypes.func.isRequired,
};

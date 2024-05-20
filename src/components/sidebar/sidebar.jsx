import { PropTypes } from 'prop-types';
import MenuItem from './menuItem';
import images from '../../assets';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ className, menuData, updateMenuData, ...prop }) {
    const navigate = useNavigate();

    const handleClickMenu = (parentIndex, childIndex) => {
        const updatedData = menuData.map((item, index) => {
            if (index === parentIndex) {
                if (typeof childIndex === 'undefined') {
                    return {
                        ...item,
                        activePage: !item.activePage
                    };
                } else {
                    return {
                        ...item,
                        children: {
                            data: item.children.data.map((child, idx) => ({
                                ...child,
                                activePage: idx === childIndex
                            }))
                        }
                    };
                }
            }
            return item;
        });

        // Update menu data after mapping is complete
        updateMenuData(updatedData);

        // Check the clicked menu item and navigate accordingly
        const clickedMenuItem = updatedData[parentIndex];
        if (typeof childIndex != 'undefined') {
            // Clicked on a parent item

            if (clickedMenuItem.children.data[childIndex].titles == 'Notice Board') {
                navigate('/noti/notice-board');
            } else if (clickedMenuItem.children.data[childIndex].titles == 'Course Announcement') {
                navigate('/noti/course-announcement');
            }
        }
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
            <button
                className="flex items-center self-stretch py-[1em] pl-[3.75em] pr-[0.5em] w-full justify-between"
                key={child.id}
                onClick={() => handleClickMenu(parentIndex, childIndex)}
            >
                <span className={'text-left text-base not-italic font-semibold leading-6 ' + (child.activePage ? ' text-white' : ' text-[#AFB5BB]')}>
                    {child.titles}
                </span>
                <span className="flex w-[1em] h-[1em] p-[0.75em] justify-center items-center rounded-[5em] bg-[#DC3545]">
                    {child.numberNoti}
                </span>
            </button>
        ));
    };

    return (
        <div className={`fixed inline-flex flex-col items-start flex-shrink-0 z-1 h-full ${className} `} {...prop}>
            <img className="relative h-full w-[18rem]" src={images.sideBarBgImage} alt="Sidebar background" />
            <div className="mt-[2rem] absolute px-[1.75rem] ">
                <div className="flex items-center self-stretch py-[1.75rem] gap-[0.75rem]">
                    <img src={images.rectangleImage} className="w-8 h-8" alt="Platform logo" />
                    <span className="text-xl not-italic font-bold leading-7 text-[#F8F9FA]">PlatformName</span>
                </div>
                <div className="flex w-56 flex-col items-start">
                    <span className="text-sm not-italic font-medium leading-5 text-[#F8F9FA]">MENU </span>
                    <div className="flex flex-col items-start self-stretch ">{renderItems()}</div>
                </div>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    menuData: PropTypes.array.isRequired,
    updateMenuData: PropTypes.func.isRequired
};

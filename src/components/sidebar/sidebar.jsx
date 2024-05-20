import { PropTypes } from 'prop-types';
import MenuItem from './menuItem';
import images from '../../assets';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ className, menuData, ...prop }) {

    const renderItems = () => {
        return menuData.map((item, parentIndex) => (
            <div key={parentIndex} className="w-full">
                <MenuItem data={item} />
                {!item.children || renderChildren(item, parentIndex)}
            </div>
        ));
    };
    const location = useLocation();
    const renderChildren = (item) => {
        return item.children.data.map((child) => (
            <Link
            to={item.path + child.path}
                className="flex items-center self-stretch py-[1em] pl-[3.75em] pr-[0.5em] w-full justify-between"
                key={child.id}
                
            >
                <span className={'text-left text-base not-italic font-semibold leading-6 ' + ( location.pathname.startsWith(item.path + child.path) ? ' text-white' : ' text-[#AFB5BB]')}>
                    {child.titles}
                </span>
                <span className="flex w-[1em] h-[1em] p-[0.75em] justify-center items-center rounded-[5em] bg-[#DC3545]">
                    {child.numberNoti}
                </span>
            </Link>
        ));
    };

    return (
        <div className={`fixed z-50 inline-flex flex-col items-start flex-shrink-0 z-1 h-full ${className} `} {...prop}>
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
};

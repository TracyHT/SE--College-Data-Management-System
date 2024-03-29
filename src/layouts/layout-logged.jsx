import PropTypes from 'prop-types';
import {Topbar} from "../components/topbar"
import {Sidebar} from "../components/sidebar"

export default function LayoutLogged ({ children ,menuData, label }){
    return (
    <div className="mx-auto bg-[#F1F5F9]" >
            <Topbar label={label}></Topbar>
            <Sidebar menuData={menuData}></Sidebar>
            <div className={""}>
                <div className={"inline-flex flex-col items-start mt-[150px] ml-[330px] w-full"}>
                    {children}
                </div>
            </div>
    </div>)
}
LayoutLogged.propTypes = {
    children: PropTypes.node.isRequired, 
    menuData: PropTypes.array.isRequired,
    label :PropTypes.string.isRequired,
};
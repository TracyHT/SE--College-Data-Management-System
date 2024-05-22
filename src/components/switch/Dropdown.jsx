import  { useState } from 'react'
import images from '../../assets';
export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col justify-center text-left">
            <div>
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-between w-[250px] rounded-md border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50">
                    English
                <img src = {images.down} className = "flex w-5 h-5 justify"></img>
                </button>
            </div>

            {isOpen && (
                <div className="flex origin-top-right absolute mt-[117px] w-[249px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">English</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Vietnamese</a>
                    </div>
                </div>
            )}
        </div>
    )
}

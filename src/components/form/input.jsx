import { PropTypes } from 'prop-types';
export default function Input({ className ,label,  ...prop}){
    return <>
        {label && <label className='text-lg font-semibold dark:text-[#f8f9fa]  text-gray-800' htmlFor="user-name">{label}</label>}  
        <input className={`form-input dark:bg-[#6c757d] dark:text-[#f8f9fa] dark:outline-white ${className} mt-0`} {...prop} />
    </>;
}
Input.propTypes = {
    className : PropTypes.string,
    label : PropTypes.string,
}
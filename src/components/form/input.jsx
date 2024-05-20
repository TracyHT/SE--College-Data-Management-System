import { PropTypes } from 'prop-types';
export default function Input({ className ,label,  ...prop}){
    return <>
        {label && <label className='text-lg font-semibold  text-gray-800' htmlFor="user-name">{label}</label>}  
        <input className={`form-input ${className} mt-0`} {...prop} />
    </>;
}
Input.propTypes = {
    className : PropTypes.string,
    label : PropTypes.string,
}
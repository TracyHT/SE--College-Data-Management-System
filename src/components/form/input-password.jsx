import Input from "./input";
import { useState } from 'react';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { PropTypes } from 'prop-types';

export default function InputPassword ({className, label , id, ...prop }){
  const [isShowPassword, handleIsShowPassword] = useState(false);
  const handleClickShowPassword = function (){
    handleIsShowPassword(!isShowPassword)
  }
    return <>
         <label className='text-lg font-semibold  text-gray-800 ' htmlFor={id}>{label}</label>
         <div className='relative' >
         <Input className={`py-4  pr-5 ${className}`} type={isShowPassword ? 'text' : 'password'}  id={id} {...prop} />
            {isShowPassword ? 
              <Eye className='absolute top-1/2 translate-y-[-50%] right-5 text-[28px] text-[#6C757D] cursor-pointer' onClick={handleClickShowPassword}/>
              : <EyeSlash className='absolute top-1/2 translate-y-[-50%] right-5 text-[28px] text-[#6C757D] cursor-pointer' onClick={handleClickShowPassword}/>
            }
        </div>
    </>
} 

InputPassword.propTypes = {
    className : PropTypes.string,
    id : PropTypes.string,
    label : PropTypes.string,
}
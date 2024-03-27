import {  QuestionCircle } from 'react-bootstrap-icons';
import LayoutEmpty from './../../layouts/layout-empty';
import {Input} from '../../components/form';
import InputPassword from '../../components/form/input-password';
import BannerText from './../../components/banner-text';

import logo from "../../assets/logo.png"
const Login = function (){
  
    return <LayoutEmpty>
     <div className='flex items-center justify-center max-h-fit max-w-[1440px] mx-auto pt-7'>
       <div className='grid grid-cols-2 bg-white border shadow rounded-md gap-5 overflow-hidden min-h-[95vh] p-3 mx-auto h-auto'>
         <div className='relative'> 
           <span className='absolute z-40 left-1 top-2 max-w-[99px]'>
           <img src={logo} alt="Logo" />
           </span>
           <div className='absolute inset-0 bg-no-repeat bg-[length:110%_100%] bg-[url("./banner_login.jpg")] max-h-full'></div>
          <BannerText className={'absolute bottom-14 left-1/2 -translate-x-1/2'}/>
         </div>
         <div className='px-[50px] pt-4 flex flex-col h-[500px]'>
         <a className='text-l flex items-center justify-center  font-bold text-secondary decoration-1 underline underline-offset-4 ml-auto   mb-[10px]'>
          <QuestionCircle className='text-2xl pr-1 pt-1'/>
           Help
           </a>
           <form action='' method='POST'>
               <div>
                  <h4 className='text-xl text-primary font-bold leading-9'>Welcome to</h4>
                  <h3 className='text-[35px] text-[#3D8BFD] font-bold text-opacity-75 leading-[54px]'>International University</h3>
                  <p className='text-base font-medium text-[#080D25]'>Enter your information to sign in.</p>
               </div>
               <div className='mt-4'>
                  <Input  id="user-name" placeholder='Enter your username' label="Username" />
               </div>
               <div className='mt-4'>
                 <InputPassword placeholder='Enter your username' label="Password" id="password"/>
               </div>
               <div className='flex mt-5'>
                 <input id='remember-password' type='checkbox'  className='border-[#343A40] border w-6' />
                 <label className='text-base text-[#6C757D] font-medium ml-2' htmlFor='remember-password' >Remember me</label>
               </div>
               <button className='w-full py-4 px-6 font-bold bg-[#3D8BFD] text-white mt-10 rounded-md hover:opacity-95'>Sign in</button>
               <a href='' className='font-bold text-base text-[#022081] text-center block mt-6 decoration-1 underline underline-offset-4'>Forgot your password?</a>
           </form>
         </div>
       </div>
     </div>
    </LayoutEmpty>
}

export default Login;
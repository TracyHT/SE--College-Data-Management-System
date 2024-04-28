import {  QuestionCircle } from 'react-bootstrap-icons';
import LayoutEmpty from './../../layouts/layout-empty';
import {Input} from '../../components/form';
import InputPassword from '../../components/form/input-password';
import BannerText from './../../components/banner-text';
const Login = function (){
    return <LayoutEmpty>
     <div className='max-w-[1440px] mx-auto'>
       <div className='grid grid-cols-2 bg-white border shadow rounded-md gap-5 overflow-hidden  min-h-[100vh]'>
         <div className='relative'> 
           <span className='text-[52px] font-extrabold absolute top-10 z-40 left-10 text-white'>LOGO</span>
           <div className='absolute inset-0 bg-no-repeat bg-cover bg-[url("./banner_login.jpg")]'></div>
          <BannerText className={'absolute bottom-14 left-1/2 -translate-x-1/2'}/>
         </div>
         <div className='px-[75px] pt-12 mb-36 flex flex-col'>
         <a className='text-xl flex items-center justify-center  font-bold text-secondary decoration-1 underline underline-offset-4 ml-auto   mb-[84px]'>
          <QuestionCircle className='text-2xl mr-1 mt-1'/>
           Help
           </a>
           <form action='' method='POST'>
               <div>
                  <h4 className='text-2xl text-primary font-bold leading-9'>Welcome to</h4>
                  <h3 className='text-[40px] text-[#3D8BFD] font-bold text-opacity-75 leading-[54px]'>International University</h3>
                  <p className='text-lg font-medium text-[#080D25]'>Enter your information to sign in.</p>
               </div>
               <div className='mt-4'>
                  <Input  id="user-name" placeholder='Enter your username' label="Username" />
               </div>
               <div className='mt-4'>
                 <InputPassword placeholder='Enter your username' label="password" id="password"/>
               </div>
               <div className='flex mt-5'>
                 <input id='remember-password' type='checkbox'  className='border-[#343A40] border w-6' />
                 <label className='text-lg text-[#6C757D] font-medium ml-2' htmlFor='remember-password' >Remember me</label>
               </div>
               <button className='w-full py-4 px-6 font-bold bg-[#3D8BFD] text-white mt-10 rounded-md hover:opacity-95'>Sign in</button>
               <a href='' className='font-bold text-lg text-[#022081] text-center block mt-6 decoration-1 underline underline-offset-4'>Forgot your password?</a>
           </form>
         </div>
       </div>
     </div>
    </LayoutEmpty>
}

export default Login;
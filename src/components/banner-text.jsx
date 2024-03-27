import { PropTypes } from 'prop-types';

export default function BannerText({className}){
    return  <div className={` bg-[#ffffff1f] min-w-[max-content] py-3 px-4 rounded-3xl ${className}`}>
    <h4 className='text-center text-[25px] font-bold text-[#F8F9FA] leading-snug'>Unlocking the Potential</h4>
    <p className='font-normal text-[15px] text-[#F8F9FA] leading-7'>Empowering colleges with efficient data management.</p>
  </div>
}

BannerText.propTypes = {
  className : PropTypes.string,
}
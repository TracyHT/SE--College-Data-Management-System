import propTypes from 'prop-types';

 function CardNotificationSM({className , number}){
    return  <div className={`flex justify-between items-center px-6 py-4 rounded-2xl ${className}`}>
    <p className="max-w-44 text-[20px] font-normal ">Computer Architecture _S2_2023-24_G01</p>
    {number &&  <span className="h-[24px] rounded-full relative bg-[#DC3545] w-[24px]">
        <span className="absolute top-0 left-1.5 text-white ">2</span>
    </span>}
</div>
}
CardNotificationSM.propTypes = {
    className : propTypes.string,
    number : propTypes.number,
}
export default CardNotificationSM;
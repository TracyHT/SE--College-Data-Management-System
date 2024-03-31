import  PropTypes  from 'prop-types';

export default function MenuItem({data}){


    return (
        <button className={`flex justify-between items-center self-stretch px-[20px] py-[10px] w-full  ${!data.activePage || "rounded-[40px] bg-[#CFE2FF]"}` } >   
            <div className="flex items-center" >
                <img  className="flex w-9 h-8 justify-center items-center px-[1px] py-[4px] mr-[5px]" src={data.icon} alt="icon"></img>
                <span className={`text-base not-italic font-semibold ${data.activePage? "leading-6 text-[#080D25]" : " text-[#F8F9FA]"}` }>
                {data.titles}
                </span>
            </div>
            <span className="flex w-5 h-5 p-2 justify-center items-center rounded-[100px] bg-[#DC3545] ">
                    {data.numberNoti}
            </span>
                
        </button>
    )
}

MenuItem.propTypes = {
    data: PropTypes.shape({
        icon: PropTypes.elementType.isRequired,
        titles: PropTypes.string.isRequired,
        activePage: PropTypes.bool,
        numberNoti:PropTypes.number,
        
    }).isRequired,
};

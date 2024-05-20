import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function MenuItem({ data }) {
  const location = useLocation();
  return (
    <Link to={data?.path} className={`flex justify-between items-center self-stretch px-[0.5em] py-[0.5em] w-full ${!location.pathname.startsWith(data?.path) || "rounded-[8em] bg-[#CFE2FF]"}`}>   
      <div className="flex items-center">
        <img className="flex w-[3em] h-[2.5em] justify-center items-center px-[0.5em] py-[0.5em] " src={data.icon} alt="icon"></img>
        <span className={`text-[1em] not-italic font-semibold ${location.pathname.startsWith(data?.path) ? "leading-[2em] text-[#080D25]" : " text-[#F8F9FA]"}`}>
          {data?.titles}
        </span>

      </div>

      <span className={data?.numberNoti > 0 ? "flex  w-[1em] h-[1em] p-[0.75em] justify-center items-center rounded-[5em] bg-[#DC3545]" : ""}>
        {data?.numberNoti > 0 ? data?.numberNoti : ""}
      </span>

    </Link>
  );
}

MenuItem.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    titles: PropTypes.string.isRequired,
    activePage: PropTypes.bool,
    numberNoti: PropTypes.number,
  }).isRequired,
};

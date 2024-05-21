import { ChartTotalCredits } from "../../components/chartJS";
import images from "../../assets";
import { useNavigate } from "react-router-dom";

const TotalCredit = () => {
  const navigate = useNavigate();
  const handleOnClickBackNoticeBoard = () => {
    navigate("/overview");
  };
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-start">
        <div className="flex flex-col justify-center items-start p-[0.5em] gap-[1em]">
          <div
            className="flex items-center gap-[1em] cursor-pointer"
            onClick={handleOnClickBackNoticeBoard}
          >
            <img src={images.navLeftImage} className={"w-8 h-8"}></img>
            <div className="text-xl not-italic font-semibold leading-7 text-[#0A150F]">
              Back
            </div>
          </div>
        </div>
        <div className="flex items-start self-stretch px-[3em] gap-[2em]">
          <div className="text-3xl not-italic font-bold leading-10 text-[#080D25]">
            Total Credits
          </div>
        </div>
      </div>
      <div className="lg:flex justify-start p-[2rem] gap-5 mt-10 bg-white rounded-lg w-full">
        <div className="flex justify-center items-center">
          <ChartTotalCredits />
        </div>
        <div className="lg:flex mt-3 lg:mt-0 justify-center items-center">
          <div className="grid grid-cols-2 gap-y-3 gap-x-7 max-w-96">
            <div className="flex justify-between items-center">
              <span className="flex justify-center items-center">
                <span className="bg-[#9747FF] w-4 h-4 inline-block me-2 rounded-full"></span>
                A+
              </span>
              <p className="text-sm font-bold">33%</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex justify-center items-center">
                <span className="bg-[#3D8BFD] w-4 h-4 inline-block me-2 rounded-full"></span>
                A
              </span>
              <p className="text-sm font-bold">33%</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex justify-center items-center">
                <span className="bg-[#18D1F9] w-4 h-4 inline-block me-2 rounded-full"></span>
                B
              </span>
              <p className="text-sm font-bold">33%</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex justify-center items-center">
                <span className="bg-[#022081] w-4 h-4 inline-block me-2 rounded-full"></span>
                B+
              </span>
              <p className="text-sm font-bold">33%</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex justify-center items-center">
                <span className="bg-[#DEE2E6] w-4 h-4 inline-block me-2 rounded-full"></span>
                Unfinished
              </span>
              <p className="text-sm font-bold">33%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCredit;

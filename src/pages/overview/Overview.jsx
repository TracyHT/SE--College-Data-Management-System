import { Link } from "react-router-dom";
import { ChartLineGPACGPA, ChartTotalCredits } from "../../components/chartJS";
import { SlArrowRight } from "react-icons/sl";
export default function Overview() {
  return (
    <>
      <div className="card flex w-full mx-2">
        <div className="flex-1 lg:max-w-[370px] ">
          <div className="card rounded-md py-10 px-6 lg:scale-105  ms:scale-0 bg-gradient-to-t from-[#052C65] to-[#3D8BFD] ">
            <div className="flex items-center justify-start">
              <div className="rounded-2xl  border  border-white overflow-hidden w-[72px] h-[72px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://tse1.mm.bing.net/th?id=OIP.4XB8NF1awQyApnQDDmBmQwHaEo&pid=Api&P=0&h=180"
                />
              </div>
              <div className="py-4 px-8 flex-1 text-white ">
                <h4 className="text-xl  font-semibold">Thomas Anree</h4>
                <p className="text-base ">ITITIU00000</p>
              </div>
            </div>
            <div className="mt-7 hidden sm:block">
              <h4 className="sub-title text-white">DEPARTMENT</h4>
              <p className="text-white text-lg font-bold">
                Computer Science & <br /> Engineering
              </p>
            </div>
            <button className="btn mt-4 text-white bg-primary bg-opacity-40 w-full px-4 py-[10px] rounded-lg text-base">
              Change Avatar
            </button>
          </div>
        </div>
        <div className="px-8 rounded-r-lg bg-white flex-1 hidden lg:block mx-2">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-[46px] gap-y-2 pt-9 pb-5 max-w-[700px]">
            <div className="columns-2  text-sm ">
              <span className="font-bold">Phone number:</span>
              <p className="font-normal">(+84) 909 909 009</p>
            </div>
            <div className="columns-2  text-sm">
              <span className="font-bold">Birthday::</span>
              <p className="font-normal">28/02/2003</p>
            </div>
            <div className="columns-2  text-sm">
              <span className="font-bold">Address:</span>
              <p className="font-normal">Thu Duc, Ho Chi Minh City</p>
            </div>
            <div className="columns-2  text-sm">
              <span className="font-bold">Email:</span>
              <p className="font-normal whitespace-pre-line">ITITIU00000@student.hcmiu.edu.vn</p>
            </div>
          </div>
          <div className="border-t py-5">
            <div className="flex gap-2">
              <div className="card bg-[#FCECBC] p-6 flex-1">
                <p className="text-[#052C65] text-sm font-semibold">
                  {" "}
                  GPA <br />
                  (Scale 4.0)
                </p>
                <p className="text-[#052C65] text-[40px] font-bold mt-4">
                  2.80
                </p>
              </div>
              <div className="card bg-[#E0FDE1] p-6 flex-1">
                <p className="text-[#052C65] text-sm font-semibold">
                  {" "}
                  CGPA <br />
                  (Scale 4.0)
                </p>
                <p className="text-[#28A745] text-[40px] font-bold mt-4">
                  3.03
                </p>
              </div>
              <div className="card bg-[#FCECBC] p-6 flex-1">
                <p className="text-[#052C65] text-sm font-semibold">
                  {" "}
                  Behavior
                  <br /> Score{" "}
                </p>
                <p className="text-[#28A745] text-[40px] font-bold mt-4">80</p>
              </div>
              <div className="card bg-[#E2E8F0] p-6 flex-1">
                <p className="text-[#052C65] text-sm font-semibold">
                  {" "}
                  Total
                  <br />
                  Credits{" "}
                </p>
                <p className="text-[#080D25] text-[40px] font-bold mt-4">
                  100<span className="font-normal">/150</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-11 w-full gap-6">
        <div className="flex-initial w-full lg:w-2/3 bg-white rounded-md">
          <div className="card p-1 sm:p-8">
            <div className="flex">
              <h3 className="text-[#052C65] text-lg font-bold"> GPA & CGPA </h3>
            </div>
            <div className="">
              <ChartLineGPACGPA />
            </div>
          </div>
        </div>
        <div className="flex-initial w-full lg:w-1/3 bg-white rounded-md">
          <div className="card  p-2 sm:p-8">
            <div className="flex justify-between">
              <h3 className="text-[#052C65] text-lg font-bold">
                Total Credits
              </h3>
              <Link to="/overview/total-credit" className="flex justify-center items-center px-2">
                <SlArrowRight />
              </Link>
            </div>
            <div className="">
              <ChartTotalCredits />
            </div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-7 max-w-96 lg:m-auto mt-4">
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
    </>
  );
}

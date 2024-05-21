import PropTypes from "prop-types";

export default function Time() {
  return (
    <>
      <div className="flex flex-col -my-5">
        <div className="w-[1100px] h-[100px] -ml-4 flex-col gap-5 inline-flex">
          <div className="text-blue-900 text-[28px]  font-bold font-['Montserrat']">
            Semester 2 - 2023
          </div>
          <div className=" gap-24 inline-flex">
            <div className=" gap-8 flex">
              <div className="h-10 px-6 py-2.5 bg-gray-200 rounded-md border border-gray-400 justify-center items-center gap-2 flex">
                <div className="text-gray-500 text-base font-bold font-['Montserrat'] leading-tight">
                  Today
                </div>
              </div>
              <div className="justify-start items-start gap-4 flex">
                <div className="w-10 h-10 relative items-center inline-flex bg-gray-200 rounded-md border border-gray-400 ">
                  <svg
                    className="w-6 h-6  text-gray-600"
                    aria-hidden="true"
                    fill="none"
                    viewBox="-4 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                    />
                  </svg>
                </div>
                <div className="w-10 h-10 relative items-center inline-flex rotate-180 bg-gray-200 rounded-md border border-gray-400">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    aria-hidden="true"
                    fill="none"
                    viewBox="-4 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-8 flex ml-[389px]">
              <div className="w-[500px] h-10  inline-flex ">
                <div className=" px-5 py-3 bg-white rounded-md border border-gray-400 items-center inline-flex">
                  <div className="  h-[22px]  justify-between inline-flex ">
                    <div className="text-zinc-600 text-base font-normal  font-['Montserrat'] flex ">
                      Week 37 [13/05/2024 - 19/05/2024]
                    </div>
                    <svg
                      className="h-7 w-7 text-gray-400  ml-[164px]"
                      viewBox="-4 1 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="h-10 px-8 py-2.5 bg-blue-500 rounded-md justify-center items-center gap-2 flex">
                <div className="text-white text-base font-bold font-['Montserrat'] leading-tight">
                  Export
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:-mx-6 lg:-mx-12 my-3">
          <div className="py-6 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border  border-gray-400">
              <table className="min-w-full text-sm font-light text-surface dark:text-black">
                <thead className="bg-gray-100 border-b  w-[161.49px] h-8 pt-0.5  font-medium border-gray-400 ">
                  <tr className="text-blue-950 text-sm font-semibold font-['Montserrat'] ">
                    <th
                      scope="col"
                      className="border-e   w-4  border-gray-400 bg-white "
                    ></th>
                    <th
                      scope="col"
                      className="border-e  w-[75px] h-[43.92px] bg-white text-center text-blue-950 text-sm font-medium font-['Montserrat'] leading-none border-gray-400 "
                    ></th>
                    <th
                      scope="col"
                      className="border-e   w-52 border-gray-400 "
                    >
                      Monday
                    </th>
                    <th scope="col" className="border-e  w-52  border-gray-400">
                      Tuesday
                    </th>
                    <th
                      scope="row"
                      className="border-e  w-52 bg-gray-300 border-gray-400"
                    >
                      Wednesday
                    </th>
                    <th scope="col" className="border-e  w-52  border-gray-400">
                      Thursday
                    </th>
                    <th scope="col" className="border-e  w-52  border-gray-400">
                      Friday
                    </th>
                    <th scope="col" className=" w-52  border-gray-400 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody className=" text-blue-950 text-sm font-medium font-['Montserrat']">
                  <tr className="border-b border-gray-400">
                    <td className=" border-e text-center w-10  py-2 font-medium border-gray-400">
                      1
                    </td>
                    <td className=" border-e text-center  py-3 border-gray-400">
                      8:00 AM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td
                      rowSpan={3}
                      className=" border-e  px-2 py-2 bg-white border-gray-400"
                    >
                      <div className="w-[191px] h-[118px] p-2 bg-blue-100 rounded border border-blue-500 flex-col ">
                        <div className="self-stretch h-[86px] flex-col justify-start items-start gap-1.5 flex">
                          <div className="self-stretch text-blue-950 text-lg font-bold font-['Montserrat'] leading-tight">
                            Computer Architecture
                          </div>
                          <div className="self-stretch h-9 flex-col justify-start items-start flex">
                            <div className="self-stretch text-blue-950 text-[10px] font-medium font-['Montserrat'] leading-[14px]">
                              Lecturer:
                            </div>
                            <div className="self-stretch text-blue-950 text-[10px] font-medium font-['Montserrat'] leading-[14px]">
                              Quoc Cuong Pham
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch text-right">
                          <span className="text-gray-500 text-xs font-semibold font-['Montserrat'] leading-none">
                            Room:{" "}
                          </span>
                          <span className="text-blue-900 text-xs font-semibold font-['Montserrat'] leading-none">
                            A1.109
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>

                    <td
                      rowSpan={3}
                      className=" border-e  px-2 py-2 bg-white border-gray-400"
                    >
                      <div className="w-[191px] h-[118px] p-2 bg-blue-100 rounded border border-blue-500 flex-col ">
                        <div className="self-stretch h-[86px] flex-col justify-start items-start gap-1.5 flex">
                          <div className="self-stretch text-blue-950 text-lg font-bold font-['Montserrat'] leading-tight">
                            Software Engineer
                          </div>
                          <div className="self-stretch h-9 flex-col justify-start items-start flex">
                            <div className="self-stretch text-blue-950 text-[10px] font-medium font-['Montserrat'] leading-[14px]">
                              Lecturer:
                            </div>
                            <div className="self-stretch text-blue-950 text-[10px] font-medium font-['Montserrat'] leading-[14px]">
                              N.T.T.Loan
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch text-right">
                          <span className="text-gray-500 text-xs font-semibold font-['Montserrat'] leading-none">
                            Room:{" "}
                          </span>
                          <span className="text-blue-900 text-xs font-semibold font-['Montserrat'] leading-none">
                            A1.109
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" bg-white "></td>
                  </tr>

                  <tr className="border-b  border-gray-400">
                    <td className=" border-e text-center  font-medium border-gray-400">
                      2
                    </td>
                    <td className=" border-e text-center py-3  border-gray-400">
                      8:50 AM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>

                    <td className=" border-e  px-6 py-4 bg-gray-300  border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>

                    <td className=" bg-white"></td>
                  </tr>
                  <tr className="border-b  border-gray-400">
                    <td className=" border-e text-center  font-medium border-gray-400">
                      3
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      9:40 AM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>

                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>

                    <td className=" bg-white "></td>
                  </tr>
                  <tr className="border-b  border-gray-400">
                    <td className=" border-e  text-center font-medium border-gray-400">
                      4
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      10:35 AM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" bg-white"></td>
                  </tr>
                  <tr className="border-b  border-gray-400">
                    <td className=" border-e text-center  font-medium border-gray-400">
                      5
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      11:25 AM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" bg-white"></td>
                  </tr>
                  <tr className="border-b  border-gray-400">
                    <td className=" border-e  text-center font-medium border-gray-400">
                      6
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      12:15 AM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" bg-white"></td>
                  </tr>
                  <tr className="border-b  border-gray-400">
                    <td className=" border-e  text-center font-medium border-gray-400">
                      7
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      13:25 PM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td
                      rowSpan={3}
                      className=" border-e  px-2 py-2 bg-white border-gray-400"
                    >
                      <div className="w-[191px] h-[118px] p-2 bg-amber-100 rounded border border-blue-500 flex-col ">
                        <div className="self-stretch h-[86px] flex-col justify-start items-start gap-1.5 flex">
                          <div className="self-stretch text-blue-950 text-lg font-bold font-['Montserrat'] leading-tight">
                            Software Engineer LAB
                          </div>
                          <div className="self-stretch h-9 flex-col justify-start items-start flex">
                            <div className="self-stretch text-blue-950 text-[10px] font-medium font-['Montserrat'] leading-[14px]">
                              Lecturer:
                            </div>
                            <div className="self-stretch text-blue-950 text-[10px] font-medium font-['Montserrat'] leading-[14px]">
                              N.Q.Phu
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch text-right">
                          <span className="text-gray-500 text-xs font-semibold font-['Montserrat'] leading-none">
                            Room:{" "}
                          </span>
                          <span className="text-blue-900 text-xs font-semibold font-['Montserrat'] leading-none">
                            ONLINE
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" bg-white"></td>
                  </tr>
                  <tr className="border-b  border-gray-400">
                    <td className=" border-e text-center  font-medium border-gray-400">
                      8
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      14:05 PM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>

                    <td className=" bg-white"></td>
                  </tr>
                  <tr className="border-b  border-gray-400">
                    <td className=" border-e text-center  font-medium border-gray-400">
                      9
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      15:50 PM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>

                    <td className=" bg-white"></td>
                  </tr>
                  <tr className="border-b  border-gray-400">
                    <td className=" border-e text-center  font-medium border-gray-400">
                      10
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      16:40 PM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" bg-white"></td>
                  </tr>
                  <tr className="border-b  border-gray-400">
                    <td className=" border-e text-center font-medium border-gray-400">
                      11
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      17:30 PM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" bg-white"></td>
                  </tr>

                  <tr className="border-b  dark :border-black">
                    <td className=" border-e text-center  font-medium border-gray-400">
                      12
                    </td>
                    <td className=" border-e text-center py-3 border-gray-400">
                      18:20 PM
                    </td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-gray-300 border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" border-e  px-6 py-4 bg-white border-gray-400"></td>
                    <td className=" bg-white"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Time.propTypes = {
  children: PropTypes.node,
};

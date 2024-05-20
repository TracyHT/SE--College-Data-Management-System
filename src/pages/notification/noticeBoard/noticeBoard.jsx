import NoticeBoardItem from "./noticeBoardItem";
import images from "../../../assets";

export default function NoticeBoard() {
  return (
    <div className="w-full gap-[2em] inline-flex flex-col items-start">
      <div className="flex justify-between items-center self-stretch ">
        <span className="flex text-3xl not-italic font-bold leading-10 text-[#080D25]">
          Notice board
        </span>

        <div className="flex items-center gap-[2em]">
          <div>
            <span className="text-sm not-italic font-bold leading-5 text-[#DC3545]">
              2 unread notifications
            </span>
          </div>
          <div className="flex items-center gap-[1em] cursor-pointer">
            <img src={images.check2allImage} alt="mark"></img>
            <span className="text-sm not-italic font-semibold leading-5 text-[#6C757D] ">
              Mark all as read
            </span>
          </div>
        </div>
      </div>

      <div className="flex p-[3em] flex-col items-end self-stretch rounded-[1em] bg-[#FFF] gap-[1em] w-[70vw]">
        <NoticeBoardItem
          title={
            "Mid-term exam regulations announcement (2nd semester 2023-2024)"
          }
          dayPost={"Tuesday, March 19, 2024"}
          readed={true}
        ></NoticeBoardItem>
        <NoticeBoardItem
          title={
            "Announcement of classroom changes for classes from March 23 - April 7, 2024"
          }
          dayPost={"Monday, March 25, 2024"}
        ></NoticeBoardItem>
        <NoticeBoardItem
          title={"LIST OF GRADUATE STUDENTS FOR SCHOOL YEAR 2023 - 2024"}
          dayPost={"Tuesday, March 19, 2024"}
        ></NoticeBoardItem>
      </div>
    </div>
  );
}

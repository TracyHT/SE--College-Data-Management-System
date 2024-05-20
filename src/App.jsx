import { Outlet } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/sidebar";
import { Topbar } from "./components/topbar";
import images from "./assets";

function App() {
  const MENU_ITEM = [
    {
      // index: 0,
      icon: images.bookImage,
      titles: "Overview",
      numberNoti: 2,
      path: "/overview",
    },
    {
      // index: 1,
      icon: images.bellImage,
      titles: "Notification",
      numberNoti: 2,
      path: "/noti",
      children: {
        data: [
          {
            id: 1,
            titles: "Notice Board",
            path: "/notice-board",
            numberNoti: 1,
            activePage: false,
          },
          {
            id: 2,
            titles: "Course Announcement",
            path: "/course-announcement",
            numberNoti: 1,
            activePage: true,
          },
        ],
      },
    },
    {
      // index: 2,
      icon: images.graduateImage,
      titles: "Gradebook",
      numberNoti: 2,
      path: "/gradebook",
    },
    {
      // index: 3,
      icon: images.calendarImage,
      titles: "Timetable",
      numberNoti: 2,
      path: "/ttb",
    },
    {
      // index: 4,
      icon: images.settingImage,
      titles: "Settings",
      path: "/setting",
      numberNoti: 2,
    },
  ];

  return (
    <div className={`bg-[#F1F5F9] w-full h-full min-h-[100vh]`}>
      <Topbar menuData={MENU_ITEM} />
      <Sidebar menuData={MENU_ITEM} />
      <div className={"w-full h-full pb-[3rem]"}>
        <div
          className={
            "inline-flex flex-col items-start mt-[10rem] pl-[26em] w-max h-full "
          }
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

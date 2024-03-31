import markAll from "../../assets/check2-all.png"

export default function NoticeBoard(){
    return (
<div className="w-full gap-[32px]">

<div className="flex justify-between items-center self-stretch ">
    <span className="flex text-3xl not-italic font-bold leading-10 text-[#080D25]">Notice board</span>
    <div className="flex items-center gap-[8px] mr-[450px]">
        <img src={markAll} alt="mark"></img>
        <span className="text-sm not-italic font-semibold leading-5 text-[#6C757D] ">Mark all as read</span>

    </div>
</div>

<div className="flex p-8 flex-col items-end self-stretch h-[390px] bg-[white] rounded-[20px] w-[1200px]">
        <span className="text-sm not-italic font-bold leading-5 text-[#DC3545]">1 unread notifications</span>
</div>
</div>
    )
}
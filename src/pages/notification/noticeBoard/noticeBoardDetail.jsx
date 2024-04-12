import images from '../../../assets';
// import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


export default function NoticeBoardDetail() {
    const navigate = useNavigate();
    const handleOnClickBackNoticeBoard = () => {
        navigate("/noti/notice-board")
    }
    return (
        <div className="w-full inline-flex flex-col items-start gap-[2em]">

        <div className="flex flex-col justify-center items-start">
            <div className="flex flex-col justify-center items-start p-[0.5em] gap-[1em]">
                <div className="flex items-center gap-[1em] cursor-pointer" onClick={handleOnClickBackNoticeBoard}>
                    <img src={images.navLeftImage} className={"w-8 h-8"}></img>
                    <div className="text-xl not-italic font-semibold leading-7 text-[#0A150F]">Back</div>
                </div>
            </div>
            <div className="flex justify-center items-start self-stretch px-[3em] gap-[2em]">
                <div className="text-3xl not-italic font-bold leading-10 text-[#080D25]">
                Mid-term exam regulations announcement (2nd semester 2023-2024)
                </div>
            </div>
        </div>
        <div className="flex p-8 items-start self-stretch gap-[5em] rounded-[1em] bg-[#FFF] w-[75em]">
            <p className=" text-base not-italic font-medium leading-6  whitespace-pre-line text-[#343A40]">
                {`Trường Đại học Quốc tế thông báo đến các Khoa, Bộ môn và sinh viên về một số quy định trong kỳ kiểm tra giữa kỳ học kỳ II năm học 2023-2024 như sau:

1.  Thời gian tổ chức thi
Kiểm tra giữa kỳ học kỳ II: Từ 15/4/2024 đến 27/4/2024.
Thi Anh văn tăng cường khóa 3: Từ 15/4/2024 đến 20/4/2024.

2.  Đối với sinh viên nợ học phí và không hoàn thành học phí đúng hạn
Sinh viên nợ học phí từ 1.000.000 đ (Bằng chữ: Một triệu đồng) trở lên sẽ không xem được lịch thi.
Sinh viên đóng học phí trễ sau ngày 08/4/2024 phải xuất trình biên lai đóng học phí hoặc xác nhận đã đóng học phí từ hệ thống Edusoftweb khi vào phòng thi.
Trường hợp sinh viên không hoàn thành học phí do gặp khó khăn đột xuất, sinh viên phải làm đơn xin gia hạn nộp học phí tại phòng Kế hoạch Tài chính (Phòng O2.701) trình bày rõ lý do và minh chứng để được xem xét vào phòng thi.
Sinh viên không thanh toán học phí đúng hạn sẽ không được dự thi và không được đăng ký môn học cho học kỳ kế tiếp.

3.  Trách nhiệm của sinh viên dự thi
Sinh viên phải có mặt tại địa điểm thi đúng thời gian quy định đã được thông báo trong lịch thi. Sau khi bóc đề thi 15 phút, sinh viên đến trễ sẽ không được dự thi.
Xuất trình thẻ sinh viên hoặc các giấy tờ khác có dán hình để xác định tư cách tham gia thi. Chỉ được mang vào phòng thi các vật dụng, những loại tài liệu cho phép sử dụng đã được ghi chú trên túi đựng đề thi và đề thi.
Sinh viên thực hiện các quy định khác theo Điều 15, Quyết định số 410/QĐ-ĐHQT ngày 22 tháng 7 năm 2022 của Hiệu trưởng trường Đại học Quốc tế về việc ban hành Quy định tổ chức thi học kỳ trình độ đại học tại trường Đại học Quốc tế thuộc Đại học Quốc gia Thành phố Hồ Chí Minh.
Nhà trường đề nghị các Khoa và Bộ môn thông báo để các sinh viên và cán bộ coi thi biết và thực hiện nghiêm túc các quy định để tránh ảnh hưởng đến kỳ thi.
Trân trọng./.   `}
            </p>
        </div>
        
            
    </div>

    )
}


import Input from '../../components/form/input';

export default function ContactInfo()
{
    return (
        <div className = "h-96 space-y-0 w-full flex-col py-[20px] px-[24px] dark:bg-[#6c757d] bg-white  rounded-[20px] gap-[20px]">
                        <h1 className = "text-2xl font-bold dark:text-[#9ec5fe] text-sky-800">Contact Information</h1>
                        <br></br>
                        <div className = "">
                            <Input className="" placeholder = "12 ABCD Street, Ward 18, District 3, Ho Chi Minh City" label="Address" />
                        </div>
                        <br></br>
                        <div className = "">
                            <Input className="" placeholder = "0909 090 090" label="Phone Number" />
                        </div>
                        <div className= "flex justify-end">
                            
                            <button  className = "text-gray-500 w-[120px] space-y-0 mt-8 ml-4 btn h-9 border border-black dark:text-[#fff] dark:border-white dark:bg-[#6c757d] bg-white hover:bg-gray-500 hover:text-white">Cancel</button>
                            
                            <button  className = "text-gray-500 w-[120px] space-y-0 mt-8 ml-4 btn h-9  border border-black dark:text-[#fff] dark:border-white dark:bg-[#6c757d] hover:bg-gray-500 hover:text-white">Save</button>
                        </div>
                    </div>
    )
}
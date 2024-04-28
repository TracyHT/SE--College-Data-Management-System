import { PropTypes } from 'prop-types';
export default function LayoutDefaults({children}){
   return <div className="grid grid-cols-12 gap-5 w-full">
        <div className="col-span-2 hidden lg:block ">
            v1
        </div>
        <div className="col-span-12 lg:col-span-10">
            <div className="py-4">
                 header
            </div>
            <div className='py-7 container px-3'>
                {children}
            </div>
        </div>
    </div>
}
LayoutDefaults.propTypes = {
    children: PropTypes.node.isRequired // Ensure children prop is provided and of type node
};
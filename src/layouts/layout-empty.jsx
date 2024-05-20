import PropTypes from 'prop-types';
export default function LayoutEmpty ({ children  }){
    return (<div className="w-3/5 mx-auto ">
        {children}
    </div>)
}
LayoutEmpty.propTypes = {
    children: PropTypes.node.isRequired // Ensure children prop is provided and of type node
};
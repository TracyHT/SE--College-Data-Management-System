import LayoutLogged from '../../layouts/layout-logged';
import PropTypes from 'prop-types';


export default function Notification({children}) {

    return <LayoutLogged label={"Notification"} >
        {children}
    </LayoutLogged>
}

Notification.propTypes = {
    children: PropTypes.node,
}


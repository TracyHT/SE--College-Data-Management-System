import LayoutLogged from '../../layouts/layout-logged';
import PropTypes from 'prop-types';
import RouterNoti from './routerNoti';

export default function Notification({children}) {

    return <LayoutLogged label={"Notification"} >
        <RouterNoti />
        {children}
    </LayoutLogged>
}

Notification.propTypes = {
    children: PropTypes.node,
}


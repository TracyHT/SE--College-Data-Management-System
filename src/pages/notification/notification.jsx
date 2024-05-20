import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Notification({children}) {

    return <Outlet />
}

Notification.propTypes = {
    children: PropTypes.node,
}


import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function TopNavigation() {
    return <div className='ml-auto'>
        <Nav className='navbar-icons'>
            <Nav.Item>
                <Nav.Link as="button" title='Notfications' className='btn btn-link'>
                    <NotificationsIcon />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as="a">
                    <SettingsIcon />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as="a">
                    <LogoutIcon />
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </div>;
}

export default TopNavigation;
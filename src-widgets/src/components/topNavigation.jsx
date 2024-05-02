import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function TopNavigation(props) {
    const [showNotificationsModal, setShowNotificationsModal] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    return <div className='ml-auto'>
        <Nav className='navbar-icons'>
            <Nav.Item onClick={() => setShowNotificationsModal(!showNotificationsModal)}>
                <Nav.Link as="button" title='Notfications' className='btn btn-link'>
                    {props.hasNotifications && <Badge max={999} badgeContent={4} color="primary" overlap="circular">
                        <NotificationsIcon />
                    </Badge>}
                    {!props.hasNotifications && <NotificationsNoneIcon />}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as="a">
                    <SettingsIcon />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => props.socket.emit('logout')}>
                <Nav.Link as="a">
                    <LogoutIcon />
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <Modal show={showNotificationsModal} fullscreen={fullscreen} onHide={() => setShowNotificationsModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
        </Modal>
    </div>;
}

export default TopNavigation;

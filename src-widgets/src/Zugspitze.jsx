import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { VisRxWidget } from '@iobroker/vis-2-widgets-react-dev';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/zugspitze.css';

class Zugspitze extends (window.visRxWidget || VisRxWidget) {
    static getWidgetInfo() {
        return {
            id: 'tplZugspitzeMainWidget',
            visSet: 'vis-2-widgets-zugspitze',
            visSetLabel: 'vis_2_widgets_set_zugspitze',
            visWidgetLabel: 'vis_2_widgets_zugspitze_widget_main',
            visSetColor: 'red',
            visName: 'ZugspitzeMainWidget',
            visAttrs: [],
            visPrev: 'widgets/zugspitze-widgets-next/img/vis-widget-demo.png',
        };
    }

    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate() {
        // Widget has 3 important states
        // 1. this.state.values - contains all state values, that are used in widget (automatically collected from widget info).
        //                        So you can use `this.state.values[this.state.rxData.oid + '.val']` to get value of state with id this.state.rxData.oid
        // 2. this.state.rxData - contains all widget data with replaced bindings. E.g. if this.state.data.type is `{system.adapter.admin.0.alive}`,
        //                        then this.state.rxData.type will have state value of `system.adapter.admin.0.alive`
        // 3. this.state.rxStyle - contains all widget styles with replaced bindings. E.g. if this.state.styles.width is `{javascript.0.width}px`,
        //                        then this.state.rxData.type will have state value of `javascript.0.width` + 'px
    }

    componentDidMount() {
        super.componentDidMount();

        // Update data
        this.propertiesUpdate();
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo() {
        return Zugspitze.getWidgetInfo();
    }

    // This function is called every time when rxData is changed
    onRxDataChanged() {
        this.propertiesUpdate();
    }

    // This function is called every time when rxStyle is changed
    // eslint-disable-next-line class-methods-use-this
    onRxStyleChanged() {

    }

    // This function is called every time when some Object State updated, but all changes lands into this.state.values too
    // eslint-disable-next-line class-methods-use-this, no-unused-vars
    onStateUpdated(id, state) {

    }

    renderWidgetBody(props) {
        super.renderWidgetBody(props);

        return (
            <div id="wrapper">
                <Navbar fixed="top" className='border-bottom'>
                    <Navbar.Brand href="#" className='pt-0 px-lg-3 px-1 mr-0'>Trainboard</Navbar.Brand>
                    <div className='ml-auto'>
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
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Zugspitze;

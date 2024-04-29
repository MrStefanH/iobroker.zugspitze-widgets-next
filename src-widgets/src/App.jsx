import React from 'react';

import WidgetDemoApp from '@iobroker/vis-2-widgets-react-dev/widgetDemoApp';
import { i18n as I18n } from '@iobroker/adapter-react-v5';

import DemoWidget from './DemoWidget';
import Zugspitze from './Zugspitze';
import translations from './translations';

class App extends WidgetDemoApp {
    constructor(props) {
        super(props);

        // init translations
        I18n.extendTranslations(translations);
    }

    renderWidget() {
        return <div>
            <DemoWidget
                socket={this.socket}
                style={{
                    width: 600,
                    height: 200,
                }}
                data={{
                    type: 'all',
                }}
            />
            <Zugspitze
                socket={this.socket}
                style={{
                    width: 600,
                    height: 200,
                }}
                data={{
                    type: 'all',
                }}
            />
        </div>;
    }
}

export default App;

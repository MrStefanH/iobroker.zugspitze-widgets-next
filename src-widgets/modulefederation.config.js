const makeFederation = require('@iobroker/vis-2-widgets-react-dev/modulefederation.config');

module.exports = makeFederation(
    'vis2Zugspitze',
    {
        './Zugspitze': './src/Zugspitze',
        './translations': './src/translations',
    },
);

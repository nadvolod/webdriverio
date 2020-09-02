const path = require('path')

exports.config = {
    /**
     * server configurations
     */
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    services: [
        'sauce'
    ],
    /**
     * specify test files
     */
    specs: [
        path.resolve(__dirname, 'mocha.sauce.test.js')
    ],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    /**
     * test configurations
     */
    logLevel: 'trace',
    framework: 'mocha',
    outputDir: __dirname,

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 30000
    },

    /**
     * hooks
     */
    onPrepare: function() {
        // eslint-disable-next-line
        console.log('let\'s go')
    },
    onComplete: function() {
        // eslint-disable-next-line
        console.log('that\'s it')
    }
}

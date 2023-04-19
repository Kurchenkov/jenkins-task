exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec',
        ['junit', {
            outputDir: 'junit-reports',
            outputFileFormat: function(options) {
                // return `results-${ new Date().getTime() }.xml`
                return `results-${options.cid}.xml`
            }
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

let config = {
    tests: 'specs/*.spec.ts',
    output: './output',
    helpers: {
        Playwright: {
            url: 'https://www.todobackend.com/client/index.html?https://todo-backend-spring4-java8.herokuapp.com/todos',
            show: true,
            browser: 'chromium'
        },
        PlaywrightHelper: {
            require: './helpers/playwright.helper.js',
        }
    },
    include: {
        I: './steps_file.ts'
    },
    bootstrap: null,
    mocha: {},
    name: 'codeceptjs-playwright-with-mocking',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    },
    require: ["ts-node/register"]
};

if (process.profile === "ci") {
    config.helpers.Playwright.show = false;
}

exports.config = config;

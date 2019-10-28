const { setWorldConstructor, After, AfterAll, Before, BeforeAll, Given, When, Then } = require('cucumber');
const { registerHooks, World: BaseWorld, registerSteps } = require('../../server');

class World extends BaseWorld {
    constructor() {
        super();
    }
}

setWorldConstructor(World);
registerHooks({ After, AfterAll, Before, BeforeAll });
registerSteps({ Given, When, Then });
// Bug: Sauce Service doesn't update all jobs as failed
// - The last should pass, but running the first one in a separate describe block causes an
// issue where the 2nd one fails incorrectly

// Bug 2: Sauce Service names all jobs with the first describe name

// Bug 3: Spec Reporter just prints out one Sauce Labs job link

describe('Test 1', () => {
    it('should fail', () => {
        browser.url('https://webdriver.io/')
        expect(browser.getTitle()).toContain('Selenium')
    })
    //afterTest()
})
//afterSuite()

//We might not have a 2nd after call because of Mocha
//Is it a mocha specific problem? Is it the way we integrated it or Mocha doesn't support
//Normally we don't have 2 describes in a single file at the top level
// Check mocha, remove the browser and just do a simple unit test
//  Second test will just pass
// check if the mocha beforeAll() hook will execute twice with 2 top level describes

//Look in the packages for the spec reporter, this is the easier fix
// Make sure that we are printing all of the links even the ones becuase of reloadSession()

//beforeSuite()
describe('Test 2', () => {
    before(() => {
        browser.reloadSession() // create a new session in sauce labs to have separate videos for each describe block
    })

    it('should pass', () => {
        browser.url('https://webdriver.io/')
        expect(browser.getTitle()).toContain('WebdriverIO')
    })
    //afterTest()
})
//afterSuite()

//after()

let fails = 0

describe('Test 1', () => {
    it('should fail', () => {
        fails++
        console.log('should fail=' + fails)
        expect(false).toBe(true)
    })
    //afterTest()
    after(function () {
        fails = 0
    })
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
    it('should pass', () => {
        console.log('should pass=' + fails)
        expect(true).toBe(true)
    })
    //afterTest()
    after(function () {
        console.log('after()=' + fails)
    })
})
//afterSuite()

//after()

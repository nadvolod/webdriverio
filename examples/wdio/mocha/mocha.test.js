//I only did this to shut up ESLint
const document = browser
const $ = browser

describe('webdriver.io page', () => {
    it('should support isExisting on element created with object selector', () => {
        browser.url('https://webdriver.io')

        const navSiteEL = browser.execute(function (_sel) {
            return document.querySelector(_sel)
        }, '.nav-site')
        const navSite = $(navSiteEL) // create element from object selector
        console.log(navSite.$$('li')[2].$('a').getText()) // -> correctly logs "Help"
        console.log(navSite.isExisting()) // -> Error: selector needs to be typeof `string` or `function`
    })

    it('works, if the element is created with a function selector instead', () => {
        browser.url('https://webdriver.io')

        const navSite = $(function () {
            return document.querySelector('.nav-site')
        })
        console.log(navSite.$$('li')[2].$('a').getText()) // -> log "Help"
        console.log(navSite.isExisting()) // -> log `true`
    })

    it('works with a workaround', () => {
        browser.url('https://webdriver.io')

        const navSiteEL = browser.execute(function (_sel) {
            return document.querySelector(_sel)
        }, '.nav-site')
        const navSite = $(navSiteEL).$(function () {return this})
        console.log(navSite.$$('li')[2].$('a').getText()) // -> correctly logs "Help"
        console.log(navSite.isExisting()) // -> log `true`
    })
})

module.exports = {
    '@tags' : ['part1'],
    'test part one'(browser) {
        
        browser
          .url('https://www.draw2d.org/draw2d/')
          .click('link text', 'Examples')
          .saveScreenshot('tests_output/one.png')
          .click('.draw2d_exposed_link')
          .saveScreenshot('tests_output/two.png')


    }
}
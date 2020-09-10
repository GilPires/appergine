module.exports = {
    '@tags' : ['part1'],
    'test part one'(browser) {
        
        
        browser
          .url('https://www.draw2d.org/draw2d/')
          .saveScreenshot('tests_output/one.png')

          .click('link text', 'Examples')
          .saveScreenshot('tests_output/two.png')

          .click('link text', 'Explore')
          .saveScreenshot('tests_output/three.png')

        browser.windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        });
        browser 
          .assert.urlContains('http://www.draw2d.org/draw2d_touch/jsdoc_6/')
          .saveScreenshot('tests_output/four.png')

          .setValue('#search-field-inputEl','Undo & Redo')
          .saveScreenshot('tests_output/four.png')
          .click('#search-dropdown')
          .saveScreenshot('tests_output/five.png')

          .assert.urlContains('http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/example/buildin_commandstack')
          .saveScreenshot('tests_output/six.png')

          

    
        
          
        
        


    }
}
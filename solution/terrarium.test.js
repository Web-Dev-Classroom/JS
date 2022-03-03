/**
 * @jest-environment jsdom
 */

// This docblock is for projects that are not dependent on Node

let fs = require('fs');

// Set up document body by loading index.html file
var markup = fs.readFileSync('./index.html')
document.body.innerHTML = markup
require('./script');


test('The terrarium plant with id of "plant1" exists', () => {
    //If no problems with script.js, this test will always run
    expect(document.getElementById('plant1')).not.toBeNull()
});

//
test('The terrarium plant with id of "plant1" is draggable', () => {      
    //If no problems with script.js, this test will pass if line 3 is uncommented
    expect(document.getElementById('plant1').onpointerdown).not.toBeUndefined()
});

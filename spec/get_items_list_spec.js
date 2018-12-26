'use strict';
let getItemsList = require('../src/get_items_list.js');
describe('get items list', function() {
  let input = ['ITEM0001 x 1', 'ITEM0013 x 2', 'ITEM0022 x 1'];
  let itemsList = [{
    id: 'ITEM0001',
    count: 1
  }, {
    id: 'ITEM0013',
    count: 2
  }, {
    id: 'ITEM0022',
    count: 1
  }];
  it('get id and count from input string', function() {
    let output = getItemsList(input);
    expect(output).toEqual(itemsList);
  });
});
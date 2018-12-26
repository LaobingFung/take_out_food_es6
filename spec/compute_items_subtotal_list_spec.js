'use strict';
let computeItemsSubtotalList = require('../src/compute_items_subtotal_list.js');
describe('compute items subtotal list', function() {
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
  let itemsPriceList = [{
    id: 'ITEM0001',
    count: 1,
    subtotal: 18.00,
    name: '黄焖鸡'
  }, {
    id: 'ITEM0013',
    count: 2,
    subtotal: 12.00,
    name: '肉夹馍'
  }, {
    id: 'ITEM0022',
    count: 1,
    subtotal: 8.00,
    name: '凉皮'
  }]
  it('append name and subtotal to item list', function() {
    let output = computeItemsSubtotalList(itemsList);
    expect(output).toEqual(itemsPriceList);
  });
});
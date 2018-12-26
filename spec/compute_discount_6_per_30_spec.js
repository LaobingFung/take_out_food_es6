'use strict';
let computeDiscount6Per30 = require('../src/compute_discount_6_per_30.js');
describe('compute discount 6 per 30', function() {
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
  it('get discount from items and price list', function() {
    let output = computeDiscount6Per30(itemsPriceList);
    expect(output).toEqual(6);
  });
});
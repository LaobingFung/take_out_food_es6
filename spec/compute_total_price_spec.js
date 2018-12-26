'use strict';
let computeTotalPtice = require('../src/compute_total_price.js')
describe('compute total price', function() {
  it('compute total price case 1', function() {
    let itemsPriceList_1 = [{
      id: 'ITEM0013',
      count: 4,
      subtotal: 24.00,
      name: '肉夹馍'
    }, {
      id: 'ITEM0022',
      count: 1,
      subtotal: 8.00,
      name: '凉皮'
    }];
    let promotion_1 = {
      type: '满30减6元',
      discount: 6
    };
    let total_price_1 = 26;
    let output = computeTotalPtice(itemsPriceList_1, promotion_1);
    expect(output).toEqual(total_price_1);
  });
  it('compute total price case 2', function() {
    let itemsPriceList_2 = [{
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
    }];
    let promotion_2 = {
      type: '指定菜品半价',
      items: ['ITEM0001', 'ITEM0022'],
      discount: 13.00
    };
    let total_price_2 = 25;
    let output = computeTotalPtice(itemsPriceList_2, promotion_2);
    expect(output).toEqual(total_price_2);
  });
});
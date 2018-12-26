'use strict';
let computeDiscount6Per30 = require('../src/compute_discount_6_per_30.js');
let computeDiscountHalf = require('../src/compute_discount_half.js');
let loadPromotions = require('../src/promotions.js');
let computeDiscount = require('../src/compute_discount.js');
describe('get discount', function() {
  it('compute discount by the first promotion', function() {
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
    let output = computeDiscount(itemsPriceList_1);
    expect(output).toEqual(promotion_1);
  });
  it('compute discount by the second promotion', function() {
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
    let output = computeDiscount(itemsPriceList_2);
    expect(output).toEqual(promotion_2);
  });
});
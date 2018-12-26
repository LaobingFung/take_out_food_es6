'use strict';
let computeDiscountHalf = require('../src/compute_discount_half.js');
let loadPromotions = require('../src/promotions.js');
let promotions = loadPromotions();
describe('compute discount for special items', function() {
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
  }];
  let promotion = {
    discount: 13,
    specialItems: ['黄焖鸡', '凉皮']
  };
  it('get discount from items price list', function() {
    let output = computeDiscountHalf(itemsPriceList, promotions);
    expect(output).toEqual(promotion);
  });
});
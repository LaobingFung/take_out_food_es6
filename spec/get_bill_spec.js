'use strict';
let getBill = require('../src/get_bill.js');
describe('print final bill', function() {
  it('testPoint1', function() {
    let bill_1 = `
============= 订餐明细 =============
黄焖鸡 x 1 = 18元
肉夹馍 x 2 = 12元
凉皮 x 1 = 8元
-----------------------------------
使用优惠:
指定菜品半价(黄焖鸡，凉皮)，省13元
-----------------------------------
总计：25元
===================================`.trim();
    let itemsPriceList_1 = [{
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
    let promotion_1 = {
      type: '指定菜品半价',
      items: ['ITEM0001', 'ITEM0022'],
      discount: 13.00
    };
    let totalPrice_1 = 25;
    let output = getBill(itemsPriceList_1, promotion_1, totalPrice_1);
    expect(output).toEqual(bill_1);
  });
  it('testPoint2', function() {
    let bill_2 = `
============= 订餐明细 =============
肉夹馍 x 4 = 24元
凉皮 x 1 = 8元
-----------------------------------
使用优惠:
满30减6元，省6元
-----------------------------------
总计：26元
===================================`.trim();
    let itemsPriceList_2 = [{
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
    let promotion_2 = {
      type: '满30减6元',
      discount: 6
    };
    let totalPrice_2 = 26;
    let output = getBill(itemsPriceList_2, promotion_2, totalPrice_2);
    expect(output).toEqual(bill_2);
  });
});
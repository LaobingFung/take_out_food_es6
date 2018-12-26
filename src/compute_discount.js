'use strict';
let loadPromotions = require('./promotions.js');
let computeDiscount6Per30 = require('./compute_discount_6_per_30.js');
let computeDiscountHalf = require('./compute_discount_half.js');

function computeDiscount(itemsPriceList) {
  let promotions = loadPromotions();
  let discount6Per30 = computeDiscount6Per30(itemsPriceList, promotions);
  let discountHalf = computeDiscountHalf(itemsPriceList, promotions);
  let promotionsObj = discount6Per30 >= discountHalf.discount ? {
    'type': '满30减6元',
    'discount': discount6Per30
  } : {
    'type': '指定菜品半价',
    'names': discountHalf.specialItems,
    'discount': discountHalf.discount
  }
  return promotionsObj;
  //return Object like {type: '满30减6元', discount: 6.00}
  //or {type: '指定菜品半价',items: ['ITEM0001', 'ITEM0022'], discount: 13.00}
}
module.exports = computeDiscount;
'use strict';
let getItemsList = require('./get_items_list.js');
let computeItemsSubtotalList = require('./compute_items_subtotal_list.js');
let computeDiscount6Per30 = require('./compute_discount_6_per_30.js');
let computeDiscountHalf = require('./compute_discount_half.js');
let computeDiscount = require('./compute_discount.js');
let computeTotalPrice = require('./compute_total_price.js');
let getBill = require('./get_bill.js');
let loadAllItems = require('./items.js');
let loadPromotions = require('./promotions.js');

function bestCharge(selectedItems) {
  let itemsList = getItemsList(selectedItems);
  let itemsPriceList = computeItemsSubtotalList(itemsList);
  let promotion = computeDiscount(itemsPriceList);
  let totalPrice = computeTotalPrice(itemsPriceList, promotion);
  return getBill(itemsPriceList, promotion, totalPrice);
}
// module.exports = bestCharge;
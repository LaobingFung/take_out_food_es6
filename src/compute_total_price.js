'use strict';

function computeTotalPrice(itemsPriceList, promotion) {
  let totalPriceTemp = itemsPriceList.reduce((acc, curObj) => {
    return acc += curObj.subtotal
  }, 0);
  return totalPriceTemp - promotion.discount;
  //return Number totalPrice
}
module.exports = computeTotalPrice;
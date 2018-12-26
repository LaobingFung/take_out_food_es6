'use strict';
function computeDiscountHalf(itemsPriceList, promotions) {
  let itemsToDiscount = itemsPriceList.filter(function(curObj) {
    return this[1].items.includes(curObj.id);
  }, promotions);
  let discount = itemsToDiscount.reduce((acc, curObj) => {
    if (promotions[1].items.includes(curObj.id)) {
      return acc += curObj.subtotal / 2;
    }
  }, 0);
  return {
    'discount': discount,
    'specialItems': itemsToDiscount.map((curObj) => {
      return curObj.name;
    })
  };
}
module.exports = computeDiscountHalf;
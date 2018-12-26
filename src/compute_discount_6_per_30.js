'use strict';
function computeDiscount6Per30(itemsPriceList) {
  let totalPriceTemp = itemsPriceList.reduce((acc, curObj) => {
    return acc += curObj.subtotal
  }, 0);
  return Math.floor(totalPriceTemp / 30) * 6;
}
module.exports = computeDiscount6Per30;
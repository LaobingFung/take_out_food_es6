'use strict';

function getBill(itemsPriceList, promotion, totalPrice) {
  let itemsPrint = itemsPriceList.reduce(function(accStr, curItem, curI, arr) {
    return accStr += `${curItem.name} x ${curItem.count} = ${curItem.subtotal}元${curI === arr.length - 1 ? '' : '\n'}`;
  }, ``);
  let promotionPrint;
  if (promotion.discount !== 0) {
    promotionPrint = `${promotion.type}${promotion.specialItems ? `(${promotion.specialItems.join('，')})` : ''}，省${promotion.discount}元`;
  } else {
    promotionPrint = '';
  }
  let bill = `
============= 订餐明细 =============
${itemsPrint}
-----------------------------------
使用优惠:
${promotionPrint}
-----------------------------------
总计：${totalPrice}元
===================================`.trim();
  return bill;
}
module.exports = getBill;
'use strict';
function getBill(itemsPriceList, promotion, totalPrice) {
  let output = '============= 订餐明细 =============\n';
  itemsPriceList.forEach(function(curObj) {
    let item = curObj.name + ' x ' + curObj.count + ' = ' + curObj.subtotal + '元\n';
    output += item;
  })
  output += '-----------------------------------\n';
  if (promotion.discount !== 0) {
    if (promotion.type === '满30减6元') {
      output += '使用优惠:\n满30减6元，省' + promotion.discount.toString() + '元\n';
    } else if (promotion.type === '指定菜品半价') {
      output += '使用优惠:\n指定菜品半价(';
      promotion.specialItems.forEach(function(curStr, curI, arr) {
        output += curStr;
        output += (curI === (arr.length - 1)) ? ')，省' : '，';
      })
      output += promotion.discount.toString() + '元\n';
    }
    output += '-----------------------------------\n';
  }
  output += '总计：' + totalPrice.toString() + '元\n';
  output += '===================================';
  //return final bill to print
  return output;
}
module.exports = getBill;
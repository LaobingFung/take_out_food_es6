'use strict';

function bestCharge(selectedItems) {
  let allItems = loadAllItems();
  let promotions = loadPromotions();
  let itemsList = getItemsList(selectedItems);
  let itemsPriceList = computeItemsSubtotalList(itemsList);
  let promotion = computeDiscount(itemsPriceList);
  let totalPrice = computeTotalPrice(itemsPriceList, promotion);
  return getBill(itemsPriceList, promotion, totalPrice);
}
module.exports = bestCharge;

function computeDiscount(itemsPriceList) {
  let promotions = loadPromotions();
  let discount6Per30 = computeDiscount6Per30(itemsPriceList, promotions);
  let discountHalf = computeDiscountHalf(itemsPriceList, promotions);
  let promotionsObj = discount6Per30 >= discountHalf.discount ? {
    'type': '满30减6元',
    'discount': discount6Per30
  } : {
    'type': '指定菜品半价',
    'specialItems': discountHalf.specialItems,
    'discount': discountHalf.discount
  }
  return promotionsObj;
}

function computeDiscount6Per30(itemsPriceList) {
  let totalPriceTemp = itemsPriceList.reduce((acc, curObj) => {
    return acc += curObj.subtotal
  }, 0);
  return Math.floor(totalPriceTemp / 30) * 6;
}

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

function computeItemsSubtotalList(itemsList) {
  let allItems = loadAllItems();
  itemsList.forEach(function(curItem, curI, arr) {
    let item = this.find(function(curItemAll) {
      return curItemAll.id === curItem.id;
    });
    let singlePrice = item.price;
    arr[curI].subtotal = singlePrice * arr[curI].count;
    arr[curI].name = item.name;
  }, allItems)
  return itemsList;
}

function computeTotalPrice(itemsPriceList, promotion) {
  let totalPriceTemp = itemsPriceList.reduce((acc, curObj) => {
    return acc += curObj.subtotal
  }, 0);
  return totalPriceTemp - promotion.discount;
}

function getBill(itemsPriceList, promotion, totalPrice) {
  let itemsPrint = itemsPriceList.reduce(function(accStr, curItem, curI, arr) {
    return accStr += `${curItem.name} x ${curItem.count} = ${curItem.subtotal}元${curI === arr.length - 1 ? '' : '\n'}`;
  }, ``);
  let promotionPrint;
  if (promotion.discount !== 0) {
    promotionPrint = `\n-----------------------------------
使用优惠:
${promotion.type}${promotion.specialItems ? `(${promotion.specialItems.join('，')})` : ''}，省${promotion.discount}元`;
  } else {
    promotionPrint = undefined;
  }
  let bill = `
============= 订餐明细 =============
${itemsPrint}${promotionPrint === undefined ? '' : promotionPrint}
-----------------------------------
总计：${totalPrice}元
===================================`.trim();
  return bill;
}

function getItemsList(originalArr) {
  let itemsList = originalArr.map(function(curStr) {
    let order = curStr.split(" x ");
    return {
      id: order[0],
      count: parseInt(order[1])
    };
  });
  return itemsList;
}
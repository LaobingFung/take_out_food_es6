'use strict';
let loadAllItems = require("./items.js");

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
  //return Arr like
  //[{id: "ITEM0001", count: 1, subtotal: 18.00, name: '黄焖鸡'},
  // {id: "ITEM0013", count: 2, subtotal: 12.00}, name: '肉夹馍'
  // {id: "ITEM0022", count: 1, subtotal: 8.00， name: '凉皮'}]
}
module.exports = computeItemsSubtotalList;
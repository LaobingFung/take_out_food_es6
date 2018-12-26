'use strict';
function getItemsList(originalArr) {
  let itemsList = originalArr.map(function(curStr) {
    let order = curStr.split(" x ");
    return {
      id: order[0],
      count: parseInt(order[1])
    };
  });
  return itemsList;
  //return Arr like
  //[{id: "ITEM0001", count: 1}, {id: "ITEM0013", count: 2}, {id: "ITEM0022", count: 1}]
}
module.exports = getItemsList;
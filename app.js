(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
;

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrlr = this;

  toBuyCtrlr.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuyCtrlr.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrlr = this;

  boughtCtrlr.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var toBuyItems = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "8"
  },
  {
    name: "Cookies",
    quantity: "20"
  },
  {
    name: "Chocolate",
    quantity: "3"
  },
  {
    name: "Potatoes",
    quantity: "4"
  },
  {
    name: "Bread",
    quantity: "2"
  },
  {
    name: "Apples",
    quantity: "6"
  },
  {
    name: "Oranges",
    quantity: "9"
  },
  ];
  // List of items already bought
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];

    toBuyItems.splice(itemIndex, 1);

    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();

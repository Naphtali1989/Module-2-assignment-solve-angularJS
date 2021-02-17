(() => {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        const toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getAvailableItems();
        toBuy.removeItem = (idx) => {
            ShoppingListCheckOffService.removeAvailableItem(idx);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        const bought = this;

        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var availableItems = [{
            name: 'Cookies',
            quantity: '5'
        }, {
            name: 'Donuts',
            quantity: '12'
        }, {
            name: 'Coke',
            quantity: '6'
        }, {
            name: 'Truffles',
            quantity: '20'
        }, {
            name: 'Schnitzel',
            quantity: '2'
        }, {
            name: 'Chicken',
            quantity: '3'
        }, {
            name: 'Chips',
            quantity: '50'
        }];
        var boughtItems = [];

        service.getAvailableItems = () => {
            return availableItems;
        }
        service.getBoughtItems = () => {
            return boughtItems;
        }

        service.addToBought = (item) => {
            boughtItems.unshift(item);
        }

        service.removeAvailableItem = (idx) => {
            const currItem = availableItems.splice(idx, 1)[0];
            service.addToBought(currItem);
        };
    }

})();
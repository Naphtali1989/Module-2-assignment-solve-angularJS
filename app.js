'use strict';

(() => {
    angular.module('ShoppingApp', [])
        .controller('ShoppingListController', ShoppingListController)
        .controller('ShoppingCartController', ShoppingCartController)
        .provider('ShoppingService', ShoppingServiceProvider)
})();
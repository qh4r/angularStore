angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products")
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
        //var input = {products: [
        //    { name: "Produkt #1", description: "To jest produkt.",
        //        category: "Kategoria #1", price: 100 },
        //    { name: "Produkt #2", description: "To jest produkt.",
        //        category: "Kategoria #1", price: 110 },
        //    { name: "Produkt #3", description: "To jest produkt.",
        //        category: "Kategoria #2", price: 210 },
        //    { name: "Produkt #4", description: "To jest produkt.",
        //        category: "Kategoria #3", price: 202 }]
        //};
        //$scope.data = input;
        $scope.data = {};

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });
    });
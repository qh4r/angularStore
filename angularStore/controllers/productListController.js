angular.module("sportsStore")
    .constant("pageSize", 3)
    .constant("productListActiveClass", "btn-primary")
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass, pageSize, cart) {
        var selectedCategory = null;
        $scope.selectedPage = 1;
        $scope.pageSize = pageSize;
        $scope.selectPage = function(page){
            $scope.selectedPage = page;
        }
        $scope.isPageActive = function(page){
            return $scope.selectedPage == page ? productListActiveClass : "";
        }
        $scope.selectCategory = function (newCategory) {
            $scope.selectPage(1);
            selectedCategory = newCategory;
        }
        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }

        $scope.getCategoryClass = function(category){
            return category == selectedCategory ? productListActiveClass : "";
        }

        $scope.addProductToCart = function(product) {
            cart.addProduct(product.id, product.name, product.price);
        }
    });
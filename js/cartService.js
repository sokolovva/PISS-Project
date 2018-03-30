var CartStorage = (function () {
    function CartStorage() {
        this._items = [];
        this.total = 0;
    }


    CartStorage.nextId = 1;


    CartStorage.prototype.addCartItem = function (product, quantity) {
        // if ((product instanceof Product) && (quantity > 0)) {
        if (quantity > 0) {
            var cartItem = new CartItem(product, quantity);
            this._items.push(cartItem);

            cartItem.cartItemTotal = this.calculateItemTotal(cartItem);
            this.total += cartItem.cartItemTotal;
            return true;
        }
        return false;
    };


    CartStorage.prototype.changeCartItem = function (itemId, newQuantity) {
        var index = this._items.findIndex(item => item.id == itemId);

        if (index != -1) {
            var cartItem = this._items[index];
            this.total -= cartItem.cartItemTotal;
            cartItem.quantity = newQuantity;

            cartItem.cartItemTotal = this.calculateItemTotal(cartItem);
            this.total += cartItem.cartItemTotal;
            return true;
        } else {
            throw new Error('there is no cartItem with ID' + itemId);
        }
    };


    CartStorage.prototype.removeCartItem = function (itemId) {
        var index = this._items.findIndex(item => item.id == itemId);

        if (index != -1) {
            var cartItem = this._items[index];
            this.total -= cartItem.cartItemTotal;

            this._items.splice(index, 1);
            return true;
        } else {
            throw new Error('there is no cartItem with ID' + itemId);
        }
    };


    CartStorage.prototype.emptyCart = function () {
        this._items.length = 0;
        this.total = 0;
    };


    CartStorage.prototype.calculateItemTotal = function(cartItem) {
        return cartItem.quantity * cartItem.product.price;
    };


    CartStorage.prototype.calculateCartTotal = function(){
        return this._items.reduce(function(total, item) {
            return total + item.cartItemTotal;
        }, 0);
    };


    function CartItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        this.cartItemTotal = 0;
        this.id = CartStorage.nextId++;
    }

    return CartStorage;
})();

var a = new CartStorage();
a.addCartItem({name: 'teniska', price: 12}, 2);
a.addCartItem({name: 'bluza', price: 25}, 1);
a.addCartItem({name: 'dynki', price: 30}, 1);
a.addCartItem({name: 'pulover', price: 40}, 1);
console.log(a);
console.log();

a.changeCartItem(1, 3);
a.removeCartItem(2);
console.log(a);
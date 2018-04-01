var productStorage = (function () {
    function ProductStorage() {
        this._products = [];
    }

    ProductStorage.nextId = 1;

    ProductStorage.prototype.addProduct = function (name, brand, category, price, gender) {
        var newProduct = new Product(name, brand, category, price, gender);
        this._products.push(newProduct);
    };

    ProductStorage.prototype.deleteProduct = function (id) {
        var index = this._products.findIndex(product => product.id == id);

        if (index != -1) {
            this._products.splice(index, 1);
        } else {
            throw new Error('there is no product with such ID');
        }
    };

    function Product(name, brand, category, price, gender) {
        this.id = ProductStorage.nextId++;
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.gender = gender;
        //this.subCategory = subCategory;
        //this.description = description;
        //this.isPromotion = isPromotion;
        //this.thumbnailImage = thumbnailImage;
        //this.images = imgArray; //array with images
    }

    return new ProductStorage();
})();

(function(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'products.json', true);
    xhr.send(null);

    xhr.addEventListener('load', function(){
        var data = JSON.parse(xhr.responseText);
        productStorage._products = data;
    });
})();
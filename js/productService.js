var productStorage = (function () {
    function ProductStorage() {
        this._products = [];
        this.categories = [];
    }

    var itemsLink;

    ProductStorage.nextId = 1;
    var itemsLink;
    var productItems;

    ProductStorage.prototype.addProductLinks = function () {
        return new Promise(function (resolve, reject) {

            $.get('http://localhost/fashiondaysproject/json/products.json').then(function (data) {
                itemsLink = JSON.parse(data);
                resolve(itemsLink);

            })
        }
        )
    }

    ProductStorage.prototype.listALL = function () {
        this.loadProducts().then(function (itemsLink) {
            itemsLink.forEach(element => { console.log(element); }
            )
        });
    }


    ProductStorage.prototype.loadProducts = function () {
        this.addProductLinks().then(function(itemsLink){
            itemsLink.forEach(item=>{
                return new Promise(function (resolve, reject) {
                    $.get("" + item + "?apikey=da652158751388484ace1e2d6e60bb52136a9db93a283d09d9ab9ddaa96870a3").then(function (data) {
                        
                     
                        productItems.push(data);
                        
                    }
                    )
            })})
        });
     
    }
       


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
        this.description = description;
        this.size;
        //this.isPromotion = isPromotion;
        //this.thumbnailImage = thumbnailImage;
        //this.images = imgArray; //array with images
    }

    return new ProductStorage();
})();


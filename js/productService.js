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


    ProductStorage.prototype.filterSelectedProducts = function(filters) {
        var result = this._products.filter(function(prod) {
            return (((filters.brand != undefined && filters.brand.length > 0) ? filters.brand.includes(prod.brand) : true) &&
                ((filters.gender != undefined && filters.gender.length > 0) ? filters.gender.includes(prod.gender) : true) &&
                ((filters.category != undefined && filters.category.length > 0) ? filters.category.includes(prod.category) : true));
        });

        return result;
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

productStorage._products = [
    {
        id: 1,
        name: 'bluza',
        brand: 'boss',
        category: 'bluzi',
        price: 10,
        gender: 'f'
    },
    {
        id: 2,
        name: 'riza',
        brand: 'teodor',
        category: 'rizi',
        price: 20,
        gender: 'm'
    },
    {
        id: 3,
        name: 'riza',
        brand: 'andrews',
        category: 'rizi',
        price: 30,
        gender: 'f'
    },
    {
        id: 4,
        name: 'bluza',
        brand: 'hm',
        category: 'bluzi',
        price: 1,
        gender: 'm'
    },
    {
        id: 5,
        name: 'pantalon',
        brand: 'boss',
        category: 'pantaloni',
        price: 30,
        gender: 'm'
    },
    {
        id: 6,
        name: 'qke',
        brand: 'pl',
        category: 'qketa',
        price: 14,
        gender: 'f'
    }
];

var filters = {
    gender: ['f'],
    brand: ['boss', 'andrews'],
    category: ['bluzi', 'rizi']

};

console.log(productStorage.filterSelectedProducts(filters));

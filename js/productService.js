var productStorage = (function () {
    function ProductStorage() {
     
    }
    var products=[];
    if(products.length==0 && !JSON.parse(localStorage.getItem('products'))){
        $.get('http://localhost/fashiondaysproject/json/products.json').then(function (data) {
            products = products.concat(JSON.parse(data));
            localStorage.setItem('products', JSON.stringify(products));
        })
    }else{
        products=JSON.parse(localStorage.getItem('products'));
    }
   

    ProductStorage.nextId = 1;


    ProductStorage.prototype.listAll = function () {
      products.forEach(item => {
          console.log(item);
      });
            
    
    }


    ProductStorage.prototype.deleteProduct = function (id) {
        var index = products.findIndex(product => product.id == id);

        if (index != -1) {
            products.splice(index, 1);
        } else {
            throw new Error('there is no product with such ID');
        }
    };

    



    return new ProductStorage();
})();

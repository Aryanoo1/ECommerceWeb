function fetchProducts (done){
    $.get('/api/products', function(data){
        done(data)
    })
}
function createProductCard(product){
    return $(`
    <div class="blocks">
        <div class="block-img" style="background-image: url('smile.jpg');"></div>
        <div class="block-content">
            <h4>${product.name}</h4>
            <h3>${product.manufacturer}</h3>
            <h2>${product.price}</h2>
        </div>
    </div>
    `)
}
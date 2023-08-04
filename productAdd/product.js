function addProduct(name, manuf, price, done){
    $.post('/api/products',{
        name: name,
        manufacturer: manuf,
        price: price
    })
}
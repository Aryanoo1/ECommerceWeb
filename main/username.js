function fetchusername (done){
    $.get('/api/users', function(data){
        done(data)
    })
}
function createusername(product){
    return $(`
    <p>Hello,</p>
    <p style="font-size: 1.3rem;">${product.name}</p>
    `)
}
$(function() {
    let username = $('#username')
    fetchusername(function(products){
        username.empty()
        for(product of products){
            username.append(createusername(product))
        }  
    })
})
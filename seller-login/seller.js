function addSeller(email, password){
    $.post('/api/sellers', {
        email: email,
        password: password
    }, function(data){
        done(data)
    })
}
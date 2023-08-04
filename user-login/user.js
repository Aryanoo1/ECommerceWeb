function addUser(name, email, password){
    $.post('/api/users', {
        name: name,
        email: email,
        password: password
    }
    // , function(data){
    //     done(data)
    // }
    )
}
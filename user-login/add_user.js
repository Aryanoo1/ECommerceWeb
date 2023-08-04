$(function(){
    let name = $('#name')
    let email = $('#email')
    let password = $('#password')
    // console.log(name)
    $('#btn_login').click(function(){
        addUser(
            name.val(),
            email.val(),
            password.val()
        )
    })
})
$(function(){
    let email = $('#email')
    let password = $('#password')
    $('#btn_login').click(function(){
        addSeller(
            email.val(),
            password.val()
        )
    })
})
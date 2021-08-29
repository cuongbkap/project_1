let login = (user_name,pass_word) => {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:9000/user/login',
        contentType: 'application/json',
        data: JSON.stringify({ user_name: user_name, pass_word: pass_word}),
        dataType: 'json',
        success: function (data) {
            localStorage.setItem('token',data.token.token);
            checkLogin();
        },
        error: function (err) {
            console.log('err', err);
            alert('Sai tài khoản hoặc mật khẩu');
        }
    });
}

let checkLogin = () => {
    if(localStorage.getItem('token')){
        window.location.href = 'http://localhost:2000';
    }
}
checkLogin();

let registerPage = () => {
    $( "#main_content" ).load( "http://localhost:2000/register-page");
}
let getUserInfo = () => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:9000/user/get-user',
        headers: {
            Accept: 'application/json', 
            jwt: localStorage.getItem('token')
        },
        success: function (result) {
            if(result.data && result.data.length){
                $('#txt_fullname').html(result.data[0].full_name) ;
            }
        },
        error: function (err) {
            console.log('err', err);
        }
    });
}
getUserInfo();

let logout = () => {
    localStorage.removeItem('token');
    window.location.href = 'http://localhost:2000/login';
}

let checkLoginToken = () => {
    if(!localStorage.getItem('token')){
        window.location.href = 'http://localhost:2000/login';
    }
}
checkLoginToken();

let getRolePage = () => {
    $( "#main_content" ).load( 'http://localhost:2000/get-role-page' );
}

let getAllUserPage = () => {
    $( "#main_content" ).load( "http://localhost:2000/get-all-page" );
}

let deleteUserPage = () => {
    $( "#main_content" ).load( "http://localhost:2000/delete-page" );
}


let register_User = () => {
    $.ajax({
        type: "POST",
        url: "http://localhost:9000/user/register",
        contentType: 'application/json',
        data: JSON.stringify({full_name:$('#txt_fullname').val(), user_name: $("#txt_username").val(), pass_word: $("#txt_password").val(),birthday: $("#txt_birthday").val(), address: $("#txt_address").val()}),
        dataType: "json",
        success: function (data) {
            if (Array.isArray(data)) {
                let tbody = document.getElementsByID("userTable");
                let trinfo = '';
                for (let user of data) {
                    trinfo = trinfo.concat(`<tr>`)
                        .concat(`<td>`).concat(user.full_name).concat(`</td>`)
                        .concat(`<td>`).concat(user.user_name).concat(`</td>`)
                        .concat(`<td>`).concat(user.pass_word).concat(`</td>`)
                        .concat(`<td>`).concat(user.birthday).concat(`</td>`)
                        .concat(`<td>`).concat(user.address).concat(`</td>`)
                        .concat(`<td>`)
                        .concat(`<td>`)
                        .concat(`<button onclick='delete_arr(this.id.split("_")[1])' id='btn_`).concat(user.user_id)
                        .concat(`'>Lấy thông tin`)
                        .concat(`</button>`)
                        .concat(`</td>`)
                        .concat(`<button onclick='delete_arr(this.id.split("_")[1])' id='btn_`).concat(user.user_id)
                        .concat(`'>Xóa`)
                        .concat(`</button>`)
                        .concat(`</td>`)
                        .concat(`</tr>`);
                }
                tbody.innerHTML = trinfo;
            }else {
                alert(data.message);
                console.log(data);
            }
            window.location.href = 'http://localhost:2000/login';
        },
        error: function (err) {
            console.log("err", err);
        }
    });
}

let back = () => {
    window.location.href = 'http://localhost:2000/login';
}
let getAllUser = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:9000/user/get-all",
    headers: {
      Accept: "application/json",
      jwt: localStorage.getItem("token"),
    },
    success: function (result) {
      if (Array.isArray(result.data)) {
        let tbody = document.getElementById("userTable");
        let trinfo = "";
        for (let user of result.data) {
          let userString = JSON.stringify(user);
          trinfo = trinfo
            .concat(`<tr class="text-center">`)
            .concat(`<td>`)
            .concat(user.user_id)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.user_name)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.password)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.full_name)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.birthday)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.address)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.role_name)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(
              `<button class="btn btn-success" onclick='get_user(JSON.parse(this.getAttribute("data_user")))' data_user='` +
                userString +
                `' id='btn_`
            )
            .concat(user.user_id)
            .concat(`'>Edit`)
            .concat(`</button>`)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(
              `<button class="btn btn-danger" onclick='deleteUser(this.id.split("_")[1])' id='btn_`
            )
            .concat(user.user_id)
            .concat(`'>Delete`)
            .concat(`</button>`)
            .concat(`</td>`)
            .concat(`</tr>`);
        }
        tbody.innerHTML = trinfo;
      }
    },
    error: function (err) {
      console.log("err", err);
      alert("NOT PERMISSION");
    },
  });
};
getAllUser();

function deleteUser(id) {
  $.ajax({
    type: "DELETE",
    url: "http://localhost:9000/user/delete/" + id,
    // headers: {
    //   Accept: "application/json",
    //   jwt: localStorage.getItem("token"),
    // },
    contentType: "application/json",
    success: function (result) {
      if (Array.isArray(result.data)) {
        let tbody = document.getElementById("userTable");
        let trinfo = "";
        for (let user of result.data) {
          let userString = JSON.stringify(user);
          trinfo = trinfo
            .concat(`<tr class="text-center">`)
            .concat(`<td>`)
            .concat(user.user_id)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.user_name)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.password)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.full_name)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.birthday)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.address)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(user.role_name)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(
              `<button class="btn btn-success" onclick="updateUser()">Edit`
            )
            .concat(`</button>`)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(
              `<button class="btn btn-danger" onclick='deleteUser(this.id.split("_")[1])' id='btn_`
            )
            .concat(user.user_id)
            .concat(`'>Delete`)
            .concat(`</button>`)
            .concat(`</td>`)
            .concat(`</tr>`);
        }
        tbody.innerHTML = trinfo;
      }
    },
    error: function (err) {
      console.log("err", err);
      alert("NOT PERMISSION");
    },
  });
}

function updateUser() {
  
}

function get_user(user){
  console.log(user.full_name);
  $("#modal-id").modal("show");
  $("#txt_username").val(user.user_name);
  $("#txt_password").val(user.password);
  $("#txt_fullname").val(user.full_name);
  $("#txt_birthday").val(user.birthday);
  $("#txt_address").val(user.address);
  $("#txt_role").val(user.role_name);
};

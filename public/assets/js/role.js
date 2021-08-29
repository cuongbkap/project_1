let getRole = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:9000/role/get-role",
    headers: {
      Accept: "application/json",
      jwt: localStorage.getItem("token"),
    },
    success: function (result) {
      if (Array.isArray(result.data)) {
        let tbody = document.getElementById("roleTable");
        let trinfo = "";
        for (let role of result.data) {
          let roleString = JSON.stringify(role);
          trinfo = trinfo
            .concat(`<tr class="text-center">`)
            .concat(`<td>`)
            .concat(role.role_id)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(role.role_name)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(
              `<button class="btn btn-success" onclick='get_user(JSON.parse(this.getAttribute("data_user")))' data_user='` +
                roleString +
                `' id='btn_`
            )
            .concat(role.id)
            .concat(`'>Lấy thông tin`)
            .concat(`</button>`)
            .concat(`</td>`)
            .concat(`<td>`)
            .concat(`<button class="btn btn-danger"`)
            .concat(role.role_id)
            .concat(`'>Xóa`)
            .concat(`</button>`)
            .concat(`</td>`)
            .concat(`</tr>`);
        }
        tbody.innerHTML = trinfo;
      }
    },
    error: function (err) {
      console.log("err", err);
    },
  });
};
getRole();

function insert() {
  let firstNameInput = document.getElementById("firstName");
  let lastNameInput = document.getElementById("lastName");
  let idInput = document.getElementById("id");
  fetch("php\\insert.php", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      id: idInput.value,
    }),
  })
    .then((response) => {
      firstNameInput.value = "";
      lastNameInput.value = "";
      idInput.value = "";
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function del() {
  let idInput = document.getElementById("delete-id");
  fetch("php\\delete.php", {
    method: "POST",
    body: JSON.stringify({
      id: idInput.value,
    }),
  })
    .then((response) => {
      idInput.value = "";
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })

    .catch((error) => {
      console.log(error);
    });
}

function update() {
  let idInput = document.getElementById("UpdateId");
  let lastNameInput = document.getElementById("UpdateLastName");
  let firstNameInput = document.getElementById("UpdateFirstName");
  fetch("php\\update.php", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      id: idInput.value,
    }),
  })
    .then((response) => {
      firstNameInput.value = "";
      lastNameInput.value = "";
      idInput.value = "";
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .catch((error) => {
      console.log(error);
    });
}

function view() {
  fetch("php\\view.php", {
    method: "POST",
    body: JSON.stringify({}),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      let viewButton = document.getElementById("viewButton");
      if (viewButton.textContent.trim() === "View table content") {
        document.getElementById("responseTableView").innerHTML = data;
        viewButton.textContent = "Hide table content";
      } else {
        document.getElementById("responseTableView").innerHTML = "";
        viewButton.textContent = "View table content";
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function createTable() {
  let tableInput = document.getElementById("TableName");
  let field1 = document.getElementById("Field1");

  fetch("php\\createTable.php", {
    method: "POST",
    body: JSON.stringify({
      tableName: tableInput.value,
      field1: field1.value,
    }),
  })
    .then((response) => {
      tableInput.value = "";
      field1.value = "";

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function viewall() {
  fetch("php\\viewall.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      let viewButton = document.getElementById("viewTableName");

      if (viewButton.textContent.trim() === "All table names") {
        document.getElementById("responseTableNames").innerHTML = data;
        viewButton.textContent = "Hide table names";
      } else {
        document.getElementById("responseTableNames").innerHTML = "";
        viewButton.textContent = "All table names";
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function drop() {
  let dropInput = document.getElementById("dropName");
  fetch("php\\drop.php", {
    method: "POST",
    body: JSON.stringify({
      name: dropInput.value,
    }),
  })
    .then((response) => {
      dropInput.value = "";
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })

    .catch((error) => {
      console.log(error);
    });
}

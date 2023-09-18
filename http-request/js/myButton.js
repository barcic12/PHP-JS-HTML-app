var responseContainer = document.getElementById("responseContainer");
var buttonsContainer = document.getElementById("buttons");
export default class MyButton {
  constructor(id, text, caseName) {
    this.element = document.createElement("button");
    this.element.textContent = text;
    this.element.id = id;
    this.element.addEventListener("click", () => this.performRequest(caseName));
    buttonsContainer.appendChild(this.element);
  }

  performRequest(id) {
    fetch("php\\server.php", {
      method: "POST",

      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          responseContainer.innerHTML = `HTTP error! Status: ${response.status}`;
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.text();
      })
      .then((data) => {
        try {
          const jsonData = JSON.parse(data);

          responseContainer.innerHTML = jsonData.message;
        } catch (error) {
          responseContainer.innerHTML = `Error parsing JSON: ${error}`;
        }
      })
      .catch((error) => {
        responseContainer.innerHTML = `"Error:",  ${error}`;
      });
  }
}

import MyButton from "./myButton.js";
document.addEventListener("DOMContentLoaded", function () {
  const validHtmlButton = new MyButton(
    "validHtmlButton",
    "Valid HTML Reply",
    "Valid html"
  );

  const invalidServerHtmlButton = new MyButton(
    "invalidServerHtmlButton",
    "Invalid Server HTML Reply",
    "invalid Server Html"
  );
  const invalidClientHtmlButton = new MyButton(
    "invalidClientHtmlButton",
    "Invalid Client HTML Reply",
    "Invalid client Html"
  );
  const validJsonButton = new MyButton(
    "validJsonButton",
    "Valid JSON Reply",
    "valid Json"
  );
  const invalidJsonButton = new MyButton(
    "invalidJsonButton",
    "Invalid JSON Reply",
    "invalid Json"
  );
});

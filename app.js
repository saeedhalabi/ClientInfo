$(document).ready(function () {
  // Handle file input change
  $("#file").change(function () {
    var file = this.files[0];
    if (file) {
      var url = URL.createObjectURL(file);
      $("#image-circle").css("background-image", `url(${url})`);
    }
  });

  // Handle form submission
  $("#formApp").submit(function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Reset error messages
    $(".error").text("");

    // Validate inputs
    let isValid = true;

    // Name validation
    let name = $("#nameInput").val().trim();
    if (name === "") {
      displayError($("#nameError"), "Name is required.");
      isValid = false;
    }

    // Last name validation
    let lastName = $("#lastNameInput").val().trim();
    if (lastName === "") {
      displayError($("#lastNameError"), "Last name is required.");
      isValid = false;
    }

    // Country validation
    let country = $("#countrySelect").val();
    if (country === "Select your country") {
      displayError($("#countryError"), "Please select a country.");
      isValid = false;
    }
  });

  // Function to display error message
  function displayError(element, message) {
    // Set the text content of the element to the provided error message
    element
      .text(message)
      // Apply styles to the error message
      .css({
        color: "red", // Set text color to red
        "font-weight": "bold", // Set font weight to bold
      });
  }
});

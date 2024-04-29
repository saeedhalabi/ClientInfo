// document will render after the HTML is loaded
$(document).ready(function () {
  $("#file").change(function () {
    // get the selected file
    var file = this.files[0];

    // if it's a file, set a URL for it
    if (file) {
      var url = URL.createObjectURL(file); // create a URL for that file
      // Set the background image of the circle div to the URL of the uploaded file
      $("#image-circle").css("background-image", `url(${url})`);
    }
  });
});

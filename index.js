// variable to store and pass image BLOB data between upload and display functions
var readerResult;

// upload image base64 data from HTML file select
function uploadFileData() {
  var file = document.getElementById('fileInput').files[0];
  function getbase64(file) {
    var reader = new FileReader();
    // call readAsDataURL method of FileReader to convert file to a base64 encoded string
    reader.readAsDataURL(file);
    reader.onload = function () {
      readerResult = reader.result;
      // check file data has been read
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      // report any error which has occurred
      console.log('Error: ', error);
    };
  }
  getbase64(file);
  
  /** optional code to create unique filename
  let fileName = `${Date.now()}-optionalText-${file.name}`;
  */
}

// display base64 image data in HTML document
function viewImg() {
  const newImg = document.createElement("img");
  newImg.src = readerResult;
  newImg.alt = "alt text";
  document.getElementById("img1").appendChild(newImg);
}
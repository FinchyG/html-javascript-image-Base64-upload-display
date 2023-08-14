var readerResult;

function viewFileData() {
  var file = document.getElementById('fileInput').files[0];
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      readerResult = reader.result;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  
  getBase64(file);
  console.log(readerResult);

  /** code to test type of file
  if (file instanceof Blob) {
    console.log("True");
  } else {
    console.log("False");
  }
  */
  
  /** code to create unique filename
  let fileName = `${Date.now()}-htp-${file.name}`;
  console.log("file name is:" + fileName);
  console.log("reader result is:");
  console.log(`${readerResult}`);
  */
}

function addImg() {
  const newImg = document.createElement("img");
  newImg.src = readerResult;
  newImg.alt = "alt text";
  document.getElementById("img1").appendChild(newImg);
}
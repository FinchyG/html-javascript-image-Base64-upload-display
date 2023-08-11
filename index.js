function viewFileData() {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    // Get blob?
    if(file instanceof Blob) {
        console.log("True");
    } else {
        console.log("False");
    }
    console.log(typeof file);
    let fileName = `${Date.now()}-htp-${file.name}`;
    console.log("file name is:" + fileName);
  }
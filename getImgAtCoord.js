// requires script to feed in coord in matching format
var searchQuery = "41°24'12.2\"N 2°10'2\"E";
var searchInput = document.getElementById("searchboxinput");
searchInput.value = searchQuery;
var searchButton = document.querySelector('[aria-label="Search"]');
searchButton.click();
setTimeout(function() {
  var thumbnailImage = document.querySelector('img[decoding="async"]');
  var imageUrl = thumbnailImage.getAttribute("src");
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      var downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.setAttribute("download", searchQuery+".jpg");
      downloadLink.click();
    });
}, 1000);

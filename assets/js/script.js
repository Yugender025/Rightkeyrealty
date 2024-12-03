const fileInput = document.getElementById("aadhar-pancard");
const fileNameElement = document.querySelector(".file-name");
const btnAddFile = document.querySelector(".btn-add-file");

fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  if (files.length === 0) {
    fileNameElement.textContent = "No file chosen";
  } else if (files.length === 1) {
    fileNameElement.textContent = files[0].name;
  } else {
    fileNameElement.textContent = `${files.length} files chosen`;
  }
});

btnAddFile.addEventListener("click", () => {
  fileInput.click();
});

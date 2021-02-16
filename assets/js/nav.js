function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}
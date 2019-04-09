function init() {
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "/stylesheets/quill.snow.css";
  document.getElementsByTagName("head")[0].appendChild(link);
}
init();
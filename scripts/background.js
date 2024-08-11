const site = window.location.hostname;

if (site.includes("coderunner.auckland.ac.nz")) {
  alert("coderunner");
  const html = document.documentElement;
  html.style.filter = "invert(1)";
}

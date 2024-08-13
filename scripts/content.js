const site = window.location.hostname;

if (site.includes("coderunner.auckland.ac.nz")) {
  const html = document.documentElement;
  // html.style.filter = "invert(1)";

  //WIP
  html.setAttribute("theme", "test");
}

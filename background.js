const site = window.location.hostname;

// alert("inject - js" + site); //TEST

const InjectCss = (css) => {
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
};

const createCustomElement = (element) => {};

if (site.includes("coderunner.auckland.ac.nz")) {
  const html = document.documentElement;
  html.style.filter = "invert(1)";
}

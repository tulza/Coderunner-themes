let isEnabled = true;
const themedisplay = document.getElementById("theme");
const debugdisplay = document.getElementById("debug");
const radios = document.getElementsByClassName("radio");
const resetButton = document.getElementById("reset");
const chromeStorage = chrome.storage.local;

const getDefault = () => document.querySelector('input[name="theme"]:checked').value;

const setDisplay = (displayTheme) => {
  themedisplay.innerHTML = displayTheme;
};

const setTheme = (theme) => {
  setDisplay(theme);
  // ! set local storage here
  chromeStorage.set({ theme: theme });
};

const reset = () => {
  const defaultTheme = "none";
  chromeStorage.clear();
  chromeStorage.set({ theme: defaultTheme });
  setRadioCheck(defaultTheme);
  setDisplay(defaultTheme);
};

const setRadioCheck = (theme) => {
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", () => setTheme(radios[i].value));
    if (radios[i].value === theme) {
      radios[i].checked = true;
      debugdisplay.innerHTML = radios[i].value;
    }
  }
};

// ? instance //////////////////////////////////////////////////////////////////////

let currentTheme = "";

// ! get local storage here
chromeStorage.get(["theme"], (result) => {
  if (result.theme) {
    currentTheme = result.theme;
    setDisplay(result.theme);
  }

  setRadioCheck(result.theme);
});

let page = "";
const abathing = () => {
  page = chrome.extension.getBackgroundPage();
};

resetButton.addEventListener("click", reset);
resetButton.addEventListener("click", () => {
  page = chrome.extension.getBackgroundPage();
  console.log(page);
});

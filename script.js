let Lightbulb = document.getElementById('Lightbulb');

function switchLightOnOff() {
  if (Lightbulb.innerText == "PÅ") {
    document.documentElement.style.cssText = "--light-color: rgb(31, 30, 30)";
    Lightbulb.innerText = "AV";
  }

  else {
    document.documentElement.style.cssText = "--light-color: rgb(255, 238, 0)";
    Lightbulb.innerText = "PÅ";
  }
}
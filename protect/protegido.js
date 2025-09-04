function isDesktop() {
  const ua = navigator.userAgent.toLowerCase();
  const mobileDevices = ['android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
  return !mobileDevices.some(device => ua.includes(device));
}

const urlParams = new URLSearchParams(window.location.search);
const acceso = urlParams.get("acceso");

if (acceso !== "libre" && isDesktop()) {
  window.location.href = "https://google.com";
}

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) {
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
    (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
    (e.ctrlKey && e.keyCode === 85) // Ctrl+U
  ) {
    window.location.href = "https://google.com";
    return false;
  }
};

setInterval(function () {
  const devtools = /./;
  devtools.toString = function () {
    window.location.href = "https://google.com";
  };
  console.log('%c', devtools);
}, 1000);
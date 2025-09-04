function isDesktop() {
  const ua = navigator.userAgent;

  // Detectar si es móvil por plataforma
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|Opera Mini/i.test(ua);

  // Detectar iPadOS 13+ que puede reportarse como Mac
  const isIPadOS = (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  return !(isMobile || isIPadOS);
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

// Cargar Google Analytics
(function() {
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CHVD0X7Q52';
  script.async = true;
  document.head.appendChild(script);
})();

// Inicializar Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-CHVD0X7Q52');

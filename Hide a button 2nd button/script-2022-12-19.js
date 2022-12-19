url = window.location.pathname;
if(url == '/public/test_station'){
  window.addEventListener('load', function () {
  document.querySelector("body > div:nth-child(25) > div > div > div.card-actions > a:nth-child(2)").hidden = true;
  })
};

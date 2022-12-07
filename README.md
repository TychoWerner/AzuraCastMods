# AzuraCastMods

Add a custom button to public page:
`url = window.location.pathname;
if(url == '/public/test_station'){
  window.addEventListener('load', function () {
  buttons = document.querySelector("body > div:nth-child(25) > div > div > div.card-actions").innerHTML;
  customButtonHtml = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="btn btn-sm btn-outline-secondary" role="button"><i aria-hidden="true" class="material-icons">podcasts</i>Podcast</a>'
  document.querySelector("body > div:nth-child(25) > div > div > div.card-actions").innerHTML = buttons + customButtonHtml;
  })
};`

Hide a button 2nd button:
`url = window.location.pathname;
if(url == '/public/test_station'){
  window.addEventListener('load', function () {
  document.querySelector("body > div:nth-child(25) > div > div > div.card-actions > a:nth-child(2)").hidden = true;
  })
};`


# AzuraCastMods

### Add a custom button to public page:
```
url = window.location.pathname;
if(url == '/public/test_station'){
  window.addEventListener('load', function () {
  buttons = document.querySelector("body > div:nth-child(25) > div > div > div.card-actions").innerHTML;
  customButtonHtml = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="btn btn-sm btn-outline-secondary" role="button"><i aria-hidden="true" class="material-icons">podcasts</i>Podcast</a>'
  document.querySelector("body > div:nth-child(25) > div > div > div.card-actions").innerHTML = buttons + customButtonHtml;
  })
};
```

### Hide a button 2nd button:
```
url = window.location.pathname;
if(url == '/public/test_station'){
  window.addEventListener('load', function () {
  document.querySelector("body > div:nth-child(25) > div > div > div.card-actions > a:nth-child(2)").hidden = true;
  })
};
```

### Modifications to the Azuracast Embed Player Widget

Replace the color hex values and font weight/size with what you need. Below #FF0000 (red) is used everywhere.
```
/*song title color */
[data-theme] body.embed .now-playing-title {
    color:  #FF0000;
}

/* artist name*/
[data-theme] body.embed .now-playing-artist {
    color: #FF0000;
  font-weight: bold; 
  font-size: 1.1em;
}

/* stream select button color */
#btn-select-stream {
    color: #FF0000;
}

/* buttons volume & play color */
[data-theme] body.embed .material-icons {
    color: #FF0000;
}

[data-theme] body.embed .material-icons.outlined.lg {
	color: #FF0000;
}
```
### Modifications to the Azuracast Embed Schedule Widget

```
/* center h & v playlist names on schedule page */
.page-minimal.schedule.embed .fc-event-title-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.1em;
}

.page-minimal.schedule.embed .fc-event-title.fc-sticky {
  text-align: center;
  color: #FF0000;
}
```
### Modifications to the Azuracast Embed History Widget

```
/* hide order column in history widget */
[data-theme] body.embed div.song strong.order {
    display:  none !important;
}

/* align "played x mn ago" to the right in history widget and add top padding */
[data-theme] body.embed div.song small.date-played.text-muted span {
  position: absolute;
  right: 5px;
  padding-top: 10px;
}
```

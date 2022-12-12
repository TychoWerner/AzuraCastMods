# AzuraCastMods

### Applying these mods:
These mods change functions or visual parts of the Public Pages inside of AzuraCast.
Currently modification you make apply to all stations on the same server. Keep this in mind.
Appling these can be done thru Administration -> Custom Branding -> Custom CSS for Public Pages & Custom JS for Public Pages

Every mod has a JS or CSS behind it, incidating where it should be put inside of Custom CSS or JS.
Not all mods with be compatible with all browsers, versions of AzuraCast or other mods. Try it out and let us know :)

Keep in mind that pasting in these codes should always be done with a matter of caution. It could have malicious intentions, if you found any please let it be known!

Also check out: https://docs.azuracast.com/en/administration/customization

![Powered by AzuraCast](https://i.imgur.com/JYvGQuM.png)


### Add a custom button to public page (JS)
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

### Hide a button 2nd button (JS)
```
url = window.location.pathname;
if(url == '/public/test_station'){
  window.addEventListener('load', function () {
  document.querySelector("body > div:nth-child(25) > div > div > div.card-actions > a:nth-child(2)").hidden = true;
  })
};
```

### Modifications to the Azuracast Embed Player Widget (CSS)

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
### Modifications to the Azuracast Embed Schedule Widget (CSS)

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
### Modifications to the Azuracast Embed History Widget (CSS)

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

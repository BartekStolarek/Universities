# universities

### Description
A VueJS app providing list of universities around the world.

### How it works
When user types something in the input area (name or country), app will send a request to the Universities API and assign received JSON to the array of objects. Then, when VueJS is rendering blocks with info about universities, it sends a request to CountryFlags API with country-code of each university and assign received flag to the block. There is also implemented auto-render mechanism- it means, that only few rows are rendered to improve the performance. When user scrolls down to the bottom of the page, app will automatically render next few rows.

### Technologies used in this project:
- VueJS
- Pure.css
- Google Fonts (Quicksand)
- FontAwesome CSS
- CountryFlags REST API (http://countryflags.io)
- Universities API (http://universities.hipolabs.com)


### Demo
http://universities.bartekstolarek.epizy.com

Unfortunately, REST API is not providing data with HTTPS, so make sure that you have CROSS Origin enabled in your browser.

### Screens
![Alt Text](https://image.ibb.co/ncUY5H/universities.gif)

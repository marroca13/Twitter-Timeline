# Refresh twitter image

This project aims to help you to set up a simple HTML page that forces the browser to reload an image using URL parameters.

[Live demo](https://hhkaos.github.io/refresh-img//?url=http://turiscam.comunitatvalenciana.com/calp.jpg&interval=1000&width=700&collapsed=true)

# How this code works

Parameters:
* **url**: <string> image URL
* **interval**: <int> refresh rate (in ms) | default: 2000ms
* **width**: <int> image width in pixels | default: 100%
* **collapsed**: <any value> allows you to set body's margin and padding to 0px | default: false 

Sample page:

```
https://hhkaos.github.io/refresh-img//?url=http://turiscam.comunitatvalenciana.com/calp.jpg&interval=1000&width=700&collapsed=true
```
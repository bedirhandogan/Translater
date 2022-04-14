# Translater

### Stage 1
You need to add this attribute to the html tags that you want to add a translation feature to, remember that this attr value must be the same as the value in your json file. In addition, if there is a version of an image made in more than one language, if you add this attr to the img tags and add the key you specified in json here, and if you write the image location where your images are located in the value section, it will work without problems.
You need to add this attribute to the html tags that you want to add a translation feature to, remember that this attr value must be the same as the value in your json file. In addition, if there is a version of an image made in more than one language, if you add this attr to the img tags and add the key you specified in json here, and if you write the image location where your images are located in the value section, it will work without problems.
```html
<p data-translater='value'>
```
### Stage 2
You should add this attr to the language sections in your dropdown. The value of this attr must be the same as the name of your json file.
```html
<li data-dropdown-item='value'>
```
### Stage 3
This attr will make the selected language appear first in the dropdown when your user changes the language.
```html
<span data-select-language="null">
```

### Stage 4
```javascript
Translater({
    default: 'TR', // Make sure your default language is the same as your JSON file name.
    location: 'lang', // Folder name where your language files are located
});
```

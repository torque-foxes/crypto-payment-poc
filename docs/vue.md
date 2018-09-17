## Vue Setup

The skeleton project comes ready with Vue installed. To start developing Vue components you'll simply need to update the
app.js file and wrap the page content so that Vue can do its stuff. These steps are detailed below.

### Update themes/mysite/src/js/app.js
```js
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('app');

  if (el === undefined || el === null) {
    return;
  }

  new Vue({ // eslint-disable-line no-new
    el: '#app',
    components: { },
    data: { },
  });
});

```

### Wrap page content
```html
<div id="app">
    Page html goes here
</div>
```
Note: vue replaces the HTML element targeted (ie. #app) so don't apply this to the body tag.

### Uninstalling Vue dependencies
If you don't need Vue as part of your project you can remove it as follows.
````
npm uninstall -save-dev eslint-plugin-vue vue-eslint-parser
npm uninstall -save vue
````
You can also remove `plugin:vue/essential` from `.eslintrc.json`:
```
  "extends": [
    "airbnb-base",
    "plugin:vue/essential"
  ],
```


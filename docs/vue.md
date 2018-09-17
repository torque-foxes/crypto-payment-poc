## Vue Setup

### Install dependencies
```
yarn add vue 
yarn add --dev vue-eslint-parser eslint-plugin-vue
```

### Update .eslintrc
```
  "extends": [
    "airbnb-base",
    "plugin:vue/essential"
  ],
```

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
This skeleton project comes configured with Vue installed. If it is not required as part of your preject you can remove
it as follows.
````
npm uninstall -save-dev eslint-plugin-vue vue-eslint-parser
npm uninstall -save vue
````



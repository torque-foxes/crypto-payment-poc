## Overview

Create a project skeleton for a SilverStripe 4 Platform project. Sets up an empty theme and nightwatch for testing.

## Installation

```
# Checkout the repo
git clone git@github.com:silverstripeltd/project-skeleton.git <yourproject> -o skeleton

# Change directory to your project
cd <yourproject>

# replace the remote origin with your own
git remote remove skeleton
git remote add origin git://git@whatever.com/your/project.git

# Run composer
composer install

# install yarn dependencies
yarn

# compile your CSS. This is empty initially
yarn dev

# create a .env file from the template
cp .env.example .env

# run a dev/build
vendor/bin/sake dev/build flush=1

# push to master
git push origin master
```

## Environment

Project teams should run their website consistently,
in order to help each other and avoid confusion by differences in configuration.
SilverStripe Ltd. prefers [Vagrant](https://www.vagrantup.com/).
Read the ["Vagrant" Confluence page](https://silverstripe.atlassian.net/wiki/spaces/DEV/pages/401506576/Vagrant)
for setup and usage details.

## Build Tools

* `yarn` install dependencies
* `yarn dev` builds dev js and scss
* `yarn watch` same as `yarn dev` but watches for changes
* `yarn production` minifies production files
* `yarn prod` alias for `yarn production`
* `yarn lint` lints your code
* `yarn hot` **unsupported** hot module reloading


## Acceptance Tests

Nightwatch with cucumber is setup and ready to go. To run the tests you can run `yarn nightwatch`.

If you need to run against a custom host name (localhost is default), you can add a custom file named `.nightwatch.custom.json` with the following content:

```
{
  "test_settings": {
    "default": {
      "launch_url": "http://mycustomdomain"
    }
  }
}
```

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

## Storybook

### Overview
Storybook is an environment for developing UI components and allows us to maintain a library of components that can be shared between developers/teams.
More information can be found at <https://storybook.js.org>

### Storybook Addons
The default setup for Storybook simply renders the component to the page. There are a number of addons that allow inclusion
of such things as component info, source code, component property summaries etc.
The project currently includes the following add ons:
- viewport: see the component in various screen sizes/orientations
- knobs: makes component properties dynamic so that you can play around and test different component states
- links: link stories together
- actions: inspect/document events relating to your component
- storybook-addon-vue-info: shows component information including description, story source and property table.

NB: There seems to be a bug with the rendering of the addon tabs rendered in the bottom of the storybook page. Since we 
are currently using an alpha release, this will hopefully be resolved in the near future.

### File Structure
Components can first be developed in isolation from the SilverStripe site, using Storybook as a platform for verifying the components along with its various states.

New components will typically be placed in the `themes/app/src/js/components` directory. Whilst developing the component you can create a corresponding Storybook story in './storybook/stories'.

### Example Story
```import { storiesOf } from '@storybook/vue';

import MyButton from '../../themes/app/src/js/components/MyButton.vue';
import '../../themes/app/dist/app.css';

storiesOf('Styleguide', module)
  .addDecorator((storyFn, context) => withInfo()(storyFn)(context))
  .add('Buttons', () => ({
    template: `
      <div>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <button type="button" class="btn btn-link">Link</button>
      </div>
    `,
  }));
```
Starting with the 'storiesOf' function to define which 'chapter' to add the story to, specify any decorators(addons) you
wish to apply to the story, and then add the story with the template required to define and render the documented
component in the storybook page.

### Future Storybook development
There are currently limitations with Storybook in that React and Vue components have to be added to separate Storybooks
(with Storybook/Vue and Storybook/React libraries) so the current storybook implementation focuses on Vue
component development. There are plans for Storybook to address this in future releases, and to also allow inclusion of HTML snippets.
This would allow for the Styleguide and Wecome pages to be pure HTML files rather than the current necessity to wrap
them into a Vue component.

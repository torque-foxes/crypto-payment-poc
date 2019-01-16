## CWP setup

In order to use the project skeleton on a CWP project, you can simply require the cwp recipe with composer.

```bash
$ composer require cwp/cwp-recipe-core
```

### Wātea theme

Sometimes projects require the watea theme as a base, firstly you'll need to install it (and additional dependencies) with composer.

```bash
$ composer require cwp/watea-theme cwp/cwp cwp/agency-extensions
```

Ensure the starter and watea theme are added to the `.gitignore` file, then add them both to your theme config as follows:

```yaml
# config.yml
SilverStripe\View\SSViewer:
  themes:
    - 'app'
    - 'watea'
    - 'starter'
    - '$default'
```

You can then setup `themes/app/src/app.scss` to use watea as a base for its css:

```scss
// themes/app/src/app.scss
@import 'variables';
@import '../../../watea/src/scss/main';
@import 'other-custom-files';
```

Note: you will need to do a `yarn install` in the starter theme directory to get the required dependencies for building the css.

You'll also want to adjust your template files to match the Wātea theme (Page.ss, Header.ss and Footer.ss) or you could also:
- Remove these templates:
    - `themes/app/templates/Layout/Page.ss`
    - `themes/app/templates/Includes/Footer.ss`
    - `themes/app/templates/Includes/Header.ss`
- Copy the `<body>` from `themes/watea/templates/Page.ss` to `themes/app/templates/Page.ss`. The updated body html should look like this:
```
<body class="$ClassName
    <% if $SiteConfig.MainFontFamily %>theme-font-{$SiteConfig.MainFontFamily}<% end_if %>
    <% if $SiteConfig.HeaderBackground %>theme-header-{$SiteConfig.HeaderBackground}<% end_if %>
    <% if $SiteConfig.NavigationBarBackground %>theme-nav-{$SiteConfig.NavigationBarBackground}<% end_if %>
    <% if $SiteConfig.CarouselBackground %>theme-carousel-{$SiteConfig.CarouselBackground}<% end_if %>
    <% if $SiteConfig.FooterBackground %>theme-footer-{$SiteConfig.FooterBackground}<% end_if %>
    <% if $SiteConfig.AccentColor %>theme-accent-{$SiteConfig.AccentColor}<% end_if %>
    <% if $SiteConfig.TextLinkColor %>theme-link-{$SiteConfig.TextLinkColor}<% end_if %>">
    <header class="header">
        <% include Header %>
        <% include MainNav %>
    </header>
    <main id="main" class="main">
        $Layout
    </main>
    <% include PageShowcase %>
    <footer class="footer-site">
        <% include Footer %>
    </footer>

    <% require javascript('//code.jquery.com/jquery-3.3.1.min.js') %>
    <% require javascript('themes/starter/dist/js/main.js') %>
    <% require javascript('themes/watea/dist/js/main.js') %>
    <% include GoogleAnalytics %>

    <% if $IsDev %>
        <% require themedJavascript("dist/app") %>
    <% else %>
        <% require themedJavascript("dist/app.min") %>
    <% end_if %>
</body>
```

To fix the CSS issues with Bootstrap:
 - Remove all bootstrap and typography imports from `themes/app/src/scss/app.scss`
 - Remove `img` styles from `typography.scss` or remove the whole file if there's no custom typography styling


#### Wātea Plus (Optional)

This feature allows CMS users to adjust site fonts and colours. It requires CWP 2.x and is disabled by default.
Follow this [documentation](https://github.com/silverstripe/cwp-agencyextensions/blob/master/docs/en/01_Features/ThemeColors.md) to enable it.

For custom fonts and colors, add new ones to `config.yml`
```yaml
SilverStripe\SiteConfig\SiteConfig:
  // Theme color picker enabled
  enable_theme_color_picker: true
  // Add new font
  theme_fonts:
    aleo: Aleo
  // Add new colors
  theme_colors:
    teal:
      Color: '#A4D3D3' // Adjusting the default teal color
    light-blue:
      Title: 'Light blue'
      CSSClass: 'light-blue'
      Color: '#C3E8FE'
    light-yellow:
      Title: 'Light yellow'
      CSSClass: 'light-yellow'
      Color: '#F8FDBF'
```

and `_variables.scss` to match the color in css. If the new colors are light, add them to `$custom-light-colors`
so when they are used as background, a dark grey font color will be used against it.

```scss
$custom-theme-fonts: (
  aleo: (
    'Aleo',
    'sans-serif'
  )
);
$custom-theme-colors: (
  'teal': #A4D3D3, // Adjusting existing teal color
  'light-blue': #C3E8FE,
  'light-yellow': #F8FDBF
);
$custom-light-colors: (
  'light-blue': #C3E8FE,
  'light-yellow': #F8FDBF
);
```

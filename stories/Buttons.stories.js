import { storiesOf } from "@storybook/vue3";

storiesOf("Styleguide/Buttons", module)
  .add("Buttons", () => ({
    template: `
        <div>
          <button type="button" class="btn btn-primary">Primary</button>
          <br><br>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <br><br>
          <button type="button" class="btn btn-success">Success</button>
          <br><br>
          <button type="button" class="btn btn-danger">Danger</button>
          <br><br>
          <button type="button" class="btn btn-warning">Warning</button>
          <br><br>
          <button type="button" class="btn btn-info">Info</button>
          <br><br>
          <button type="button" class="btn btn-light">Light</button>
          <br><br>
          <button type="button" class="btn btn-dark">Dark</button>
          <br><br>
          <button type="button" class="btn btn-link">Link</button>
        </div>
      `,
  }))
  .add("Button links", () => ({
    template: `
        <div>
          <a href="#" class="btn btn-primary">Primary</button>
          <br><br>
          <a href="#" class="btn btn-secondary">Secondary</button>
          <br><br>
          <a href="#" class="btn btn-success">Success</button>
          <br><br>
          <a href="#" class="btn btn-danger">Danger</button>
          <br><br>
          <a href="#" class="btn btn-warning">Warning</button>
          <br><br>
          <a href="#" class="btn btn-info">Info</button>
          <br><br>
          <a href="#" class="btn btn-light">Light</button>
          <br><br>
          <a href="#" class="btn btn-dark">Dark</button>
          <br><br>
          <a href="#" class="btn btn-link">Link</button>
        </div>
      `,
  }))
  .add("Button links (external)", () => ({
    template: `
        <div>
          <a href="https://example.org" target="_blank" rel="noopener" class="btn btn-primary">Primary</button>
          <br><br>
          <a href="https://example.org" target="_blank" rel="noopener" class="btn btn-secondary">Secondary</button>
          <br><br>
          <a href="https://example.org" target="_blank" rel="noopener" class="btn btn-success">Success</button>
          <br><br>
          <a href="https://example.org" target="_blank" rel="noopener" class="btn btn-danger">Danger</button>
          <br><br>
          <a href="https://example.org" target="_blank" rel="noopener" class="btn btn-warning">Warning</button>
          <br><br>
          <a href="https://example.org" target="_blank" rel="noopener" class="btn btn-info">Info</button>
          <br><br>
          <a href="https://example.org" target="_blank" rel="noopener" class="btn btn-light">Light</button>
          <br><br>
          <a href="https://example.org" target="_blank" rel="noopener" class="btn btn-dark">Dark</button>
          <br><br>
          <a href="https://example.org" target="_blank" rel="noopener" class="btn btn-link">Link</button>
        </div>
      `,
  }))
;

## Acceptance Tests

Nightwatch with cucumber is setup and ready to go.

To run the tests you can run `yarn nightwatch`.

To run tests with tags, use the `--tag` and `--skiptags` command line flags:
```html
yarn nightwatch --tag search // run tag search
yarn nightwatch --tag search --tag something_else // run multiple tags
yarn nightwatch --skiptags search // skip search test
yarn nightwatch --skiptags login,something_else // skip search and something_else tests
```

If you need to run against a custom host name (localhost is default), you can do one of the following options:

### Specify URL (every time)

Run the command with `yarn nightwatch --url http://my-custom-url/`.

### Add a custom file (one time setup)

Add a file at the root of the project called `.nightwatch.custom.json`. Add this JSON into the file and nightwatch will use this config for determining the URL of the site

```json
{
  "test_settings": {
    "default": {
      "launch_url": "http://my-custom-url"
    }
  }
}
```

# Mashape Embed Documentation

## Usage

Use the following HTML snippet inside your `<body>`, be sure to replace `MASHAPE-USERNAME` and `MASHAPE-API` with your Mashape username and API Name.

```html
<div id="mashape-docs-container"></div>

<script type="text/javascript">
  (function (window) {
    if (!window._MashapeConfig) window._MashapeConfig = [];

    window._MashapeConfig.push({
      selector: '#mashape-docs-container',
      user: 'MASHAPE-USERNAME',
      api: 'MASHAPE-API'
    });

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../build/embed.js';
    script.async = true;
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
  }(window));
</script>
```

### Build project for develop

```bash
# Install dependencies
$ npm install
# Build embed script and watch file changes
$ grunt
```

After that you can view [test/index.html](test/index.html) file in your browser.

### Deploying Changes

The static files are hosted using Github Pages + Cloudflare

```bash
$ grunt deploy
```

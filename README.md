# Mashape API Documentation Embed Widget

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
    script.src = '//mashape.github.io/embed/docs.js';
    script.async = true;
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
  }(window));
</script>
```

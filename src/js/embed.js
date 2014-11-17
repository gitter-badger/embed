(function (window, undefined) {
  window.Mashape = window.Mashape || {};

  // Polyfill for Array.isArray() if it's not natively available.
  if (!Array.isArray) {
    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }

  var cache = {};

  Doc.DEFAULTS = {
    apiURL: 'https://api-new.mashape.com/v1/',
    payload: {
      arrayCount: true,
      include: [
        'endpoints',
        'endpoints.headers',
        'endpoints.routeparameters',
        'endpoints.parameters',
        'endpoints.payload',
        'endpoints.response',
        'endpoints.response.headers',
        'endpoints.payload.headers',
        'endpoints.group'
      ]
    },
    template: '<!-- include "../../.tmp/templates/index.html" -->',
    style: '<!-- include "../../.tmp/css/styles.css" -->'
  };

  /**
   * Mashape Doc constructor
   * @param {Object} options
   * @constructor
   */

  function Doc(options) {
    var _this = this;

    _this.options = _this.merge(Doc.DEFAULTS, options);
    _this.container = _this.setup();

    _this.getData(function (data) {
      _this.container.innerHTML = _this.tmpl(_this.options.template, {
        groups: _this.groupEndpoints(data.endpoints.data)
      });
    });
  }

  /**
   * Setup HTML and render loading message
   * @returns {HTMLElement}
   */

  Doc.prototype.setup = function () {
    var style = document.createElement('style');
    var container = document.createElement('div');
    var element = document.querySelector(this.options.selector);

    style.innerHTML = this.options.style;
    container.classList.add('mashape-doc');
    container.innerHTML = 'Loading documentation...';

    element.appendChild(style);
    element.appendChild(container);

    return container;
  };

  /**
   * Get data from Mashape Docs API
   * @param {Function} callback - callback, that will be executed after getting response
   */

  Doc.prototype.getData = function (callback) {
    var _this = this;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200 && xmlhttp.responseText) {
          return callback(JSON.parse(xmlhttp.responseText));
        }

        _this.container.innerHTML = 'There was an error loading the documentation.' +
            ' If you are the owner of this API, you may need to make this API public on Mashape.';
      }
    };

    xmlhttp.open('GET',
            this.options.apiURL + 'accounts/' +
            this.options.user + '/apis/' +
            this.options.api + '/versions/current?' +
            this.querystring(this.options.payload),
        true);

    xmlhttp.send();
  };

  /**
   * Group API endpoints by group name
   * @param {Array} endpoints - endpoints to group
   * @returns {Object}
   */

  Doc.prototype.groupEndpoints = function (endpoints) {
    var groups = {};

    for (var i = 0, current; i < endpoints.length; i++) {
      current = endpoints[i];

      if (!(current.group.name in groups)) {
        groups[current.group.name] = [];
      }

      groups[current.group.name].push(current);
    }

    return groups;
  };

  /**
   * Simple JavaScript Templating
   * John Resig - http://ejohn.org/ - MIT Licensed
   * @param {String} str - string ID selector or template
   * @param {Object} data - data object to render
   * @returns {String}
   */

  Doc.prototype.tmpl = function tmpl(str, data) {
    var fn = !/\W/.test(str) ?
        cache[str] = cache[str] ||
            tmpl(document.getElementById(str).innerHTML) :

        new Function("obj",
                "var p=[],print=function(){p.push.apply(p,arguments);};" +
                "with(obj){p.push('" +
                str
                    .replace(/[\r\t\n]/g, " ")
                    .split("<%").join("\t")
                    .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                    .replace(/\t=(.*?)%>/g, "',$1,'")
                    .split("\t").join("');")
                    .split("%>").join("p.push('")
                    .split("\r").join("\\'")
                + "');}return p.join('');");

    return data ? fn(data) : fn;
  };

  /**
   * Merge multiple objects between themselves
   * @returns {Object}
   */

  Doc.prototype.merge = function () {
    var obj = {};

    for (var i = 0; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          obj[key] = arguments[i][key];
        }
      }
    }

    return obj;
  };

  /**
   * Converts object to query string
   * @param {Object} obj - object to convert
   * @returns {String}
   */

  Doc.prototype.querystring = function (obj) {
    return obj ? Object.keys(obj).map(function (key) {
      var val = obj[key];

      if (Array.isArray(val)) {
        return val.map(function (val2) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
        }).join('&');
      }

      return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
  };

  /**
   * Initialize widget with passed config
   * _MashapeConfig can be object or array
   */

  if (Array.isArray(window._MashapeConfig)) {
    if (!window.Mashape.Doc) window.Mashape.Doc = [];

    for (var i = 0; i < window._MashapeConfig.length; i++) {
      window.Mashape.Doc.push(new Doc(window._MashapeConfig[i]));
    }
  } else {
    window.Mashape.Doc = new Doc(window._MashapeConfig);
  }
}(window));
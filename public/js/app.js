/**
 * Global data
 */

let data = {transpiled : '', ast : ''};

const editor = new CodeFlask (
  document.querySelector ('#code'),
  {language : 'js', lineNumbers : true}
);

const result = new CodeFlask (
  document.querySelector ('#result'),
  {language : 'js', lineNumbers : true, readonly : true}
);

const transpiled   = document.querySelector ('#transpiled');
const ast          = document.querySelector ('#ast');
const message      = document.querySelector ('#message');
const consoleOpen  = document.querySelector ('#console-open');
const consolePanel = document.querySelector ('#console');

/**
 * Event listeners
 */

// Transpiled tab
transpiled.addEventListener ('click', () => {
  transpiled.classList.add ('selected');
  ast.classList.remove ('selected');
  result.updateCode (data.transpiled);
});

// AST tab
ast.addEventListener ('click', () => {
  transpiled.classList.remove ('selected');
  ast.classList.add ('selected');
  result.updateCode (data.ast);
});

// Run button
document.querySelector ('#run').addEventListener ('click', () => {
  consoleOpen.checked    = true;
  consolePanel.innerHTML = '';
  analyze ((resultValues) => {
    try {
      const targetCode = `
        const console = {
          log (...args) {
            consolePanel.innerHTML += '<div class="log"><div class="time">' + time () + ' </div><pre class="msg">' + [...args]
                .map (show)
                .join (' ') + '</pre></div>';
          },
          error (...args) {
            consolePanel.innerHTML += '<div class="error"><div class="time">' + time () + ' </div><pre class="msg">' + [...args]
                .map (show)
                .join (' ') + '</pre></div>';
          },
          info : this.log,
          warn : this.log
        };
        ${ resultValues.transpiled };
      `;
      (new Function (targetCode)) ();
    } catch (err) {
      consolePanel.innerHTML += '<p style="color: rgb(255,0,0)"><span style="opacity: 0.7">' + time () + ' </span>' + err.message + '</p>';
    }
  });
});

// Transform button
document.querySelector ('#analyze').addEventListener ('click', () => {
  analyze ();
});

// Clear console button
document.querySelector('#console-clear').addEventListener('click', () => {
  consolePanel.innerHTML = '';
})

// Share link button
document.querySelector ('#shareit').addEventListener ('click', () => {
  const sourceCode   = editor.getCode ();
  const compressCode = LZString.compressToBase64 (sourceCode);
  const urlCode      = 'https://javascriptdecorators.org?source=' + encodeURIComponent (compressCode);
  
  fetch ('https://api.short.io/links/public', {
    method  : 'post',
    headers : {
      'accept'        : 'application/json',
      'Content-Type'  : 'application/json',
      'authorization' : 'TwuBiPBuWidiu75VIVklwvUlIRxuyYUT'
    },
    body    : JSON.stringify ({
      'domain'      : 'link.javascriptdecorators.org',
      'originalURL' : urlCode
    })
  }).then (function (response) {
    return response.json ();
  }).then (function (res) {
    return navigator.clipboard.writeText (res.shortURL);
  }).then (() => {
    message.innerHTML = 'URL copied to clipboard';
    setTimeout (() => message.innerHTML = '', 4000);
  });
});

/**
 * Get the current URL query string parameter
 * @param {string} name
 * @param {string} url
 * @returns {string|null}
 */
function getParameterByName (name, url = window.location.href) {
  name        = name.replace (/[\[\]]/g, '\\$&');
  var regex   = new RegExp ('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec (url);
  if (!results) return null;
  if (!results[ 2 ]) return '';
  return decodeURIComponent (results[ 2 ].replace (/\+/g, ' '));
}

/**
 * Transform the source code
 */
function analyze (callback) {
  result.updateCode ('loading...');
  fetch ('/parser/', {
    method  : 'POST',
    headers : {
      'Content-Type' : 'text/plain; charset=utf-8'
    },
    body    : editor.getCode ()
  }).then (res => {
    if (res.status === 200) {
      return res.json ();
    }
    return 'error ' + res.status;
  }).then (res => {
    if (res.error) {
      data.ast        = `{"Error": ${ res.error }}`;
      data.transpiled = `{"Error": ${ res.error }}`;
    } else {
      data.ast        = JSON.stringify (res.ast, null, 2);
      data.transpiled = res.transpiled;
    }
    result.updateCode (
      ast.classList.contains ('selected') ?
        data.ast :
        data.transpiled
    );
    if (typeof callback === 'function') {
      callback (data);
    }
  });
}

/**
 * Return the current time with local format
 * @returns {string}
 */
function time () {
  const d = new Date ();
  return new Intl.DateTimeFormat (
    'default',
    {hour : 'numeric', minute : 'numeric', second : 'numeric'}
  ).format (d) + '.' + String(d.getMilliseconds()).padStart(3, '0');
}

/**
 * Prepare value to print into the console
 * @param value
 * @returns {string}
 */
function show (value) {
  if (typeof value === 'undefined') {
    return 'undefined';
  }
  if (typeof value === 'function') {
    return '[Function]'
  }
  if (typeof value === 'symbol') {
    return 'Symbol()'
  }
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'object') {
    return JSON.stringify (value, (k, v) => {
      // Filtering out properties
      if (typeof v === 'function') {
        return '[Function]';
      }
      if (typeof v === 'undefined') {
        return 'undefined';
      }
      if (typeof v === 'symbol') {
        return 'Symbol()';
      }
      return v;
    }, 2);
  }
  return value;
}

/**
 * Initialization
 */

fetch ('/version/').then (res => {
  if (res.status === 200) {
    return res.json ();
  }
}).then (res => {
  document.querySelector ('#version').innerHTML = res ? res.version : '';
});


const paramSource = getParameterByName ('source');

if (paramSource) {
  const decompressCode = LZString.decompressFromBase64 (paramSource);
  // console.log('paramSource', paramSource);
  // console.log('decompressCode', decompressCode);
  editor.updateCode (decompressCode);
} else {
  editor.updateCode (`/*
 * At this moment, the transpiler only supports
 * - class decorator
 * - public method, getter/setter and field decorators
 * - private method, getter/setter decorator.
 */

function decorator(value, context) {
  console.log('decorator call');
  console.log('value', value);
  console.log('context', context);
}

@decorator
class C {

  @decorator
  p = 10;
  
  @decorator
  m() {}
  
  @decorator
  get x() {}
  
  @decorator
  set x(v) {}
  
}`);
}
analyze ();

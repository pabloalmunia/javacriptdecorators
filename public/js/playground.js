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
    run(consolePanel, resultValues.transpiled);
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
 * Initialization
 */
const paramSource = getParameterByName ('source');

if (paramSource) {
  const decompressCode = LZString.decompressFromBase64 (paramSource);
  editor.updateCode (decompressCode);
} else {
  editor.updateCode (`/*
 * Very simple example
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

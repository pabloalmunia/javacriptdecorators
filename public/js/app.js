let data          = {transpiled : '', ast : ''};
const editor      = new CodeFlask (
  document.querySelector ('#code'),
  {language : 'js', lineNumbers : true}
);
const result      = new CodeFlask (
  document.querySelector ('#result'),
  {language : 'js', lineNumbers : true, readonly : true}
);

const transpiled = document.querySelector ('#transpiled');
const ast        = document.querySelector ('#ast');

transpiled.addEventListener ('click', () => {
  transpiled.classList.add ('selected');
  ast.classList.remove ('selected');
  result.updateCode (data.transpiled);
});

ast.addEventListener ('click', () => {
  transpiled.classList.remove ('selected');
  ast.classList.add ('selected');
  result.updateCode (data.ast);
});

document.querySelector ('#analyze').addEventListener ('click', () => {
  analyze();
});
fetch ('/version/').then (res => {
  if (res.status === 200) {
    return res.json ();
  }
}).then (res => {
  document.querySelector ('#version').innerHTML = res ? res.version : '';
});

const message = document.querySelector ('#message');

document.querySelector ('#shareit').addEventListener ('click', () => {
  
  var data = {
    'domain'      : 'link.javascriptdecorators.org',
    'originalURL' : 'https://javascriptdecorators.org?source=' + LZString.compressToBase64 (editor.getCode ())
  };
  fetch ('https://api.short.io/links/public', {
    method  : 'post',
    headers : {
      'accept'        : 'application/json',
      'Content-Type'  : 'application/json',
      'authorization' : 'TwuBiPBuWidiu75VIVklwvUlIRxuyYUT'
    },
    body    : JSON.stringify (data)
  }).then (function (response) {
    return response.json ();
  }).then (function (data) {
    return navigator.clipboard.writeText (data.shortURL);
  }).then (() => {
    message.innerHTML = 'URL copied to clipboard';
    setTimeout (() => message.innerHTML = '', 4000);
  });
});

function getParameterByName (name, url = window.location.href) {
  name        = name.replace (/[\[\]]/g, '\\$&');
  var regex   = new RegExp ('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec (url);
  if (!results) return null;
  if (!results[ 2 ]) return '';
  return decodeURIComponent (results[ 2 ].replace (/\+/g, ' '));
}

function analyze() {
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
  });
}

const paramSource = getParameterByName ('source');
if (paramSource) {
  editor.updateCode (LZString.decompressFromBase64 (paramSource));
} else {
  editor.updateCode (`/*
 * At this moment, the transpiler only supports
 * class and public member decorators.
 */
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
analyze();

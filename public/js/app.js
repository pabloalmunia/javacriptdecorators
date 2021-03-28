let data   = {transpiled : '', ast : ''};
const editor = new CodeFlask (
  document.querySelector ('#code'),
  {language : 'js', lineNumbers : true}
);
const result = new CodeFlask (
  document.querySelector ('#result'),
  {language : 'js', lineNumbers : true}
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
    data.ast        = JSON.stringify ( res.ast, null, 2);
    data.transpiled = res.transpiled;
    result.updateCode (
      ast.classList.contains('selected') ?
        data.ast :
        data.transpiled
    );
  });
});
fetch ('/version/').then (res => {
  if (res.status === 200) {
    return res.json ();
  }
}).then (res => {
  document.querySelector ('#version').innerHTML = res ? res.version : '';
});

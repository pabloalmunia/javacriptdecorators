const editor = new CodeFlask(document.querySelector('#code'), {language: 'js', lineNumbers: true});
const result = new CodeFlask(document.querySelector('#result'), {language: 'js'});

document.querySelector ('#analyze').addEventListener ('click', () => {
  result.updateCode( 'loading...');
  fetch ('/parser/', {
    method  : 'POST',
    headers : {
      'Content-Type' : 'text/plain; charset=utf-8'
    },
    body    : document.querySelector ('#code').value
  }).then (res => {
    if (res.status === 200) {
      return res.json ();
    }
    return 'error ' + res.status;
  }).then (ast => {
    result.updateCode( JSON.stringify (ast, null, 2));
  });
});
fetch ('/version/').then (res => {
  if (res.status === 200) {
    return res.json ();
  }
}).then (res => {
  document.querySelector ('#version').innerHTML = res ? res.version : '';
});

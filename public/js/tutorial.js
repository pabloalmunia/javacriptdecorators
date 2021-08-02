const result  = document.querySelector ('#console');
const editor  = new CodeFlask (
  document.querySelector ('#code'),
  {language : 'js', lineNumbers : true}
);
const execute = (() => {
  let timer;
  let controller;
  return function () {
    result.innerHTML = '<div class="log">&nbsp;...</div>';
    clearTimeout (timer);
    if (controller) {
      controller.abort ();
    }
    timer = setTimeout (() => {
      controller = new AbortController ();
      fetch ('/parser/', {
        method  : 'POST',
        headers : {
          'Content-Type' : 'text/plain; charset=utf-8'
        },
        body    : editor.getCode (),
        signal  : controller.signal
      }).then (res => {
        controller = null;
        if (res.status === 200) {
          return res.json ();
        }
        console.error (res);
      }).then (res => {
        run (result, res.transpiled);
      }).catch (err => {
        controller = null;
        console.error (err);
      });
    }, 1000);
  };
}) ();

editor.onUpdate ((code) => {
  if (!code.trim ()) {
    return run (result, '');
  }
  execute ();
});

const sections = [...document.querySelectorAll ('section')];
let active     = document.querySelector ('section.active');

document.querySelector ('#total').innerHTML = sections.length;
document.querySelector ('.prev').addEventListener ('click', setPrev);
document.querySelector ('.next').addEventListener ('click', setNext);
document.querySelector ('#resolve').addEventListener ('click', setResolve);
document.querySelector ('#reset').addEventListener ('click', setCode);
const navigator = document.querySelector ('#navigator');
for (let section of sections) {
  const option     = document.createElement ('option');
  option.innerHTML = section.querySelector ('h2').innerText;
  option.value     = section.id;
  navigator.appendChild (option);
}
navigator.addEventListener('change', (evt) => {
  setActive(getSectionById (navigator.value));
})

if (!active) {
  const hashSection = getSectionById (location.hash.substring (1));
  setActive (hashSection !== -1 ? hashSection : 0);
}

function getSectionById (id) {
  return sections.findIndex (el => el.id === id);
}

function getActivePosition () {
  return sections.findIndex (el => el === active);
}

function setActive (n) {
  const next = sections[ n ];
  if (!next) {
    return;
  }
  if (active) {
    active.classList.remove ('active');
  }
  active = next;
  active.classList.add ('active');
  document.querySelector ('#current').innerHTML     = n + 1;
  document.querySelector ('.prev').style.visibility = n === 0 ? 'hidden' : 'inherit';
  // document.querySelector ('.prev #prev').innerHTML  = getPrevTitle ();
  document.querySelector ('.next').style.visibility = n === sections.length - 1 ?
    'hidden' :
    'inherit';
  document.querySelector ('.next #next').innerHTML  = getNextTitle ();
  setCode ();
  location.hash   = active.id;
  navigator.value = active.id;
}

function setNext () {
  const n = getActivePosition ();
  if (n != -1 && n < sections.length + 1) {
    setActive (n + 1);
  }
}

function setPrev () {
  const n = getActivePosition ();
  if (n > 0) {
    setActive (n - 1);
  }
}

function getNextTitle () {
  const n = getActivePosition ();
  if (n !== -1 && n != sections.length - 1) {
    return sections[ n + 1 ].querySelector ('h2').innerText;
  }
  return '';
}

function getPrevTitle () {
  const n = getActivePosition ();
  if (n !== -1 && n !== 0) {
    return sections[ n - 1 ].querySelector ('h2').innerText;
  }
  return '';
}

function setCode () {
  const code = active.querySelector ('script[type=origin]');
  editor.updateCode (code ? code.innerHTML.trim () : '');
}

function setResolve () {
  const code = active.querySelector ('script[type=resolve]');
  editor.updateCode (code ? code.innerHTML.trim () : '');
}



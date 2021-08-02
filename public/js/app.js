/* Get version */
fetch ('/version/').then (res => {
  if (res.status === 200) {
    return res.json ();
  }
}).then (res => {
  document.querySelector ('#version').innerHTML = res ? res.version : '';
});


/**
 * Return the current time with local format
 * @returns {string}
 */
function time () {
  const d = new Date ();
  return new Intl.DateTimeFormat (
    'default',
    {hour : 'numeric', minute : 'numeric', second : 'numeric'}
  ).format (d) + '.' + String (d.getMilliseconds ()).padStart (3, '0');
}

/**
 * Prepare value to print into the console
 * @param value
 * @returns {string}
 */
function show (value, margin = '  ') {
  if (typeof value === 'string') {
    return '"' + value + '"';
  }
  if (typeof value === 'undefined') {
    return 'undefined';
  }
  if (typeof value === 'function') {
    return '[Function]';
  }
  if (typeof value === 'symbol') {
    return '[Symbol(' + (value.description || '') + ')]';
  }
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'object') {
    const isArray = Array.isArray(value);
    let result = (isArray ? '[' : '{') + '\n';
    let first   = true;
    (isArray ? Object.keys(value) : Reflect.ownKeys (value))
      .forEach (prop => {
        if (first) {
          first = false
        } else {
          result += ',\n'
        }
        result += margin + (isArray ? '' : show(prop) + ': ') + show(value[ prop ], margin + '  ');
      })
    result += '\n' + margin.substring(0, margin.length - 2) + (isArray ? ']' : '}');
    return result;
  }
  return value;
}



let __panel;

function run (panel, code) {
  try {
    __panel           = panel;
    __panel.innerHTML = '';
    if (!code) {
      return;
    }
    console          = {
      log (...args) {
        __panel.innerHTML += '<div class="log"><div class="time">' + time () + ' </div><pre class="msg">' + [...args]
          .map (v => show(v))
          .join (' ') + '</pre></div>';
      },
      warn (...args) {
        __panel.innerHTML += '<div class="warn"><div class="time">' + time () + ' </div><pre class="msg">' + [...args]
          .map (v => show(v))
          .join (' ') + '</pre></div>';
      },
      error (...args) {
        __panel.innerHTML += '<div class="error"><div class="time">' + time () + ' </div><pre class="msg">' + [...args]
          .map (v => show(v))
          .join (' ') + '</pre></div>';
      },
      assert (assertion, ...args) {
        if (!assertion) {
          console.error ('Assertion error', ...args);
        }
      }
    };
    const script     = document.createElement ('script');
    script.type      = 'module';
    script.id        = '_script_' + Math.random ().toString (32).substring (2);
    script.innerHTML = code;
    window.onerror = (err) =>  console.error(err);
    setTimeout (
      () => document.querySelector ('body').removeChild (document.querySelector (`#${ script.id }`)),
      100
    );
    document.querySelector ('body').appendChild (script);
  } catch (err) {
    panel.innerHTML += '<p style="color: rgb(255,0,0)"><span style="opacity: 0.7">' + time () + ' </span>' + err.message + '</p>';
  }
}
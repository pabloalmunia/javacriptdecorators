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
function show (value) {
  if (typeof value === 'undefined') {
    return 'undefined';
  }
  if (typeof value === 'function') {
    return '[Function]';
  }
  if (typeof value === 'symbol') {
    return 'Symbol()';
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
          .map (show)
          .join (' ') + '</pre></div>';
      },
      warn (...args) {
        __panel.innerHTML += '<div class="warn"><div class="time">' + time () + ' </div><pre class="msg">' + [...args]
          .map (show)
          .join (' ') + '</pre></div>';
      },
      error (...args) {
        __panel.innerHTML += '<div class="error"><div class="time">' + time () + ' </div><pre class="msg">' + [...args]
          .map (show)
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
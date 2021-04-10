(function (root) {
  const TAB   = '  ';
  const SPACE = ' ';
  
  const safeStringify = (obj, replacer, spaces) => {
    try {
      return JSON.stringify (
        obj,
        ((replacer) => {
          let stack = new WeakSet;
          return (key, value) => {
            if (typeof value === 'object' && null !== value) {
              if (stack.has (value)) {
                value = "[Circular ~]"
              } else {
                stack.add (value)
              }
            }
            return replacer == null ? value : replacer.call (this, key, value)
          }
        }) (),
        spaces);
    } catch (err) {
      return '';
    }
  };
  
  function inspectObject (obj, objName) {
    const result = [];
    const size   = {name : 0, origin : 0};
    let level    = 1;
    
    (function inspect (o) {
      
      const add = (name, prefix, descriptor, strValue) => {
        let line    = Object.assign ({}, descriptor, {
          name     : name,
          strName  : prefix + name.toString (),
          origin   : !prefix && name === '__proto__' ?
            '' :
            (obj === o ?
                'this' :
                `${ o.name ? o.name : `${ o.constructor.name }.prototype` }`
            ) +
            (typeof name === 'symbol' ?
                `[${ name.toString () }]` :
                `.${ name }`
            ),
          strValue : (name === '__proto__' || name === 'prototype') && strValue !== 'null' ? strValue + '.prototype' : strValue,
          level    : level
        });
        size.name   = Math.max (size.name, `${ TAB.repeat (line.level) }${ name.toString () }`.length);
        size.origin = Math.max (size.origin, line.origin.length);
        result.push (line)
      };
      
      Reflect.ownKeys (o)
             .sort ((a, b) => a.toString () > b.toString () ? 1 : -1)
             .forEach (prop => {
               let desc = Object.getOwnPropertyDescriptor (o, prop);
               if (desc.get) {
                 add (prop, 'get ', desc, `f get ${ prop.toString () }()`);
               }
               if (desc.set) {
                 add (prop, 'set ', desc, `f set ${ prop.toString () }()`);
               }
               if (!desc.get && !desc.set && prop !== 'prototype') {
                 add (
                   prop,
                   '',
                   desc,
                   typeof desc.value == 'function' ? `f ${ prop.toString () }()` : safeStringify (desc.value)
                 );
               }
             });
      let next     = o.prototype || Object.getPrototypeOf (o);
      let nextType = o.prototype ? 'prototype' : '__proto__';
      if (next === null) {
        add (nextType, '', {}, 'null');
      } else {
        add (nextType, '', {}, (next.name ? `${ next.name } (constructor)` : next.constructor.name));
        level++;
        inspect (next);
      }
    }) (obj);
    
    const descriptor2Title = (line) => line.strName + ' &gt; ' +
                                       'enumerable: ' + line.enumerable + ', ' +
                                       'configurable: ' + line.enumerable +
                                       (line.writable ? ', writable: ' + line.writable : '');
    
    const namePadText   = (name, size, level) => {
      return `${ name }${ SPACE.repeat (size - ((TAB.length * level) + name.length) + 1) }`;
    };
    const originPadText = (origin, size) => {
      return `${ origin }${ SPACE.repeat (size - origin.length + 2) }`;
    };
    const namePadHTML   = (name, size, level) => {
      return `${ name }<span class="ext-view">${ SPACE.repeat (size - ((TAB.length * level) + name.length) + 1) }</span>`;
    };
    const originPadHTML = (origin, size) => {
      return `<span class="ext-view">${ origin }${ SPACE.repeat (size - origin.length + 2) }</span>`;
    };
    
    return Object.defineProperties (
      result,
      {
        
        'toString' : {
          value      : () => `${ objName || obj[ Symbol.toStringTag ] || obj.name || obj.constructor.name } ` +
                             (typeof obj === 'function' ?
                                 '(constructor)' : // `${obj.toString().split( /[\r\n]/ )[ 0 ]}...`
                             (obj.hasOwnProperty ('constructor') ?
                                 '(prototype) ' :
                                 '(object) '
                             ) +
                             safeStringify (obj)
                             ) + '\n' +
                             (result
                               .map (line =>
                             TAB.repeat (line.level) +
                             namePadText (line.strName, size.name, line.level) +
                             originPadText (line.origin ? `(${ line.origin })` : TAB, size.origin) +
                             ' : ' + line.strValue
                               ).join ('\n')),
          enumerable : false
        },
        
        'toHTML' : {
          value      : () => {
            const unique = 'io-' + Math.random ().toString (16).substring (2);
            return (
              `<!-- START OBJECT INSPECTION -->
<style>
  #${ unique }.ins-obj { font-family: monospace; font-size: 12px; line-height: 1.3em; border-top: 1px solid lightgrey; border-bottom: 1px solid lightgrey; padding: 10px; }
  #${ unique }.ins-obj ul { list-style-type: none; padding-left: 1.2em; padding-bottom: 0  }
  #${ unique }.ins-obj label { white-space: pre }
  #${ unique }.ins-obj .obj-title { padding-top: 12px }
  #${ unique }.ins-obj .obj-title .obj-name { font-weight: bold }
  #${ unique }.ins-obj #${ unique }-show-prop { float: right }
  #${ unique }.ins-obj #${ unique }-show-prop + label { float: right }
  #${ unique }.ins-obj #${ unique }-show-prop + label + p + ul { margin-top: 4px; margin-bottom: 0 }
  #${ unique }.ins-obj #${ unique }-show-prop + label + p + ul .ext-prop,
  #${ unique }.ins-obj #${ unique }-show-prop + label + p + ul .ext-view { display: none }
  #${ unique }.ins-obj #${ unique }-show-prop:checked + label + p + ul .ext-prop { display: block }
  #${ unique }.ins-obj #${ unique }-show-prop:checked + label + p + ul .ext-view { display: inline }
  #${ unique }.ins-obj .proto-sec { display : none }
  #${ unique }.ins-obj .proto-sec + label:before { margin-left: -1.1em; margin-right: 0.5em; color: #555; content: "►" }
  #${ unique }.ins-obj .proto-sec:checked + label:before { content: "▼" }
  #${ unique }.ins-obj .proto-sec + label + ul { display: none }
  #${ unique }.ins-obj .proto-sec:checked + label + ul { display: block }
</style>
<div class="ins-obj" id="${ unique }">
  <label class="obj-title"
    for="${ unique }-${ objName || obj[ Symbol.toStringTag ] || obj.name || obj.constructor.name }"><span class="obj-name">${
              objName || obj[ Symbol.toStringTag ] || obj.name || obj.constructor.name
                }</span>${
                typeof obj === 'function' ?
                  ' (constructor)' : // `<code>${ obj.toString().split( /[\r\n]/ )[ 0 ] }...</code>`
                  (obj.hasOwnProperty ('constructor') ?
                    ' (prototype) ' :
                    ' (object) ') +
                  `<code>${ safeStringify (obj) }</code>`
                }</label> <input type="checkbox" id="${ unique }-show-prop"><label
    for="${ unique }-show-prop"><i>ver las propiedades</i></label><p></p><ul>
    ${ result.reduce ((html, line, index, array) => {
                  if (line.origin) {
                    html += `<li class="ext-prop" title="${ descriptor2Title (line) }">` +
                            '<label>' +
                            namePadHTML (line.strName, size.name, line.level) +
                            originPadHTML (`(${ line.origin })`, size.origin) +
                            ` : ${ line.strValue }` +
                            '</label>' +
                            '</li>\n';
                  } else {
                    html += `<li><input type="checkbox" class="proto-sec" id="${ unique }-${ line.strName }-${ line.level }" checked>` +
                            `<label for="${ unique }-${ line.strName }-${ line.level }">` +
                            namePadHTML (line.strName, size.name, line.level) +
                            originPadHTML (line.origin, size.origin) +
                            ` : ${ line.strValue }` +
                            `</label>\n` +
                            `<ul>`;
                  }
                  if (index === array.length - 1) {
                    for (let n = 1; n < line.level; n++) {
                      html += '</ul></li>'
                    }
                  }
                  return html;
                },
                '')
                }
  </ul>
</div>
<!-- END OBJECT INSPECTION -->`
            );
          },
          enumerable : false
        }
      }
    );
  }
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = inspectObject;
  } else {
    root.inspectObject = inspectObject;
  }
  
}) (this || window);
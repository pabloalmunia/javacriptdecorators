/**
 *
 * @type (kind, [options]) accessor
 *
 * This decorator defines the fields type and avoids assigning values that do not conform to the
 * constraints.
 *
 * @param {string|Function} kind    - field type (typeof validation) or field constructor (instanceof validation)
 * @param {object}  options         - configure the decorator behavior
 * @param {boolean} options.silence - if is false the decorator throw an error when the constraint is not met (by default is true)
 * @param {boolean} options.name    - define a name for the constraint (by default is empty)
 * @param {RegExp}  options.match   - define a regular expression as constraint to string type (by default is empty)
 *
 * kinds: 'auto-accessor', 'setter'
 *
 * Remember, this decorator needs `accessor` keyword before the field name.
 *
 */
function type (kind, options = {silence : true}) {
  return function (value, context) {
    if (context.kind === 'setter' || context.kind === 'auto-accessor') {
      const setter = context.kind === 'setter' ? value : value.set;
      
      function check (v) {
        if (typeof kind === 'string') {
          if (typeof v !== kind) {
            if (!options.silence) {
              throw new TypeError (`the property ".${ context.name }" must be a ${ kind }`);
            } else {
              return;
            }
          }
          if (kind === 'string' && options.match && !v.match (options.match)) {
            if (!options.silence) {
              throw new TypeError (`the property ".${ context.name }" must be match with ${ options.name }`);
            } else {
              return;
            }
          }
          return setter.call (this, v);
        } else if (typeof kind === 'function') {
          if (!(v instanceof kind)) {
            if (!options.silence) {
              throw new TypeError (`the property ".${ context.name }" must be an instance of ${ kind.name }`);
            } else {
              return;
            }
          }
          return setter.call (this, v);
        }
      }
      
      return context.kind === 'setter' ? check : {set : check};
    }
  };
}

const email = type (
  'string',
  {silence : true, name : 'email format', 'match' : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
);

class Test {
  @type ('string') accessor;
  p = 'a';
  
  @type (Array) accessor;
  a = [];
  
  @email accessor;
  email = '';
  
  #priv = '';
  
  get name () {
    return this.#priv;
  }
  
  @type ('string')
  set name (v) {
    this.#priv = v;
  }
}

const t = new Test ();
t.name  = 'Pablo';
t.name  = 1;
console.log (t.name);
t.email = 'p@p.com';
t.email = '.cp';
console.log (t.email);
// t.p = 1;
// console.log(t.p);
// t.p = 'b';
// console.log(t.p);
// t.a = [1,2,3]
// console.log(t.a);
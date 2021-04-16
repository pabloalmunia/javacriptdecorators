/**
 *
 * @component (name)
 *
 * Defines a class as a web component. If the class does not inherit from HTMLElement, this
 * decorator will define this inheritance. This decorator works in conjunction with other
 * decorators as @init or @attribute.
 *
 * Kind: 'class'
 *
 * Warning: this decorator change the original class inherit.
 *
 * @param {string} name - web component name (must include a hyphen)
 *
 */
function component (name) {
  return (value, context) => {
    if (context.kind !== 'class') {
      return;
    }
    const attributes = findPropWithMetadata (value.prototype, (property, metadata) => metadata.attribute);
    const init       = Object.keys (findPropWithMetadata (value.prototype, (property, metadata) => metadata.init))[ 0 ];
    
    class Component extends HTMLElement {
      
      static get observedAttributes () {
        return Object.values (attributes).map (x => x.attribute);
      }
      
      attributeChangedCallback (name, oldValue, newValue) {
        for (let key of Object.keys (attributes)) {
          if (attributes[ key ].attribute === name) {
            this[ key ] = newValue;
            return this[ init ] ();
          }
        }
      }
      
      connectedCallback () {
        this[ init ] ();
      }
    }
  
    let replacer;
    if (Object.getPrototypeOf (value) === Object.getPrototypeOf (Object)) {
      replacer = class extends value {
        constructor () {
          super ();
          return Object.assign (Reflect.construct (
            Object.getPrototypeOf (value.prototype).constructor,
            arguments,
            Object.getPrototypeOf (this).constructor
          ), this);
        }
      };
      Object.defineProperty (
        replacer,
        'name',
        {value : context.name, writable : false, enumerable : false, configurable : true}
      );
    }
    Object.setPrototypeOf (value.prototype, Component.prototype);
    Object.setPrototypeOf (value, Component);
    value.prototype.constructor = Component;
    customElements.define (name, replacer ?? value);
    return replacer;
  };
}

/**
 *
 * @init
 *
 * This decorator defines the method that is called when the component is created. This decorator
 * works together @component class decorator.
 *
 * Kind supported: 'method'
 *
 */
function init (value, context) {
  context.defineMetadata ('init', true);
}

/**
 *
 * @attribute accessor
 *
 * This decorator defines attributes associated to properties. It works together @component class
 * decorator.
 *
 * Kind supported: 'auto-accessor' (field)
 *
 * Remember, this decorator needs `accessor` keyword before the field name.
 *
 */
function attribute (name) {
  return function decorator (value, context) {
    context.defineMetadata ('attribute', name);
  };
}

function findPropWithMetadata (obj, filter) {
  const result = {};
  if (!obj[ Symbol.metadata ]) {
    return result;
  }
  for (let property of Object.keys (obj[ Symbol.metadata ])) {
    const metadata = obj[ Symbol.metadata ][ property ];
    if (filter (property, metadata)) {
      result[ property ] = metadata;
    }
  }
  return result;
}



@component ('my-class')
class MyClass extends HTMLElement {
  
  @attribute ('blink-interval')
  blinkInterval = 0.5;
  
  @attribute ('base-color')
  baseColor = 'inherit';
  
  @attribute ('other-color')
  alternativeColor = 'transparent';
  
  otherProperty = true;
  
  #interval;
  
  @init
  build () {
    let n = 0;
    clearInterval(this.#interval);
    this.#interval = setInterval (() => {
      this.style.color = ++n % 2 ? this.alternativeColor : this.baseColor;
    }, this.blinkInterval * 1000);
  }
  
  otherMethod () {
    /* ... */
  }
}
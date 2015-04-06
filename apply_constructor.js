function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);

alert(myInstance.property1);                // alerts 'Hello world!'
alert(myInstance instanceof MyConstructor); // alerts 'true'
alert(myInstance.constructor);              // alerts 'MyConstructor'
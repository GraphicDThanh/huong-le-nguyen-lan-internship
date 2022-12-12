// RangeError
console.log.apply(console, new Array(1000000000));

// ReferenceError
console.log(notValidVar);

// SyntaxError
1***3

// TypeError
('1.2').toPrecision(1);

// URIError
decodeURI('%');

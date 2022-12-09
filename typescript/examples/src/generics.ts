interface Products<T> {
  name: string,
  status: T,
}

function getProduct(product: Products<boolean>) {
  console.log(product.status);
}

getProduct({name: 'abc', status: true});

function makeArr<T>(name: string, status: T) {
  console.log(name);
  console.log(status);
}

makeArr<string>('123', '123');

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

loggingIdentity<string>(['123','2','3']);

function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: {
  <T>(arg: T): T 
} = identity;

const result = myIdentity<string>('123');
console.log(result);


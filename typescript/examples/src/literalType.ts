let changingString = 'hello word';
changingString = 'hello';
console.log(changingString);

const constantString = 'hello word';
console.log(constantString);

function printText(text: string, alignment: 'center' | 'left' | 'right') {
  console.log(`${text} ${alignment}`);
}

printText('hello', 'center');
printText('hello world', 'cente');

interface Options {
  width: number;
}

function compare(a: string, b: string, x: Options): -1 | 0 | 1 {
  console.log(x);

  if (a === b) {
    return 0;
  }

  if (a > b) {
    return 1;
  }

  return -1;
}

const num = compare('a', 'b', { width: 12 });
console.log(num);

const req = { url: 'https://example.com', method: 'GET' };
function handleRequest(url: string, method: string) {
  console.log(`${url} ${method}`);
}

handleRequest(req.url, req.method);

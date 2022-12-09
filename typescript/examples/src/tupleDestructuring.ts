const tuple: [number, string, boolean] = [7, 'a', true];
let a:number; let b:string; let rest:boolean;
[a, b] = [7, 'a'];
[a, b, ...rest] = tuple;
console.log(b);
console.log(a);
console.log(rest);

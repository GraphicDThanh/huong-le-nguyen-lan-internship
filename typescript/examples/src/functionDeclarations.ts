interface funcs {
    a: string,
    b?: number
}

function f({a, b}: funcs): void {
    console.log(a);
    console.log(b);
}

f({a: 'a', b: 12});

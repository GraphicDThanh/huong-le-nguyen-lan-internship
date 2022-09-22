const promise = new Promise((resolve, reject) => {
  let a = -1;
  if (a > 0) {
    resolve();
  } else {
    reject(a);
  }
});

promise
  .then(() => {
    console.log("Successful !");
  })
  .catch((error) => {
    console.log("Failed !");
    console.log(`${error} isn't greater than 0`);
  })
  .finally(() => {
    console.log("Done !");
  });

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// Promise all
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

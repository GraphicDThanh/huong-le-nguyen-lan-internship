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

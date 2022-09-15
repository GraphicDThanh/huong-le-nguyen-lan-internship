const getData = new Promise((resolve, reject) => {
  return resolve("Hello");
});

const promise3 = () => {
  return new Promise((resolve, reject) => {
    let number = 11;
    if(number === 10) {
      resolve("number");
    } else {
      reject("Failed");
    }
  });
};

const doSomething = async () => {
  try {
    const data = await getData;
    console.log(data);
    const promise = await promise3();
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
}

doSomething();

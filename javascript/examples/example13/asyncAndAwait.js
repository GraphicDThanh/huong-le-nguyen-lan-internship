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

const num1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this is 1");
    }, 1000);
  });
}

const num2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this is 2");
    }, 1500);
  });
}

const num3 = () => {
  return new Promise((resolve, reject) => {
    resolve("this is 3");
  });
}

const syncAwait = async () => {
  try {
    console.log(await num1());
    console.log(await num2());
    console.log(await num3());
  } catch (error) {
    console.log("errors");
  }
}

syncAwait();

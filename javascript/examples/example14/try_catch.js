const number = (num) => {
  try {
    if (num > 0) {
      console.log("num: " + num);
    } else if (num > 5) {
      console.log("num > 5 " + num);
    }
  } catch (error) {
    console.log("number should be more than 0");
  }
}

number(10);

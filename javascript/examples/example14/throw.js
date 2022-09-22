let number = 5;

try {
  throw new Error ("This is the throw");
} catch (error) {
  console.log("catched !");
  if (number + 8 > 10) {
    console.log("errors: " + error);
  } else {
    throw new Error ("The value is low");
  }
}

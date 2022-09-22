function doHomework(subject, callback) {
  setTimeout( function(){
    console.log(`Do your homework ${subject}`);
    callback();
  }, 5000);
}

function alertFinished(){
  console.log("Done !");
}

doHomework("Math", alertFinished);

const doSomething = (callback) => {
  const result = "12345";
  callback(result);
};

doSomething((result) => {
  console.log(result);
});

function makePromise() {
  const p = new Promise((resolve, reject) => {
    // resolve(7)
    reject(new Error('Here is an error message'));
  });
  return p;
}

makePromise().then(value => {
  console.log('The value is', value);
}).catch(error => {
  // Just the message
  console.log('The error was', error.message);
  // Print out the whole error including stack trace (do either one):
  // console.log('The error was', error.stack);
  // console.log('The error was', error);
});

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => {
  console.log('Done with delay');
});

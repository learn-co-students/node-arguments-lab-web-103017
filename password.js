// code solution here

function password(length) {
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  retVal = "";

  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

process.argv.shift();
process.argv.shift();
let length = process.argv.shift();
let num = process.argv.shift();
for (let k = 0; k < num; k++) {
  console.log(password(length));
}

process.exit(0);

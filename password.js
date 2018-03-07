function passwordGenerator(length) {
  let allchar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += allchar.charAt(Math.floor(Math.random() * allchar.length))
  }
  return password
}

let length = parseInt(process.argv[2], 10)
let number = parseInt(process.argv[3], 10)

for (var i = 0; i < number; i++) {
  console.log(passwordGenerator(length))
}

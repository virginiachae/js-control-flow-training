console.log("login.js loaded");
var userLogin = {name: 'virginia',
                  password: 'hello'};

var userpw = prompt('Enter password for user '+ userLogin.name)
var numIterations = 0;

if (userpw === userLogin.password){
  console.log('password is correct');
}

while (userpw !== userLogin.password && numIterations < 2){
  window.alert('The password is incorrect');
  userpw = prompt('Enter password for user '+ userLogin.name);
  numIterations++;
}

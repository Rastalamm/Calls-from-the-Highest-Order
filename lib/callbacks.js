function wait(seconds, callback) {
  n = seconds;
  setTimeout(callback, n*1000);
}

console.log("No waiting before its called");
wait(3, function(){
  console.log("wait 3 done");
});
console.log("No waiting After");

function repeat () {

}

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};
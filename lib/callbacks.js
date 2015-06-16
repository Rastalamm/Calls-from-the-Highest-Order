function wait(seconds, callback) {
  var n = seconds;
  setTimeout(callback, n*1000);
}

console.log("No waiting before its called");
wait(3, function(){
  console.log("wait 3 done");
});
console.log("No waiting After");


function repeat (times, callback) {

  var n = times;

  for(var i = 0; i < n; i++){
    callback(i);
  }

}

repeat(10, function(iteration){
  console.log(iteration + 100);
});

wait(4, function(){
  repeat(2, function(iteration){
    console.log('repeating for i ' + iteration );
    wait(iteration*3, function(){
      repeat(3, function(iterationb){
        console.log('i ' + iteration + ' j ' + iterationb);
      })
    })
  })
});

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};
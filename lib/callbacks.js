var dataStore = require('./datastore.js');

function wait(seconds, callback) {
  var n = seconds;
  setTimeout(callback, n*1000);
}

// console.log("No waiting before its called");
// wait(3, function(){
//   console.log("wait 3 done");
// });
// console.log("No waiting After");


function repeat (times, callback) {

  var n = times;

  for(var i = 0; i < n; i++){
    callback(i);
  }

}

// repeat(10, function(iteration){
//   console.log(iteration + 100);
// });

// wait(4, function(){
//   repeat(2, function(iteration){
//     console.log('repeating for i ' + iteration );
//     wait(iteration*3, function(){
//       repeat(3, function(iterationb){
//         console.log('i ' + iteration + ' j ' + iterationb);
//       })
//     })
//   })
// });

function User () {

}

User.find = function(query, callback){

  var err = null;

  var users = dataStore.User.filter(function(user){

      var breaker = true;

      for(var key in query){
          if(breaker && query[key] === user[key]){
            breaker = true;
          }else{
            breaker = false
          }
      }

      return breaker;



});
console.log(users)


  callback(err, users)

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};



  // partial working solution
  // var queueKeys = Object.getOwnPropertyNames(query);
  // var userArray =[];
  // for(var key in query){
  //   for(var i = 0; i < dataStore.User.length; i++){
  //    for(var j = 0; j < Object.getOwnPropertyNames(dataStore.User[i]).length; j++){
  //       if(queueKeys[0] === Object.getOwnPropertyNames(dataStore.User[i])[j] && query[key] === dataStore.User[i][key] ){
  //         console.log('working');
  //         userArray.push(dataStore.User[i]);
  //         console.log('users', userArray);
  //       }
  //     }
  //   }
  // }
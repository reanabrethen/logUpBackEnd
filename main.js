// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'krose@perseverenow.org';
const password1 = 'Hotforhimself';
const user2 = 'jdoty@perseverenow.org';
const password2 = 'Console.logger';
const user3 = 'dhiggins.prsvr@gmail.com';
const password3 = "supToThis"


// **YOUR** code below. Pass those tests!

function isValidEmail(user){
  if(user.indexOf(".prsvr@gmail.com") >= 1){
    return true
  }if(user.indexOf("@perseverenow.org") >= 1){
    return true
  }else {
    return false
  }
}

// if(str.endsWith("@perseverenow.org"))


function isValidPassword(str){
  if(str.length >= 8 && 
    str !== str.toUpperCase() &&   //check for a lower case letter
    str !== str.toLowerCase()){    //check for a upper case letter
      return true
    }else{
      return false
    }
  }


  function isRegisteredUser(name){
    if(name === user1){
      return true
    }if(name === user2){
      return true
    }if(name === user3){
      return true
    }else{
      return false
    }
  }


  // STEVEN'S WAY BELOW
// function isRegisteredUser(str){
//   if(str === user1 || str === user2 || str === user3){
//     return true
//   } else{
//     return false
//   }
// }

// return str === user1 || str === user2 || str === user3    [Shorthand]



function passwordMatches(user, pass){
  if(user === user1 && pass === password1){
    return true
  } if(user === user2 && pass === password2){
    return true
  }if(user === user3 && pass === password3){
    return true
  } else{
    return false
  }
}


// Shorthand & "precise code"
//  return user === user1 && pass === password1 ||
       //  user === user2 && pass === password2 ||
      //  user === user3 && pass === password3



// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3
}

// JavaScript Optional Chaining Operator;

// Introduction to the JavaScript optional chaining operator

function getUser(id) {
  if (id <= 0) {
    return null;
  }

  // get the user from database
  // and return null if id does not exits
  //...

  // if user was found, return the user
  return {
    id: id,
    userName: "admin",
    profile: {
      avatar: "/avatar.png",
      language: "English",
    },
  };
}

let user = getUser(2);
let profile = user && user.profile;
// console.log(user);
// console.log(profile);

// ES20

let userTwo = getUser(2);
let profileTwo = user?.profile;

// console.log(userTwo);
// console.log(profileTwo);

let profileThree =
  user !== null || user !== undefined ? user.profile : undefined;
// console.log(profileThree);

// Stacking the optional chaining operator;

let profileFour = user?.profile?.avatar;
console.log(profileFour);

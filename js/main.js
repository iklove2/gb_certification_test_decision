
let form_sending_El = document.querySelector('form_sending');
let user_email = document.getElementById('user_email');
let user_password_place = document.getElementById('user_password');
let user_password_place_retype = document.getElementById('user_password_retype');
let rating_area = document.querySelector('.rating-area');
let message_rating = document.querySelector('.companies__stars-title');



function password_check () {
  let userPassword = document.querySelector("#user_password").value;
  let userPasswordRetype = document.querySelector("#user_password_retype").value;

  if (userPassword === "") {
    document.getElementById("user_password").style = "border: 1px solid red";
    document.getElementById("user_password_retype").style = "border: 1px solid red";
  } else if (userPassword != userPasswordRetype) {
    document.getElementById("user_password").style = "border: 1px solid red";
    document.getElementById("user_password_retype").style = "border: 1px solid red";
    return false;
  } else if (userPassword === userPasswordRetype) {
    document.getElementById("user_password").style = "border: 1px solid green";
    document.getElementById("user_password_retype").style = "border: 1px solid green";
  }
  return true;
};

form_sending_El = document.addEventListener('click', password_check);

// form_sending_El = document.addEventListener('click', (event) =>  {
//   let email_value = document.querySelector('#user_email').value;
//   if (email_value === "") {
//     event.preventDefault();
//     message_rating.style = "border: 1px solid red";
//     return false;
//   } else {
//     message_rating.style = "border: 0px solid red";
//     return true;
//   }
// });

// form_sending_El = document.addEventListener('click', (event) => {
//   if (event.target.value === null) {
//     event.preventDefault();
//     message_rating.style = "border: 1px solid red";
//     console.log('zhopa');
//     return false;
//    } else {
//     console.log('opa ' + event.target.value );
//     message_rating.style = "border: 0px solid red";
//    }
// });

user_password_place = document.addEventListener('change', password_check);

user_password_place_retype = document.addEventListener('change', password_check);

// rating_area = document.addEventListener('click', (event) => {
//  if (event.target.value === null) {
//   event.preventDefault();
//   message_rating.style = "border: 1px solid red";
//   console.log('zhopa');
//  }else {
//   console.log('opa ' +event.target.value);
//   message_rating.style = "border: 0px solid red";
//   return true;
//  }
//   // body
// });
function toggleLogin()
{
    var login = document.getElementById("login");
    if (login.style.display === 'none') {
        login.style.display = 'block';
    } else {
        login.style.display = 'none';
    }


    var register = document.getElementById("register");
    if (register.style.display === 'none') {
        register.style.display = 'block';
    } else {
        register.style.display = 'none';
    }

}

function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    //document.getElementById('email').focus;
    return false;
 }
}

// function checkPassword() {

//     var password = document.getElementById('password]');
//     var filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!filter.test(password.value)) {
//     alert('Please provide password');
//     //email.focus;
//     document.getElementById('password').focus;
//     return false;
//  }
// }
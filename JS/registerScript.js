function readValues()
{
    console.log("clicked register button");

    var name = document.getElementById("name").value;

    var mail = document.getElementById("email").value;

    var ph = document.getElementById("ph").value;

    var pwd = document.getElementById("pwd").value;

    var confirmPwd = document.getElementById("cnf_pwd").value;

    if(confirmPwd==pwd)
    {
        
    console.log("name is : " + name);

    console.log("mail is : " + mail);

    console.log("ph is : " + ph);
    console.log("pwd is : " + pwd);
    console.log("confirmPwd is : " + confirmPwd);
    }
    else{
        // console.log("password and confirm password doesn't match");
        alert("password and confirm password doesn't match");
    }

}
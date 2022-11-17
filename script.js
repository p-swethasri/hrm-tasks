function myfunction(){
    var sub = document.getElementById('email').value;
    var passw = document.getElementById('password').value;
if( sub && passw){
   alert( " mail id and password submitted");
} else {
   ( sub==""|| passw == "" ||sub== null|| passw== null  ) ?alert("please enter both email and password"): "";
}

}
function pfunction(){
   alert('mail has been sent to reset the password')
}
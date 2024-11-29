info=JSON.parse(localStorage.getItem("userInformation"));
userName=localStorage.getItem("name");

document.getElementById("username").innerHTML= "Welcome" +" "+ userName;



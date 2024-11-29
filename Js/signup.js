emailInput=document.getElementById("Email");
passwordInput=document.getElementById("Password");
nameInput=document.getElementById("name");
signupBtn=document.querySelector("#signup");
var check;
console.log(localStorage.getItem("userInformation"))
var userName="";

if(localStorage.getItem("userInformation")==null){
    userInformation=[];
}
else{
    userInformation=JSON.parse(localStorage.getItem("userInformation"));
}


signupBtn.addEventListener("click",function(){
    for(var i=0;i<userInformation.length;i++){
        if(emailInput.value==userInformation[i].email){
            check=true;
        }
        else{
            check=false;
        }
    }
    if(emailInput.classList.contains("is-valid")&&passwordInput.classList.contains("is-valid")&&nameInput.classList.contains("is-valid")&& check==false){
        var user={
            name:nameInput.value,
            email:emailInput.value,
            password:passwordInput.value,
        }
        userInformation.push(user);
        localStorage.setItem("userInformation",JSON.stringify(userInformation));
        document.querySelector(".success").classList.remove("d-none");
        document.querySelector(".error").classList.add("d-none");
        document.querySelector("#used").classList.add("d-none")
        clear();
    }
    else if(check==true){
     document.querySelector("#used").classList.remove("d-none")
    }
    else{
        document.querySelector(".error").classList.remove("d-none");
        document.querySelector(".success").classList.add("d-none");
        document.querySelector("#used").classList.add("d-none")

    }

});






function validate(element){
    var regex={
        name:/^[A-Z][a-z]{3,10}$/,
        Email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        Password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    }
if(regex[element.id].test(element.value)==true){
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
 

}
else{
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
    
  
}
}
function clear(){
    emailInput.value=null
    passwordInput.value=null
    nameInput.value=null
}
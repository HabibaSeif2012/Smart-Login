emailInput=document.getElementById("Email");
passwordInput=document.getElementById("Password");
loginBtn=document.querySelector("#login");
home=document.querySelector("#username");



userInfo=JSON.parse(localStorage.getItem("userInformation")) ;
console.log(userInfo);
loginBtn.addEventListener("click",function(){
for (var i=0; i<userInfo.length; i++){
    if(emailInput.value==userInfo[i].email&&passwordInput.value==userInfo[i].password){
        check=true;
        userName=userInfo[i].name;
        localStorage.setItem("name",userName);
        break;
    }

}
if(check){
    window.location.href = "home.html";
    document.querySelector(".incorrect").classList.add("d-none")
       }
else{
     document.querySelector(".incorrect").classList.remove("d-none")
    
 }
});
const pass_feild = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click",function(){
    if(pass_feild.type === "password"){
        pass_feild.type ="text";
        showBtn.textContent="HIDE";
        showBtn.style.color = "#3498db";
    }
    else{
        pass_feild.type = "password";
        showBtn.textContent="SHOW";
        showBtn.style.color = "#222";
    }
})

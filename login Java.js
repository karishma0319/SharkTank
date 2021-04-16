function validate(event){
    event.preventDefault();
    const username=document.getElementById("emailLog").value;
    const password=document.getElementById("passwordLog").value;
    console.log(username,password);
    if(username==="admin@gmail.com" && password==="test123!"){
			window.location.replace("main.html");
        }
        else{
            alert("Invalid Credentials");
        }
}

document.addEventListener("DOMContentLoaded",()=>{
    const loginForm=document.querySelector("#Log");
    const regForm=document.querySelector("#SignUp");

    document.querySelector("#CreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        regForm.classList.remove("form_hidden");
    });

    document.querySelector("#LoginExists").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        regForm.classList.add("form_hidden");
    });

});



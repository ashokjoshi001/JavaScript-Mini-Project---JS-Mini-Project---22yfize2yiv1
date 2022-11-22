const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");
signUpBtn.addEventListener("click", () => {
    container.classList.toggle("change");
});

function validateForm() {
    let x = document.forms["myForm"][0].value;
    let y = document.forms["myForm"][1].value;
    let z = document.forms["myForm"][2].value;

    
    if(x == '' || y == '' || z == ''){
        alert("all field must be filled out");
        return false;
    }
    else if(z.length < 8){
        alert("plese Enter minimum 8 digit Password");
        return false;
    }
    else{
        alert(`Name : ${x} 
            Email : ${y} 
            Password : ${z}`
        )
    }

    window.location.href = "http://testbook.com"
    
}
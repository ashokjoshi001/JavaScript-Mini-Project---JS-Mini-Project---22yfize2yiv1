const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");
signUpBtn.addEventListener("click", () => {
    container.classList.toggle("change");
});

function showMessage(input, message, type) {

	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;

	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}
function validatePass(input, message){
    if(input.value.trim().length < 8){
        return showError(input, message);
    }
    return showSuccess(input);
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const PASSWORD_REQUIRED = "Please enter 8 digit password"

form.addEventListener("submit", function (event) {
	
	event.preventDefault();
    console.log("Submitted");

	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    let passVaild =  validatePass(form.elements["password"], PASSWORD_REQUIRED);
	
	if (nameValid && emailValid && passVaild) {
		alert("Sign up Seccessesfully!");
	}
});


























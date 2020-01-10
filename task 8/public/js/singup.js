let form = document.getElementById('formWithValidator');
let checkBtn = document.getElementById('check');
let email = document.getElementById('emailAddress');
let pass1 = document.getElementById('password');
let pass2 = document.getElementById('confirmPassword');
let fields = document.querySelectorAll('.field');



let requestURL = 'http://localhost:3000/api/users/login';

function CreateUser(email, password, confirmPassword) {
	this.email = email;
	this.password = password;
	this.confirmPassword = confirmPassword;
}

function singUp() {
	let email = form.email.value;
	let password =form.password.value;
	let confirmPassword =form.confirmPassword.value;

	let user = new CreateUser(email, password, confirmPassword);
	return user;
}

function sendRequest(method, url) {
	const headers = {
		'Content-Type': 'application/json',
	}

	let user = singUp(); 

	return fetch(url, {
		method: method,
		body: JSON.stringify(user),
		headers: headers
	}).then(response => {
		return response.json();
	});
}

check.onclick = () => {
 	sendRequest("POST", requestURL)
	.then(data => console.log(data))
}
let form = document.getElementById('formWithValidator');
let checkBtn = document.getElementById('check');
let email = document.getElementById('emailAddress');
let pass1 = document.getElementById('password');
let pass2 = document.getElementById('confirmPassword');
let fields = document.querySelectorAll('.field');
/*let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/about', urlencodedParser, function (req, res) {
	if(!req.body) return res.sendStatus(400);
	console.log(reg.body);
})
*/

let generateError = function (text) {
	let error = document.createElement('div')
	error.className = 'error'
	error.style.color = 'red'
	error.innerHTML = text
	return error
}

let removeValidation = function () {
	let errors = form.querySelectorAll('.error')
	for (let i = 0; i < errors.length; i++) {
		errors[i].remove()
	}
}

let checkFields = function () {
	for (let i = 0; i < fields.length; i++) {
		if (!fields[i].value) {
			console.log('empty field', fields[i])
			let error = generateError('Empty field')
			form[i].parentElement.insertBefore(error, fields[i].nextSibling)
		}
	}
}

let chekPassword = function () {
	if (pass1.value !== pass2.value) {
		let error = generateError('Your password does not match')
		pass2.parentElement.insertBefore(error, pass2.nextSibling)
	}
}

form.addEventListener('submit', function(event) {
	event.preventDefault()
	removeValidation()
	checkFields()
	chekPassword()
})


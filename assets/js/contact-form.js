function createContactForm () {
	var newForm = document.getElementById("contact_form");
	var createForm = document.createElement("form");
	createForm.setAttribute("action", "");
	createForm.setAttribute("method", "post");
	newForm.appendChild(createForm);

	var heading = document.createElement('h2');
	heading.innerHTML = "Contact Me";
	createForm.appendChild(heading);

	var line = document.createElement('hr');
	createForm.appendChild(line);

	var lineBreak = document.createElement('br');
	createForm.appendChild(lineBreak);

	var nameLabel = document.createElement('label');
	nameLabel.innerHTML = "Your Name:";
	createForm.appendChild(nameLabel);

	var inputElement = document.createElement('input');
	inputElement.setAttribute("type", "text");
	inputElement.setAttribute("name", "name");
	createForm.appendChild(inputElement);

	var lineBreak = document.createElement('br');
	createForm.appendChild(lineBreak);

	var emailLabel = document.createElement('label');
	emailLabel.innerHTML = "Your Email:";
	createForm.appendChild(emailLabel);

	var emailElement = document.createElement('input');
	emailElement.setAttribute("type", "text");
	emailElement.setAttribute("name", "email");
	createForm.appendChild(emailElement);
	emailElement.setAttribute("placeholder", "e.g. example@example.com")

	var emailBreak = document.createElement('br');
	createForm.appendChild(emailBreak);

	var messageLabel = document.createElement('label');
	messageLabel.innerHTML = "Your Message:";
	createForm.appendChild(messageLabel);

	var textAreaElement = document.createElement('textarea');
	textAreaElement.setAttribute("name", "message");
	createForm.appendChild(textAreaElement);

	var messageBreak = document.createElement('br');
	createForm.appendChild(messageBreak);

	var submitElement = document.createElement('input');
	submitElement.setAttribute("type", "button");
	submitElement.setAttribute("name", "submit");
	submitElement.setAttribute("value", "Submit");
	createForm.appendChild(submitElement);
}
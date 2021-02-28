const submit = document.querySelector('#submit');

//error values

const nameError = document.querySelector('.nameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const addressError = document.querySelector('.addressError');


submit.onclick = function(event){
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const email = document.querySelector('#email').value.trim();
    const address = document.querySelector('#address').value.trim();

   
    if(name.length > 0){
        nameError.classList.add('hide');
		nameError.classList.remove('show');
    }
    else {
       
        nameError.classList.add('show');
		nameError.classList.remove('hide');
    }

    if(subject.length >= 10){        
        subjectError.classList.add('hide');
		subjectError.classList.remove('show');
    }
    else {       
        subjectError.classList.add('show');
		subjectError.classList.remove('hide');
    }

    if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

    if(address.length >= 25){
        
        addressError.classList.add('hide');
		addressError.classList.remove('show');
    }
    else {        
        addressError.classList.add('show');
		addressError.classList.remove('hide');
    }

    if(name.length && subject.length && validateEmail(email) && address.length){
        
        document.querySelector('.validation').innerHTML = `
            <p class="validation__p">Passed validation</p>
        `;
                    
    }else{
        
        document.querySelector('.validation').innerHTML = `
        <p class="errorValidation__p">Error, please make sure that all the data introduced is valid</p>
    `;
    }
}

function validateEmail(emailAddy) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailValid = emailExpression.test(emailAddy);
	return isEmailValid;
}

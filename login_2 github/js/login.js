const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
const symbol = document.querySelector(".verification");


let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[.,!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	
});

function checkInputs() {
	
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'The field can not be blank');
		symbol.style.display = "none";
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'The email field can not be blank');
		symbol.style.display = "none";
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Invalid email');
		symbol.style.display = "none";
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'The password field can not be blank');
		symbol.style.display = "none";
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'The password confirm field can not be blank');
		symbol.style.display = "none";
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords do not coincide');
		symbol.style.display = "none";
	} else{
		setSuccessFor(password2);
	}

	}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
	symbol.style.display = "none";
	
	
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	symbol.style.display = "block";
	
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



function trigger(){
           if(password .value != ""){
             if(password .value.length <= 3 && (password.value.match(regExpWeak) || password.value.match(regExpMedium) || password.value.match(regExpStrong)))no=1;
             if(password .value.length >= 6 && ((password.value.match(regExpWeak) && password.value.match(regExpMedium)) || (password.value.match(regExpMedium) && password.value.match(regExpStrong)) || (password.value.match(regExpWeak) && password.value.match(regExpStrong))))no=2;
             if(password .value.length >= 6 && password.value.match(regExpWeak) && password.value.match(regExpMedium) && password.value.match(regExpStrong))no=3;
             if(no==1){
               
               text.style.color = "#e74c3c";
               text.textContent = "Your password is too week";
               text.classList.add("weak");
             }
             if(no==2){
               text.style.color = "#f1e753";               
               text.textContent = "Your password is medium";
               text.classList.add("medium");
             }else{
               
               text.classList.remove("medium");
             }
             if(no==3){
              
			  text.style.color = "#5df77e";               
               text.textContent = "Your password is strong";
               text.classList.add("strong");			   
             }else{
               strong.classList.remove("active");
               text.classList.remove("strong");
             }
             showBtn.style.display = "block";
             showBtn.onclick = function(){
               if(input.type == "password"){
                 password.type = "text";
                 showBtn.textContent = "HIDE";
                 showBtn.style.color = "#23ad5c";
				 text.style.opacity = "0%";
               }else{
                password.type = "password";
                 showBtn.textContent = "SHOW";
                 showBtn.style.color = "#000";
               }
             }
           }else{
                 text.style.opacity = "0%";
             
           }
		   return false;
         }

		
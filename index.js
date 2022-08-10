const IMPORTANTMESSAGE = "Обязательное поле";
const PHONEMESSAGE = "Введите номер мобильного телефона в формате<br>+7 (910) 123 45 67. Не указывайте городской номер";
const INCORRECTLANG = "Это значение некорректно";
const INCORRECTPASSWORD = "Пароль должен содержать английские буквы, цифры, специальные знаки, разный регистр символов. Минимальная длина пароля составляет 8 символов";
const QUESTION_REPLY = "Пожалуйста, используйте буквы русского алфавита, цифры и специальные знаки";
const ERRORCOLOR = "rgb(192, 17, 17)";
const CORRECTCOLOR = "rgba(0, 128, 0, 0.876)";

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkInput();
});

// ВЫВОД ОШИБКИ НА НЕЗАПОЛНЕННОЕ ПОЛЕ
function setErrorMessage(input, msg) {
    document.querySelector(input).style.color = ERRORCOLOR;
    document.querySelector(msg).innerHTML = IMPORTANTMESSAGE;
}

// ПРОВЕРКА НА НЕЗАПОЛНЕННОЕ ПОЛЕ 
function isFieldEmpty(field) {
    let inputField = document.querySelector(field).value;
    if (inputField === '') {
        return true;
    }
}

// ПРОВЕРКА ЗАПОЛНЕННОСТИ ВСЕХ ПОЛЕЙ И ПРИВЕТСТВИЕ
function checkInput() {
    if (isFieldEmpty(".input1")) {
        setErrorMessage('.surname', '.mandatory1');
    }
    if (isFieldEmpty(".input2")) {
        setErrorMessage('.name', '.mandatory2');
    }
    if (isFieldEmpty(".input3")) {
        setErrorMessage('.email', '.mandatory3');
    }
    if (isFieldEmpty(".input4")) {
        setErrorMessage('.phone', '.mandatory4');
    }
    if (isFieldEmpty(".input5")) {
        setErrorMessage('.password1', '.mandatory5');
    }
    if (isFieldEmpty(".input6")) {
        setErrorMessage('.password2', '.mandatory6');
    }

    let nameGreeting = document.querySelector(".input2").value;
    if (!isFieldEmpty(".input1") && !isFieldEmpty(".input2") && !isFieldEmpty(".input3") && !isFieldEmpty(".input4") && !isFieldEmpty(".input5") && !isFieldEmpty(".input6")) {
        document.querySelector('.welcome').innerHTML = (`Добро пожаловать, ${nameGreeting}!`);
    }
}

// ПРОВЕРКА НА ВВОД ОБЯЗАТЕЛЬНЫХ ПОЛЕЙ
function provideInput(input, clear) {
    document.querySelector(input).style.color = CORRECTCOLOR;
    document.querySelector(clear).innerHTML = "";
}

const FIOCHECK = /^[а-яА-ЯЁё]{2,20}$/;

let inputSurname = document.querySelector('.input1');
inputSurname.addEventListener("keyup", function() {
    provideInput('.surname', '.mandatory1');
    isInputValid(FIOCHECK, inputSurname, '.surname', '.mandatory1', INCORRECTLANG);
});

let inputName = document.querySelector('.input2');
inputName.addEventListener("keyup", function() {
    provideInput('.name', '.mandatory2');
    isInputValid(FIOCHECK, inputName, '.name', '.mandatory2', INCORRECTLANG);
});

let inputEmail = document.querySelector('.input3');
inputEmail.addEventListener("keyup", function() {
    provideInput('.email', '.mandatory3');
    const EMAILCHECK = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)$/i;
    isInputValid(EMAILCHECK, inputEmail, '.email', '.mandatory3', INCORRECTLANG);
});

let inputPhone = document.querySelector('.input4');
inputPhone.addEventListener("keyup", function() {
    provideInput('.phone', '.mandatory4');
    const PHONECHECK = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    isInputValid(PHONECHECK, inputPhone, '.phone', '.mandatory4', PHONEMESSAGE);
});

const PASSWORDCHECK = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$&*])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/;

let inputPassword1 = document.querySelector('.input5');
inputPassword1.addEventListener("keyup", function() {
    provideInput('.password1', '.mandatory5');
    isInputValid(PASSWORDCHECK, inputPassword1, '.password1', '.mandatory5', INCORRECTPASSWORD);
});

let inputPassword2 = document.querySelector('.input6');
inputPassword2.addEventListener("keyup", function() {
    provideInput('.password2', '.mandatory6');
});

inputPassword2.addEventListener("keyup", isPasswordValid);

const QUESTION_REPLYCHECK = /^[?!,.а-яА-ЯёЁ0-9\s]+$/;

let inputQuestion = document.querySelector('.question');
inputQuestion.addEventListener("keyup", function() {
    provideInput('.control-question', '.mandatory7');
    isInputValid(QUESTION_REPLYCHECK, inputQuestion, '.control-question', '.mandatory7', QUESTION_REPLY);
});

let inputReply = document.querySelector('.reply');
inputReply.addEventListener("keyup", function() {
    provideInput('.control-reply', '.mandatory8');
    isInputValid(QUESTION_REPLYCHECK, inputReply, '.control-reply', '.mandatory8', QUESTION_REPLY);
});

// ПРОВЕРКА НА СОВПАДЕНИЕ ПАРОЛЕЙ 
function isPasswordValid() {
    if (inputPassword1.value !== inputPassword2.value) {
        document.querySelector('.mandatory6').innerHTML = "Пароль не совпадает"; 
    }
    else { 
        document.querySelector('.mandatory6').innerHTML = "";
    }
}   

// ВАЛИДАЦИЯ ПОЛЯ 
function isInputValid(regex, input, labelcolor, message, error) {
    if (regex.test(input.value) == false) {
        document.querySelector(labelcolor).style.color = ERRORCOLOR;
        document.querySelector(message).innerHTML = error;
    }
}
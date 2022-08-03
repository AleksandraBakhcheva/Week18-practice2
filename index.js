const IMPORTANTMESSAGE = "Обязательное поле";
const PHONEMESSAGE = "Введите номер мобильного телефона в формате<br>+7(910)1234567. Не указывайте городской номер";
const INCORRECTLANG = "Это значение некорректно";
const INCORRECTPASSWORD = "Пароль должен содержать английские буквы, цифры, специальные знаки, разный регистр символов. Минимальная длина пароля составляет 8 символов";
const ERRORCOLOR = "rgb(192, 17, 17)";
const CORRECTCOLOR = "rgba(0, 128, 0, 0.876)";


const BUTTON = document.querySelector(".register__button");
BUTTON.addEventListener("click", checkInput);

// ВЫВОД ОШИБКИ НА НЕЗАПОЛНЕННОЕ ПОЛЕ
function errorMessage(input, msg) {
    document.querySelector(input).style.color = ERRORCOLOR;
    document.querySelector(msg).innerHTML = IMPORTANTMESSAGE;
}

// ПРОВЕРКА ЗАПОЛНЕННОСТИ ПОЛЕЙ И ПРИВЕТСТВИЕ
function checkInput() {
    let surname = document.querySelector('.input1').value;
    if (surname == '') {
        errorMessage('.surname', '.mandatory1');
    }
    let name = document.querySelector('.input2').value;
    if (name == '') {
        errorMessage('.name', '.mandatory2');
    }
    let email = document.querySelector('.input3').value;
    if (email == '') {
        errorMessage('.email', '.mandatory3');
    }
    let phone = document.querySelector('.input4').value;
    if (phone == '') {
        errorMessage('.phone', '.mandatory4');
    }
    let password1 = document.querySelector('.input5').value;
    if (password1 == '') {
        errorMessage('.password1', '.mandatory5');
    }
    let password2 = document.querySelector('.input6').value;
    if (password2 == '') {
        errorMessage('.password2', '.mandatory6');
    }
    if (surname !== '' && name !== '' && email !== '' && phone !== '' && password1 !== '' && password2 !== '') {
        document.querySelector('.welcome').innerHTML = (`Добро пожаловать, ${name}!`);
    }
}

// ПРОВЕРКА НА ВВОД ОБЯЗАТЕЛЬНЫХ ПОЛЕЙ
function InputProvided(input, clear) {
    document.querySelector(input).style.color = CORRECTCOLOR;
    document.querySelector(clear).innerHTML = "";
}

const FIOCHECK = /^[а-яА-ЯЁё]{2,20}$/;

let inputSurname = document.querySelector('.input1');
inputSurname.addEventListener("keyup", function() {
    InputProvided('.surname', '.mandatory1');
    inputCheck(FIOCHECK, inputSurname, '.surname', '.mandatory1');
});

let inputName = document.querySelector('.input2');
inputName.addEventListener("keyup", function() {
    InputProvided('.name', '.mandatory2');
    inputCheck(FIOCHECK, inputName, '.name', '.mandatory2');
});

let inputEmail = document.querySelector('.input3');
inputEmail.addEventListener("keyup", function() {
    InputProvided('.email', '.mandatory3');
    const EMAILCHECK = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)$/i;
    inputCheck(EMAILCHECK, inputEmail, '.email', '.mandatory3');
});

let inputPhone = document.querySelector('.input4');
inputPhone.addEventListener("keyup", function() {
    InputProvided('.phone', '.mandatory4');
    const PHONECHECK = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    inputCheck(PHONECHECK, inputPhone, '.phone', '.mandatory4');
});

const PASSWORDCHECK = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$&*])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/;

let inputPassword1 = document.querySelector('.input5');
inputPassword1.addEventListener("keyup", function() {
    InputProvided('.password1', '.mandatory5');
    inputCheck(PASSWORDCHECK, inputPassword1, '.password1', '.mandatory5');
});

let inputPassword2 = document.querySelector('.input6');
inputPassword2.addEventListener("keyup", function() {
    InputProvided('.password2', '.mandatory6');
});

inputPassword2.addEventListener("keyup", passwordValidation);

// ПРОВЕРКА НА СОВПАДЕНИЕ ПАРОЛЕЙ 
function passwordValidation() {
    if (inputPassword1.value !== inputPassword2.value) {
        document.querySelector('.mandatory6').innerHTML = "Пароль не совпадает"; 
    }
    else { 
        document.querySelector('.mandatory6').innerHTML = "";
    }
}   

// ВАЛИДАЦИЯ ПОЛЯ 
function inputCheck(regex, input, error, message) {
    if (regex.test(input.value) == false) {
        document.querySelector(error).style.color = ERRORCOLOR;
        document.querySelector(message).innerHTML = INCORRECTLANG;
    }
}
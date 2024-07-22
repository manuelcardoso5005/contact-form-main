const $firstName = document.querySelector('#first-name');
const $firstNameError = document.querySelector('.first-name-error');

const $secondName = document.querySelector('#second-name');
const $secondNameError = document.querySelector('.second-name-error');

const $email = document.querySelector('#email-address');
const $emailError = document.querySelector('.email-error');

const $submitBtn = document.querySelector('.submitBtn');

function validName(name) {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    return regex.test(name);
}

function validEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateName(name, errorElement, inputElement) {
    if (!name) {
        errorElement.textContent = 'This field is required';
        errorElement.style.opacity = '1';
        inputElement.classList.remove('borderNormal');
        inputElement.classList.add('borderError');
        return false;
    } else if (!validName(name)) {
        errorElement.textContent = 'Please enter a valid name';
        errorElement.style.opacity = '1';
        inputElement.classList.remove('borderNormal');
        inputElement.classList.add('borderError');
        return false;
    } else {
        errorElement.style.opacity = '0';
        inputElement.classList.remove('borderError');
        inputElement.classList.add('borderNormal');
        return true;
    }
}

function validateEmail(email, errorElement, inputElement) {
    if (!email) {
        errorElement.textContent = 'This field is required';
        errorElement.style.opacity = '1';
        inputElement.classList.remove('borderNormal');
        inputElement.classList.add('borderError');
        return false;
    } else if (!validEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address';
        errorElement.style.opacity = '1';
        inputElement.classList.remove('borderNormal');
        inputElement.classList.add('borderError');
        return false;
    } else {
        errorElement.style.opacity = '0';
        inputElement.classList.remove('borderError');
        inputElement.classList.add('borderNormal');
        return true;
    }
}

const $generalEnquiry = document.querySelector('.general-enquiry-content');
const $generalEnquiryImg = document.querySelector('#general-enquiry');
const $supportRequest = document.querySelector('.support-request-content');
const $supportRequestImg = document.querySelector('#support-request');
const $errorType = document.querySelector('.typeError');

function changeBackground(element1, element2) {
    element1.classList.add('greenBg');
    element2.classList.remove('greenBg');
}

$generalEnquiry.addEventListener('click', () => {
    $generalEnquiryImg.src = "assets/images/icon-radio-selected.svg";
    $supportRequestImg.src = "assets/images/icon-radio.png";
    changeBackground($generalEnquiry, $supportRequest);
    typeStyleSelect ();
});

$supportRequest.addEventListener('click', () => {
    $supportRequestImg.src = "assets/images/icon-radio-selected.svg";
    $generalEnquiryImg.src = "assets/images/icon-radio.png";
    changeBackground($supportRequest, $generalEnquiry);
    typeStyleSelect ();
});

function typeStyleSelect () {
    if ($generalEnquiryImg.src != $supportRequestImg.src) {
        validateTypeStyle($generalEnquiry, $supportRequest, $errorType, '.5px solid var(--grey-500)', '0');
    }
}

function validateType() {
    if ($generalEnquiryImg.src === $supportRequestImg.src) {
        validateTypeStyle($generalEnquiry, $supportRequest, $errorType, '.5px solid var(--red)', '1');
        return false;
    } else {
        validateTypeStyle($generalEnquiry, $supportRequest, $errorType, '.5px solid var(--grey-500)', '0');
        return true;
    }
}

function validateTypeStyle(element1, element2, error, style, opacity) {
    error.style.opacity = opacity;
    element1.style.border = style;
    element2.style.border = style;
}

$submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    
    let isValidFirstName = validateName($firstName.value, $firstNameError, $firstName);
    let isValidSecondName = validateName($secondName.value, $secondNameError, $secondName);
    let isValidEmail = validateEmail($email.value, $emailError, $email);
    let isValidType = validateType();

    if (!isValidFirstName) {
        console.log('Nome inválido');
        return;
    }

    if (!isValidSecondName) {
        console.log('Nome inválido');
        return;
    }

    if (!isValidEmail) {
        console.log('Nome inválido');
        return;
    }

    if (!isValidType) {
        console.log('Nome inválido');
        return;
    }
    console.log('Nome válido');
});

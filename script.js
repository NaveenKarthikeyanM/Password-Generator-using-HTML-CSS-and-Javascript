document.addEventListener('DOMContentLoaded', () => {
    const lengthInput = document.querySelector('#length');
    const specialCharsInput = document.querySelector('#specialChars');
    const numeralsInput = document.querySelector('#numerals');
    const capitalLettersInput = document.querySelector('#capitalLetters');
    const generateBtn = document.querySelector('#generateBtn');
    const passwordDiv = document.querySelector('#password');

    function generatePassword(length, specialChars, numerals, capitalLetters) {
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const specials = '!@#$%^&*()_+[]{}|;:,.<>?';
        
        let characters = lowercase;
        if (capitalLetters) characters += uppercase;
        if (numerals) characters += numbers;
        if (specialChars) characters += specials;
        
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    function resetPassword() {
        passwordDiv.textContent = '';
        lengthInput.value = '';
        specialCharsInput.checked = false;
        numeralsInput.checked = false;
        capitalLettersInput.checked = false;
    }

    function resetPasswordField() {
        passwordDiv.textContent = '';
    }

    lengthInput.addEventListener('input', resetPasswordField);
    specialCharsInput.addEventListener('change', resetPasswordField);
    numeralsInput.addEventListener('change', resetPasswordField);
    capitalLettersInput.addEventListener('change', resetPasswordField);

    generateBtn.addEventListener('click', () => {
        const length = parseInt(lengthInput.value);
        const specialChars = specialCharsInput.checked;
        const numerals = numeralsInput.checked;
        const capitalLetters = capitalLettersInput.checked;

        if (isNaN(length) || length < 1 || length > 128) {
            passwordDiv.textContent = 'Please enter a valid length between 1 and 128';
            return;
        }

        const password = generatePassword(length, specialChars, numerals, capitalLetters);
        passwordDiv.textContent = password;
    });
});

document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;

    function isPalindrome(str) {
        const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }

    const result = isPalindrome(inputText);

    const resultDiv = document.getElementById('result');
    const userInputParagraph = document.querySelector('.user-input');
    
    if (result) {
        userInputParagraph.textContent = `"${inputText}" is a palindrome!`;
    } else {
        userInputParagraph.textContent = `"${inputText}" is not a palindrome.`;
    }

    resultDiv.classList.remove('hidden');
});
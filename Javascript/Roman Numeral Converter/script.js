document.getElementById('convertBtn').addEventListener('click', function() {
    const numberInput = document.getElementById('number').value;
    const outputDiv = document.getElementById('output');
    const romanNumeral = convertToRoman(parseInt(numberInput));
    if (romanNumeral) {
        outputDiv.textContent = `Roman Numeral: ${romanNumeral}`;
        outputDiv.style.display = 'block';
    } else {
        outputDiv.textContent = 'Please enter a valid number.';
        outputDiv.style.display = 'none';
    }
});

function convertToRoman(num) {
    if (num < 1 || num > 3999) return null;
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    let result = '';
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}
let complexity = 1;

function updateComplexityInput() {
    complexity = document.getElementById('complexity').value;
    encrypt(); 
}

function encrypt() {
    const input = document.getElementById('input').value;
    let text = '';
    for (let char of input) {
        text += String.fromCharCode(char.charCodeAt(0) + parseInt(complexity));
    }
    document.getElementById('encryptInput').value = text;
}

function decrypt() {
    const input = document.getElementById('encryptInput').value;
    let text = '';
    for (let char of input) {
        text += String.fromCharCode(char.charCodeAt(0) - parseInt(complexity));
    }
    document.getElementById('input').value = text;
}

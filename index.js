"use strict";
let str = prompt("Enter anything: a word, a sentence, a numeric pattern");
function palindrome() {
    let normalized = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversed = [...normalized].reverse().join('')
    alert(normalized);
    return normalized == reversed;
}

alert(palindrome());
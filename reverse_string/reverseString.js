function reverseString(string) {
    let stringArray = string.split('');
    return stringArray.reverse().join('');
}
module.exports = reverseString;
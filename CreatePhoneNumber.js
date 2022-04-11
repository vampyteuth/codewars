function createPhoneNumber(numbers){
    numbers.unshift('(')
    numbers.splice(4, 0, ') ')
    numbers.splice(8, 0, '-')
    return numbers.toString().replace(/,/g, '')
}
module.exports = function toReadable(number) {
    let units = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    }

    let second_tens = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen'
    }

    let tens = {
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    }
    
    if(number < 10) {
      return units[String(number)]
    }
    if(number >= 10 && number < 20) {
      return second_tens[String(number)]
    }
    if(number > 19 && number < 100 && number % 10 === 0){
      return tens[String(number)]     
    }
    if(number > 99 && number < 1000 && number % 100 === 0){
      return units[number / 100] + ' ' + 'hundred'   
    }

    let arr = String(number).split('').map(function(e, i, arr){
        return e * Math.pow(10, arr.length - i - 1)
    })

}

console.log(toReadable(100))
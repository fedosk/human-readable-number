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


    let arr = String(number).split('').map(function (e, i, arr) {
        return e * Math.pow(10, arr.length - i - 1)
    }).map(function (e, i, arr) {
        if (arr.length > 1 && e === 0) {
            return ''
        } else if (arr[i - 1] === 10) {
            return ''
        } else if (e < 10) {
            return units[e]
        } else if (e > 19 && e < 100) {
            return tens[e]
        } else if (e >= 100) {
            return units[e / 100] + ' ' + 'hundred'
        } else if (e === 10) {
            return second_tens[e + +arr[i + 1]]
        }
    })

    return arr.filter(function (f) {
        return f
    }).join(' ')
}

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}


//multiple strings to generate message from
const fullhoroscope = {
    motivationalHoroscope: ['love', 'friendship', 'finance', 'profession'],
    positives: ['find a perfect partner', 'get awesome job', 'buy a beautiful house', 'win a lottery'],
    negatives: ['pay a parking fine', 'work overtime', 'stay home with kids', 'save more money']

}

//empty string to generate message
let messageHoroscope = [];

//iterate through objects
for (let key in fullhoroscope) {
    let genNumFromKey = generateRandomNumber(fullhoroscope[key].length)

    // if else statement to see
    switch (key) {

        case 'motivationalHoroscope':
            messageHoroscope.push(`The topic today is ${fullhoroscope[key][genNumFromKey]}.`)
            break;

        case 'positives':
            messageHoroscope.push(`Get ready for a good news, because this month you will ${fullhoroscope[key][genNumFromKey]}.`)
            break;
        case 'negatives':
            messageHoroscope.push(`Not only good things can happen in horoscope and you might need to ${fullhoroscope[key][genNumFromKey]}.`)
            break;
        default:
            messageHoroscope.push(`No message for you has been regerated, please try again later`)
            break;
    }
}

function formatHoroscope(formatHoroscope) {


    const formatted = messageHoroscope.join('\n');


    console.log(formatted)

}
formatHoroscope(messageHoroscope)

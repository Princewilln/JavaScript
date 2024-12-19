// 12
function timeConversion(s) {
    // Write your code here
    // I am given a string that represents time in 12-hour format
    // I am to convert this time to 24-hour format
    // I am to return the time in 24-hour format
    // I am to return the time in the format hh:mm:ss
    
    // I am to check if the time is in AM or PM
    // If the time is in AM, I am to return the time as it is
    // If the time is in PM, I am to add 12 hours to the time and return the time
    // I am to remove the AM or PM from the time
    // I am to return the time in the format hh:mm:ss
    // I am to return the time as a string

    let period = s.slice(-2);
    let time = s.slice(0, -2);
    let [hours, minutes, seconds] = time.split(':');

    if (period === 'PM' && hours !== '12') {
        hours = String(Number(hours) + 12);
    } else if (period === 'AM' && hours === '12') {
        hours = '00';
    }

    return `${hours}:${minutes}:${seconds}`;

}
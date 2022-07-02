module.exports = function toReadable(number) {

   let numeric = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let twoDigit = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let num = String(number).split('');
   let humanReadableNumber;   

   if (number == 0) { return ('zero'); }

   if (num.length <= 2 && number < 20) {
      humanReadableNumber = (numeric[number]);
   } else if (num.length == 2 && number >= 20) {
      humanReadableNumber =  (twoDigit[num[0]] + ' ' + numeric[num[1]]);
   } else if (num.length == 3 && +(num[1] + num[2]) < 20) {
      humanReadableNumber = (numeric[num[0]] + ' ' + 'hundred' + ' ' + numeric[+(num[1] + num[2])]);
   } else if (num.length == 3 && +(num[1] + num[2]) >= 20) {
      humanReadableNumber = (numeric[num[0]] + ' ' + 'hundred' + ' ' + twoDigit[+num[1]] + ' ' + numeric[+num[2]]);
   } 

   return humanReadableNumber.trim();
   
} 

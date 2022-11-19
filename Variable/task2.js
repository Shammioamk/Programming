<<<<<<< HEAD
process.stdout.write("This program converts miles to kilometers.Please,give a distance in miles :");
process.stdin.on ( "data", function(inputFromUser)
{
// The statements below will be executed automatically after
// the user has typed in something.
process.stdout.write("1 miles is 1.609344 Kilometers" + "\n" );

const util= require("util");
//let x=(Number(inputFromUser)*1.609344);
process.stdout.write((Number(inputFromUser)+ util.format(" miles is %d", (Number(inputFromUser)*1.609344)))+" kilometers");
process.exit() ;

=======
process.stdout.write("This program converts miles to kilometers.Please,give a distance in miles :");
process.stdin.on ( "data", function(inputFromUser)
{
// The statements below will be executed automatically after
// the user has typed in something.
process.stdout.write("1 miles is 1.609344 Kilometers" + "\n" );

const util= require("util");
//let x=(Number(inputFromUser)*1.609344);
process.stdout.write((Number(inputFromUser)+ util.format(" miles is %d", (Number(inputFromUser)*1.609344)))+" kilometers");
process.exit() ;

>>>>>>> 4caa5405060a551ded6499c75d45734fa40b1c72
} ) ; 
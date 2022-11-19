
process.stdout.write("This progam is a computer game. Please type in a number :");
process.stdin.on ( "data", function(inputFromUser)
{

console.log("\nYou typed in number:"+(Number(inputFromUser)));
console.log("\nMy number is:"+(Number(inputFromUser)+1));
console.log("\nSorry you lost, I won. The game is over");
process.exit() ;

} ) ;
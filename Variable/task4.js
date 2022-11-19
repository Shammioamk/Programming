<<<<<<< HEAD
process.stdout.write("Please enter a number :");
process.stdin.on ( "data", function(inputFromUser)
{
// The statements below will be executed automatically after
// the user has typed in something.

let secretnumber = inputFromUser;
process.stdout.write(Number(inputFromUser)+ " + " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)+Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+ " - " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)-Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+ " * " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)*Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+ " / " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)/Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+ " % " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)%Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+"++");
process.stdout.write(" = "+(Number(inputFromUser)+1));

process.stdout.write("\n"+(Number(inputFromUser)+1)+"--"+" = "+((Number(inputFromUser)+1)-1));

process.exit() ;

} ) ;
=======
process.stdout.write("Please enter a number :");
process.stdin.on ( "data", function(inputFromUser)
{
// The statements below will be executed automatically after
// the user has typed in something.

let secretnumber = inputFromUser;
process.stdout.write(Number(inputFromUser)+ " + " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)+Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+ " - " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)-Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+ " * " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)*Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+ " / " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)/Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+ " % " + Number(secretnumber)); 
process.stdout.write(" = "+(Number(secretnumber)%Number(secretnumber)));

process.stdout.write("\n"+Number(inputFromUser)+"++");
process.stdout.write(" = "+(Number(inputFromUser)+1));

process.stdout.write("\n"+(Number(inputFromUser)+1)+"--"+" = "+((Number(inputFromUser)+1)-1));

process.exit() ;

} ) ;
>>>>>>> 4caa5405060a551ded6499c75d45734fa40b1c72

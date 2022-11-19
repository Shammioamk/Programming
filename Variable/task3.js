<<<<<<< HEAD
process.stdout.write("This program converts meters to other units of distance. Please, enyer a distance in meters: ");
process.stdin.on ( "data", function(inputFromUser)
{
// The statements below will be executed automatically after
// the user has typed in something.
const util= require("util");
const w= (1.057*(10**-16));
let x=Number(inputFromUser);
let a=(x*0.001);
let b=(x*0.000621371192);
let c=(x*1.094);
let d=(x*3.281);
let p=(x*39.3701);
let f=(x*w);
process.stdout.write(util.format("%d",x)+ " meters is:"+ "\n" );
process.stdout.write(util.format("%d",a.toFixed(3)).padStart(50)+ " kilometers"+ "\n" );
process.stdout.write(util.format("%d",b.toFixed(3)).padStart(50)+ " miles"+ "\n" );
process.stdout.write(util.format("%d",c.toFixed(3)).padStart(50)+ " yards"+ "\n" );
process.stdout.write(util.format("%d",d.toFixed(3)).padStart(50)+ " feet"+ "\n" );
process.stdout.write(util.format("%d",p.toFixed(3)).padStart(50)+ " inches"+ "\n" );
process.stdout.write(util.format("%d",Number.parseFloat(f).toFixed(3)).padStart(50)+ " light years"+ "\n" );

process.exit() ;

=======
process.stdout.write("This program converts meters to other units of distance. Please, enyer a distance in meters: ");
process.stdin.on ( "data", function(inputFromUser)
{
// The statements below will be executed automatically after
// the user has typed in something.
const util= require("util");
const w= (1.057*(10**-16));
let x=Number(inputFromUser);
let a=(x*0.001);
let b=(x*0.000621371192);
let c=(x*1.094);
let d=(x*3.281);
let p=(x*39.3701);
let f=(x*w);
process.stdout.write(util.format("%d",x)+ " meters is:"+ "\n" );
process.stdout.write(util.format("%d",a.toFixed(3)).padStart(50)+ " kilometers"+ "\n" );
process.stdout.write(util.format("%d",b.toFixed(3)).padStart(50)+ " miles"+ "\n" );
process.stdout.write(util.format("%d",c.toFixed(3)).padStart(50)+ " yards"+ "\n" );
process.stdout.write(util.format("%d",d.toFixed(3)).padStart(50)+ " feet"+ "\n" );
process.stdout.write(util.format("%d",p.toFixed(3)).padStart(50)+ " inches"+ "\n" );
process.stdout.write(util.format("%d",Number.parseFloat(f).toFixed(3)).padStart(50)+ " light years"+ "\n" );

process.exit() ;

>>>>>>> 4caa5405060a551ded6499c75d45734fa40b1c72
} ) ; 
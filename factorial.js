
function factorial(array)
{
    if(array[0]==0){console.log('Factorial of given number is 1');return;}
   else
   {
       var ans=1;
     for(var i=1;i<=array[0];i++)
     {
       ans=ans*i;
     }
     console.log('Factorial of given number is '+ans); 
   }
}

factorial(process.argv.slice(2));
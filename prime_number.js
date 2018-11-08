function sqroot(array)
{
    var a=1,ans=1;
    while(ans<=array[0])
    {
      a++;
      ans=a*a;
    }
    a--;
    if(a*a==array[0]){console.log("given number is not a prime number");return -1;}
    //console.log(a);
    return a;
}

function primeNumber(array)
{
  if(array[0]<=1){console.log("Given number is not a prime number");return;}
  var a=sqroot(array);
  if(a==-1)return;
  else
     {
      for(var i=2;i<a;i++)
       {
        if(array[0]%i==0)
          {console.log("Given number is not a prime number");return;}
       }
     console.log('Given number is a prime number');
     }
} 
primeNumber(process.argv.slice(2));
//time complexity square root of n
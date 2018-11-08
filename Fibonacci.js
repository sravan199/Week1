function fibonacci(array)
{
var a1=0,a2=1,temp;
//console.log(a1,a2);
for(var i=0;i<array[0];i++)
 {
      temp=a2;
      a2=a1+a2;
      a1=temp;
      console.log(a2 );
 }
}

fibonacci(process.argv.slice(2));
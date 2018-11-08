function min(array)
{
 var i,min=array[0];
 for(i=1;i<array.length;i++)
 {
     if(Number(min)>Number(array[i]))
     {
         min=array[i];
     }
 }
 console.log('min element in array is '+min);
}

min(process.argv.slice(2));
function max(array)
{
 var i,max=array[0];
 for(i=1;i<array.length;i++)
 {
     if(max<array[i])
     {
         max=array[i];
     }
 }
 console.log('max element in array is '+max);
}

max(process.argv.slice(2));
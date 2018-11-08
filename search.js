function search(array)
{
    
for(var i=1;i<array.length;i++)
 {
   if(array[i]==array[0])
   {
   console.log('Element is present ');
   break;
   }
 }
 if(i==array.length)console.log('element not found');
   
}

search(process.argv.slice(2));
/*function sorting(array)
{
    var temp;
for(var i=0;i<array.length-1;i++)
{
  for(var j=0;j<array.length-1-i;j++)
  {
    if(Number(array[j])>Number(array[j+1]))
    {
      temp=array[j];
      array[j]=array[j+1];
      array[j+1]=temp;
     }  
  }
}
console.log(array);
//time complexity is n2;
} */
function sorting(array)
{
 function partition(array,start,end)
{
 var i,j=start,temp;
 for(i=start;i<end;i++)
 {
   if(Number(array[i])<Number(array[end]))
   {
      temp=array[i];
      array[i]=array[j];
      array[j]=temp;
      j++;
   }
 }
 temp=array[end];
 array[end]=array[j];
 array[j]=temp;
 return (j);
}

function quicksort(array,start,end)
{
  if(start<end)
  {
  var p=partition(array,start,end);
  quicksort(array,start,p-1);
  quicksort(array,p+1,end);
  }
}
quicksort(array,0,array.length-1);
console.log(array);
}
sorting(process.argv.slice(2));
//time complexity is nlogn (avg case) 
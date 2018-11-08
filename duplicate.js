function duplicate(array)
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
//console.log(array);
console.log('duplicate elements in array are');

for(var i=0;i<=array.length-2;i++)
 {
   if(array[i]!=array[i+1])
   {
       if((i!=0)&&(array[i-1]===array[i]))
       console.log(array[i]);
   }
 }
 if(array[i-1]===array[i]){console.log(array[i]);}
}

duplicate(process.argv.slice(2));
//time complexity is nlogn
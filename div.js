function div(array)
{
    if(array[1]==0){console.log('Denominator is zero');return;}
    var result=Number(array[0])/Number(array[1]);
    console.log('result is '+ result);
}
div(process.argv.slice(2)); 
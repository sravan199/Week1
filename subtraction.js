function subtraction(array)
{
    var sum=Number(array[0])-Number(array[1]);
    console.log('sum of 2 numbers is '+ sum);
}
subtraction(process.argv.slice(2));
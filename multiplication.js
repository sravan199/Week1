function mul(array)
{
 console.log('product of 2 numbers is ' +Number(array[0]*array[1]))

}


mul(process.argv.slice(2));
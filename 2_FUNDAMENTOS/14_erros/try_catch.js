const x = "10";

try {
 
    x = x + 1;

} catch (error) {

  console.error("error: ",error.message);

}

console.log("depois do erro");
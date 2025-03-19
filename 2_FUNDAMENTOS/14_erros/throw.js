const x = "10";

if (!Number.isInteger(Number.parseInt(x))) {
  throw new Error("x não é um número inteiro");
}

console.log("depois do erro");
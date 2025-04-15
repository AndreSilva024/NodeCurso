const fs = require("fs")
const arquivo = "arquivo.txt"
const arquivoRenomeado = "arquivoRenomeado.txt"
fs.rename(arquivo, arquivoRenomeado, function (err) {

    if (err) {
        console.log(err)
        return
    }else{

        console.log(`Arquivo ${arquivo} renomeado para ${arquivoRenomeado} com sucesso`)

    }

})
function criarCampos(){
    let quantidadeNumeros = document.getElementById('quantidadeNumeros').value
    
    let digiteNumero = document.getElementById('digiteNumero')
    
    digiteNumero.innerHTML = " "
    for(let i = 0; i < quantidadeNumeros; i++){        
        digiteNumero.innerHTML += `<div>`
        digiteNumero.innerHTML += `<label>Insira um número: </label>`
        digiteNumero.innerHTML += `<input class="numero" id="${"numero" + i}" type="number">`
        digiteNumero.innerHTML += `</div>`
    }
}

function soma(){
    let qntSoma = document.getElementsByClassName("numero").length
    let soma = 0
    for(let i = 0; i < qntSoma; i++){
        let numeroSomado = document.getElementById("numero" + i).value
        soma = soma + numeroSomado

        console.log(soma)
    }
    
}



/*let lista = [8, -2, 9, 10, -3, -7]

console.log("Número negativos: ")

for(let i = 0; i < lista.length; i++){
   // console.log(`A posição ${i} tem o valor ${lista[i]}`)
    if(lista[i] < 0){
        console.log(lista[i])
    }
}*/
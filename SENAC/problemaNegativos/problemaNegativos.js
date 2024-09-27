function criarCampos(){
    let quantidadeNumeros = document.getElementById('quantidadeNumeros').value
    

    if(quantidadeNumeros < 0){
        window.alert("Digite um número maior que 0")
    } else {
            let digiteNumero = document.getElementById('digiteNumero')
            
            digiteNumero.innerHTML = " "
            for(let i = 0; i < quantidadeNumeros; i++){        
                digiteNumero.innerHTML += `<div>`
                digiteNumero.innerHTML += `<input class="numero" id="${"numero" + i}" type="number" placeholder="Digite o ${i+1}º número">`
                digiteNumero.innerHTML += `</div>`
            }
        }
}

function soma(){
    let qntSoma = document.getElementsByClassName("numero").length
    let soma = 0

    for(let i = 0; i < qntSoma; i++){
        let numeroSomado = parseInt(document.getElementById("numero" + i).value)
        soma = soma + numeroSomado
    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML += `<h3>A soma é ${soma}</h3>` 
}
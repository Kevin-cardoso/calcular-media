let btnResulado = document.getElementById("resposta");

function somar(){
    let primeiNota = document.getElementById("primeira").value;
    let seguNota = document.getElementById("segunda").value;
    let resultado = document.getElementById("resultado");
    let n1 = parseInt(primeiNota);
    let n2 = parseInt(seguNota);

    if(primeiNota !== '' && seguNota !== ''){ //Confere se os campos estão vazios
        let media = (n1 + n2)/ 2;
        if(media >= 5.0 && media <= 10.0){
            resultado.textContent = `Você foi APROVADO, com a nota ${media}`;
        }else if(media <= 4.9){
            resultado.textContent = `Você foi REPROVADO, com a nota ${media}`;
        }else if(media = 10.01){
            resultado.textContent = 'Valor Inválido !!!';
        }
        
    }else{
        resultado.textContent = 'Preencha todos os campos !!!';
    }
}

btnResulado.addEventListener("click", somar);


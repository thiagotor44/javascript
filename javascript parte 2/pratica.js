function compararNumeros(num1, num2){
    if(!num1 || !num2) return "Defina dois números!";
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criarSegundaFrase(num1,num2);
    return `${primeiraFrase} ${segundaFrase}`;
}
function criaPrimeiraFrase(num1, num2){
    let saoIguais='';
    if(num1 !== num2){
        saoIguais='não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criarSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let resultadoQue10 ='menor';
    let resultadoQue20 = 'menor';
    const comparar10 = soma > 10;
    const comparar20 = soma > 20;

    if(comparar10){
        resultadoQue10 = 'maior';

    }

    if(comparar20){
        resultadoQue20 = 'maior';
    }
    return `Sua some é ${soma}, que é ${resultadoQue10} que 10 e ${resultadoQue20} que 20`;
}

console.log(compararNumeros());


// function compararNumeros(num1, num2){
//     const saoIguais = num1 === num2;
//     const soma= num1 + num2;
//     // return saoIguais ? "Sâo iguais" : "não são iguais";

//     // if(saoIguais){
//     //     return "São iguais";
//     // }
//     // return "Não são iguais";
// }
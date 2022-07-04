function somaNumeros(art){
   return art.reduce(function (prev, current){
    console.log({prev});
    console.log({current});

    return prev + current;
    });
}

const art = [1, 2];

console.log(somaNumeros(art));
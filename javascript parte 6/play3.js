function filtrarPares(art){
    return art.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const myArrray = [1,23,55,67,,30,2,3,4,44];

console.log('par ->',filtrarPares(myArrray));
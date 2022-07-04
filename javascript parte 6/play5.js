const list = [
    {
        name: 'sabao em po',
        preco: 25,
    },
    {
        name: 'biscoito',
        preco: 3,
    },
    {
        name: 'toalha',
        preco: 28
    }
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, list){
    return list.reduce(function( prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, list));
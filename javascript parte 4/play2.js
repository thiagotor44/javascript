function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 ={
    nome: "Ana",
    idade: 49
};

const pessoa2 = {
    nome: "Thiago",
    idade: 25
};

const animal = {
    nome: "Spark",
    idade: 6,
    raca: "Pug",
};

console.log(calculaIdade.apply(pessoa1, [30]));
// console.log(calculaIdade.call(pessoa2, 30));
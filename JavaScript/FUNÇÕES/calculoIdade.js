function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;   
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Fran',
    idade: 31,
};

const animal = {
    nome: 'Marrie',
    idade: 15,
    raca: 'SRD',
};

//console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.apply(animal, [7]));

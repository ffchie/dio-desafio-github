/* tipos primitivos

// booleanos
var vOuF=false;
console.log(vOuF);
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

// string
var nome = "Fran";
console.log(nome);
console.log(typeof(nome));

//function
var função = function(){}
console.log(typeof(função));

// como declarar
var variavel = "Fran";
variavel = "Chiessi";
console.log(variavel);
 
let variavel2 = "Fran";
variavel2 = "Chiessi";
console.log(variavel2);

const constante = "Fran";
constante = "Chiessi";
console.log(constante);*/

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();



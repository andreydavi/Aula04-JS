// sorteando 10 números
let numeroFor = 0;
for(let i = 0; i <= 9; i++){
    numeroFor = parseInt(Math.random()*11);
    console.log(numeroFor);
} 
console.log('--------------------------------');
console.log('fazer uma contagem entre 0 e 20');
// fazer uma contagem entre 0 e 20
for(let i = 0; i <= 20; i++){
    console.log(i);
}

console.log('--------------------------------');
console.log('fazer uma contagem entre 0 e 100 pulando de 5 em 5');

// fazer uma contagem entre 0 e 100 pulando de 5 em 5
for(let i = 0; i <= 100; i+=5){
    console.log(i);
}

console.log('--------------------------------');
console.log('--------------------------------');
console.log('Fazer uma contagem regressiva entre 20 e 0');
// Fazer uma contagem regressiva entre 20 e 0
for(let i = 20; i >= 0; i--){
    console.log(i);
}

// Sortear um número entre 0 e 10 - Exibir na tela: 
// O número sorteado
// Tabuada desse número no formato:
// numeroSorteado * 0 = 0
// numeroSorteado * 1 = 0
// numeroSorteado * 2 = 0
// numeroSorteado * 3 = 0
// numeroSorteado * 4 = 0
// numeroSorteado * 5 = 0
// numeroSorteado * 6 = 0
// numeroSorteado * 7 = 0
// numeroSorteado * 8 = 0
// numeroSorteado * 9 = 0
// numeroSorteado * 10 = 0

let numeroSorteado = parseInt(Math.random()*11);
console.log(`Número sorteado = ${numeroSorteado}`);
for(let i = 0; i <= 10; i ++){
    console.log(`${numeroSorteado} x ${i} = ${numeroSorteado*i}`);   
}
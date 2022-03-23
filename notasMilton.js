const notasCalculadas = [];
const notasACalcular = [66, 62, 41, 37,27, 34, 54, 41, 41, 41, 45,55, 48, 48, 69, 58, 55, 45, 48];

const miltonOchoa = notaAConvertir => {
  let nota = Math.floor(notaAConvertir);
  if (nota >= 1 && nota < 22) {
    let definitiva = 30;
    notasCalculadas.push(definitiva);
 } else if (nota === 22 || nota === 23) {
   let definitiva = nota + 10;
   notasCalculadas.push(definitiva);
 } else if (nota === 24 || nota === 25) {
   let definitiva = nota + 11;
   notasCalculadas.push(definitiva);
 } else if (nota > 25 && nota < 29) {
   let definitiva = nota + 12;
   notasCalculadas.push(definitiva);
 } else if (nota === 29 || nota === 30) {
   let definitiva = nota + 13;
   notasCalculadas.push(definitiva);
 } else if (nota === 31 || nota === 32) {
  let definitiva = nota + 14;
  notasCalculadas.push(definitiva);
 } else if (nota === 33 || nota === 34) {
   let definitiva = nota + 15;
   notasCalculadas.push(definitiva);
 } else if (nota === 35 || nota === 36 || nota === 37) {
   let definitiva = nota + 16;
   notasCalculadas.push(definitiva);
 } else if (nota === 38 || nota === 39) {
   let definitiva = nota + 17;
   notasCalculadas.push(definitiva);
 } else if (nota === 40 || nota === 41) {
   let definitiva = nota + 18;
   notasCalculadas.push(definitiva);
 } else if (nota === 42 || nota === 43) {
   let definitiva = nota + 19;
   notasCalculadas.push(definitiva);
 } else if (nota === 44 || nota === 45 || nota === 46) {
   let definitiva = nota + 20;
   notasCalculadas.push(definitiva);
 } else if (nota === 47 || nota === 48) {
   let definitiva = 67;
   notasCalculadas.push(definitiva);
 } else if (nota === 49) {
   let definitiva = 68;
   notasCalculadas.push(definitiva);
 } else if (nota === 50 || nota === 51) {
   let definitiva = 69;
   notasCalculadas.push(definitiva);
 } else if (nota === 52 || nota === 53) {
   let definitiva = nota + 18;
   notasCalculadas.push(definitiva);
 } else if (nota === 54) {
   let definitiva = 71;
   notasCalculadas.push(definitiva);
 } else if (nota === 55) {
   let definitiva = 72;
   notasCalculadas.push(definitiva);
 } else if (nota === 56 || nota === 57 || nota === 58) {
   let definitiva = nota + 16;
   notasCalculadas.push(definitiva);
 } else if (nota === 59) {
   let definitiva = 74;
   notasCalculadas.push(definitiva);
 } else if (nota > 59 && nota < 77) {
   let definitiva = nota + 15;
   notasCalculadas.push(definitiva);
 } else if (nota === 77) {
   let definitiva = 91;
   notasCalculadas.push(definitiva);
 } else if (nota === 78 || nota === 79) {
   let definitiva = 92;
   notasCalculadas.push(definitiva);
 } else if (nota > 79 && nota < 83) {
   let definitiva = 93;
   notasCalculadas.push(definitiva);
 } else if (nota > 82 && nota < 86) {
   let definitiva = 94;
   notasCalculadas.push(definitiva);
 } else if (nota === 86 || nota === 87) {
   let definitiva = 95;
   notasCalculadas.push(definitiva);
 } else if (nota === 88 || nota === 89 || nota === 90) {
   let definitiva = 96;
   notasCalculadas.push(definitiva);
 } else if (nota === 91 || nota === 92 || nota === 93) {
   let definitiva = 97;
   notasCalculadas.push(definitiva);
 } else if (nota === 94 || nota === 95) {
   let definitiva = 98;
   notasCalculadas.push(definitiva);
 } else if (nota === 96 || nota === 97 || nota === 98) {
   let definitiva = 99;
   notasCalculadas.push(definitiva);
 } else if (nota === 99 || nota === 100) {
   let definitiva = 100;
   notasCalculadas.push(definitiva);
 } else {
   let definitiva = 'Inserta un número entre 1 y 100, sin símbolos';
   notasCalculadas.push(definitiva);
 };
 
 
};
notasACalcular.forEach(miltonOchoa);
console.log(notasCalculadas);
console.log('Número de notas ingresadas: ' + notasACalcular.length);
console.log('Número de notas procesadas correctamente: ' + notasCalculadas.length);
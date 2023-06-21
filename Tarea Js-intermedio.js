/* 1. Crea un programa que tome un número como argumento y devuelva "par" si el
número es par o "impar" si el número es impar.*/


function parOimpar(numero){

    if( numero % 2 === 0){
     console.log("par");
    }
    else {
    console.log("impar")}   
    
}
numero = 2
console.log(parOimpar(numero))

numero = 1
console.log(parOimpar(numero))

/*2. Crea un programa que tome un número como argumento y devuelva "positivo" si el
número es mayor que cero o "negativo" si el número es menor que cero.*/

function signo(num2){
    if(num2 > 0){
        console.log("positivo");
    }
    else{
        console.log("negativo");
    }
}
num2 = 1
console.log(signo(num2))

num2 = -1
console.log(signo(num2))

/*3. Crea un programa que tome un string como argumento y devuelva "largo" si el
string tiene más de 10 caracteres o "corto" si el string tiene 10 caracteres o menos.*/

function longitud(palabra){
    if ( palabra.length > 10 ){
        return "largo";
    }
    else  {
        return "corto";
    }
}
console.log(longitud("esta palabra tiene mas de 10"));
console.log(longitud("ja ja"));
 
// Arrays:

/*1. Crea un array con los números del 1 al 10 y muestra cada uno de los elementos en
la consola.*/

let myArray=[1,2,3,4,5,6,7,8,9,10];

console.log(myArray);


/*2. Crea un array con los nombres de tus tres mejores amigos y muestra cada uno de
ellos en una lista en tu página web.*/

let texto =""

const amigos = ["Milo", "Ricar", "Eduardo"];
amigos.forEach(funcion);

document.getElementById("amigos_listado").innerHTML =texto;

function funcion(amigos){
    texto +=  amigos + "<br>";

}

/*3. Crea un array con las edades de tus familiares y amigos cercanos y calcula la edad
promedio*/


const edades= [20, 55, 18, 70];

const promedio = edades.reduce((a,b)=> a + b)/ edades.length;

console.log(promedio);


/*Bucle for con arrays:
1. Crea un array con los nombres de tus cinco colores favoritos y muestra cada uno de
ellos en la consola.*/

const colores= ["verde", "azul", "violeta", "rojo", "amarillo"];

for (let i = 0; i<colores.length; i++){
console.log(colores[i]);
}

/*2. Crea un array con los nombres de tus cinco frutas favoritas y muestra cada uno de
ellos en una lista en tu página web.*/

let texto2 =""

const frutasPreferidas = ["banana", "kaki", "mandarina", "sandia", "naranja"];

frutasPreferidas.forEach(funcionFrutas);

document.getElementById("frutas").innerHTML = texto2

function funcionFrutas(frutasPreferidas){
    texto2 += frutasPreferidas + "<br>"
}

/*3. A partir del array a continuación: [1, 4, 6, 7, 20, 18] crea un programa que los ordena
de menor a mayor recorriendolos. (No usar sort). Pista: for anidado.*/

let arr = [1, 4, 6, 7, 20, 18];
let n = arr.length;

for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
    }
    let arr3 = arr[i];
    arr[i] = arr[min];
    arr[min] = arr3;
}

console.log(arr);

/*Funciones:
1. Suma de números pares: Escribe una función llamada sumarNumerosPares que
reciba un número entero n y devuelva la suma de todos los números pares desde 1
hasta n. Por ejemplo, si se llama a la función con el argumento 6, debería devolver
12 (2 + 4 + 6).*/

function sumarNumerosPares(n) {
    let suma = 0;
    for (let i = 2; i <= n; i += 2) {
        suma += i;
    }
    return suma;
}

console.log(sumarNumerosPares(6)); 

/*2. Calculadora de impuestos: Escribe una función llamada calcularImpuestos que
calcule la cantidad de impuestos a pagar dada una cantidad de dinero monto. La
función debe aplicar un impuesto del 20% a los montos mayores o iguales a 1000 y
un impuesto del 10% a los montos menores a 1000. Por ejemplo, si se llama a la
función con el argumento 1500, debería devolver 300 (20% de 1500).*/

function calcularImpuestos(monto) {
    let impuesto;
    if (monto >= 1000) {
        impuesto = monto * 0.2;
    } else {
        impuesto = monto * 0.1;
    }
    return impuesto;
}

console.log(calcularImpuestos(1500));

document.write("ejercicios logica 2");

//-------------EJERCICIO 1------------
// Escribir una función que tome una array de números por parámetros y devuelva un array con el número mayor y el menor.
// Ejemplo: [1,2, 3,4, 5] => [1, 5]
const array1 = [1,2,3,4,5];
const array2 =[85,2,36,98,120]
const arrayFinal = [];
function mayorMenor (arr){
    let newArrayOrdenado = arr.sort(function(a,b){
        return a-b
    });
    console.log(newArrayOrdenado);
    arrayFinal.push(newArrayOrdenado.shift())
    arrayFinal.push(newArrayOrdenado.pop())
    return arrayFinal;
}
console.log(mayorMenor(array2));

//-----------EJERCICIO 2-----------------
// Escribir una función que tome dos parámetros. una string y un caracter. La función debe devolver cuántas veces aparece ese caracter en la string. Si el caracter no aparece en la string debe retornar false.
// Ejemplo: ("hola mundo", "o") => 2 veces.
const string1 = 'ejercicios de logica';
const caracter1 = 'i';
function caracterAparece (str, caracter){
        let toArray = str.split('');
        let caracteres = toArray.filter(element => element === caracter);
        return `El caracter ${caracter} aparece ${caracteres.length} veces`;

};
console.log(caracterAparece(string1,caracter1));

//-----------EJERCICIO 3----------------
// Limpiar una array. Debemos crear una función que tome una array de múltiples datos y que solo devuelva los strings dentro de la array.
// Ejemplo: [1, 'hola', 2, true, 'mundo'] => ['hola', 'mundo']
const array3 = [1, 'hola', 2, true, 'mundo']
function limpiarArray (arr){
    let arrayLimpio = arr.filter( element => typeof element === 'string' )
    return arrayLimpio
}
console.log(limpiarArray(array3));

//--------------EJERCICIO 4---------------
// Contar vocales. Crear una función que cuente la cantidad de vocales que posee una palabra.

const string2 = 'abuelitoi';
const string3 = 'cuaderno'
function esVocal(element){
if(element === 'a'){
    return true
} else if(element === 'e'){
    return true
}else if (element == 'i'){
    return true
}else if (element == 'o'){
    return true
}else if(element == 'u'){
    return true
}};

function cantVocales (str){
    let arr = str.split('');
    arrayVocales = arr.filter(esVocal);
    //console.log(arrayVocales)
    return `la cantidad de vocales de ${str} es ${arrayVocales.length}`
}
console.log(cantVocales(string3));

//------------EJERCICIO 5----------------
// Escribir una función que quite todos las vocales de una string.
// Ejemplo: (banana) => bnn
string4 = 'manzana'
function noEsVocal(element){
    if(element === 'a'){
        return false
    } else if(element === 'e'){
        return false
    }else if (element == 'i'){
        return false
    }else if (element == 'o'){
        return false
    }else if(element == 'u'){
        return false
    } else {
        return true
    }};
function quitarVocales(palabra){
    let array = palabra.split('');
    let arraySinVocales = array.filter(noEsVocal);
    return arraySinVocales.join('');
}
console.log(quitarVocales(string4));
// var words = ['uno', 'dos', 'tres', 'cuatro'];
// words.forEach(function(word) {
//   console.log(word);
//   if (word === 'dos') {
//     words.shift();
//   }
// });
//---------------EJERCICIO 6-------------
// Quitar los duplicados de una array. Escribir una función que tome una array por parámetros y quite todos los valores duplicados.
// Ejemplo: [1, 1, 2,2, true, true, 'hola', 'mundo', 'hola] => [1, 2, true, hola, mundo]
// const array5 = [1, 1, 2,2, true, true, 'hola', 'mundo', 'hola'];
// function filterArray (arr){
//     arr.filter(function (ele , pos){
//         let newArray = arr.indexOf(ele) == pos;
//         return newArray
//     })
// };
// console.log(filterArray(array5))
// const filtrarArray = array5.filter(function(ele , pos){
//     return array5.indexOf(ele) == pos;
// }) 
// ;
// console.log(filtrarArray)
// 2.Dada la cadena “Somos SENA”:

// c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
let cadena= "Somos SENA";
for (let i = 0; i < cadena.length; i++) {
    if (cadena.includes("e") || cadena.includes("E")) { 
    console.log("comtieme la letra E")
}else{
    console.log("la cadena no contiene la letra E")
}
}

// d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
// variable contadora para contar el número de veces que se encuentra la letra “o”.

let mensaje= "Somos SENA";
let repetido=0
for (let index = 0; index < mensaje.length; index++) {
    if (mensaje[index]=="o") {
        repetido++
    }
}
console.log("las repeticiones de O son:", repetido)
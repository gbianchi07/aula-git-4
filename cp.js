/*switch
let opcao = parseInt(prompt("digite uma opcao"));

switch(opcao){
    case 1:
        document.write("primeira opcao")
        break;
    case 2:
        document.write("segunda opcao")
        break;
    case 3:
        document.write("terceira opcao")
        break;
    default:
        document.write("nenhuma das opcoes validas")
        break;
    }
*/
// incremnto e decremento
let numero = 7
document.write(numero)
valor = numero+1
document.write("<br><br>")
numero= numero+1
document.write(numero)
//decretando valores
let numero1 = 7
document.write(numero1)
valor = numero-1
document.write("<br><br>")
numero1= numero-1
document.write(numero1)

// for

for (let i=0; i<10; i++){
    document.write("o valor i vai ate:"+i);
    document.write("<br><br>")
     }

let carros=["gol","fusca","hb20","corsa"]

for(let i=0; i < carros.length;i++){
    document.write(carros[i]);
    document.write("<br><br>")
}
// script.js
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function mover(){

    let n = lista.length;
     for (let i = 0; i < n; i++){
        for(let j = 0; j < n - 1 - i; j++){
            
            lista[j].style.background = "red";
            lista[j + 1].style.background = "red";

            await esperar(10);
            let alturaAtual = parseFloat(lista[j].style.height);
            let altuarProx = parseFloat(lista[j + 1].style.height);

            if(alturaAtual > altuarProx){
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
                await esperar(30);
            }
                lista[j].style.background = "white";
                lista[j + 1].style.background = "white";
        }
         lista[n - 1 -i].style.background = "green";
         let novaLargura = 0;
         for(let i = 0; i < lista.length; i++){
             lista[i].style.left = novaLargura + 'px';
             novaLargura += 41;
         }
     }

    

}
let circulo = document.getElementById("mov");
let altura = 100;
let lisa_tamanho = [];

const tela_y = window.innerHeight;
const tela_x =  window.innerWidth;
let largura = 0;

let lista = [];
for(let i = 0; i < Math.floor(tela_x / 30) ; i++){
 let minhadiv = document.createElement('div');  
    let radom = Math.random() * tela_y;
    minhadiv.classList.add("circulo");
    minhadiv.style.left = largura + 'px';
    minhadiv.style.height = radom + 'px';
    minhadiv.style.top += (tela_y - radom) + 'px' ;
    largura += 41;
    lista.push(minhadiv);
}
for(let i = 0; i < lista.length; i++){
    document.body.append(lista[i]);
    lisa_tamanho.push(parseInt(lista[i].style.height));
}
mover();

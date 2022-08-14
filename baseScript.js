let txtn = document.getElementById('txtn')
let box = document.getElementById('caixa')
let lista = []

let res = document.getElementById('res')

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function add(){
    if(isNumero(txtn.value) && inLista(txtn.value, lista)){
                       
        
        let num = Number(txtn.value)

        let item = document.createElement('option')
            item.text = `Valor adicionado: ${num}` //Criar texto
            box.appendChild(item) //Colocar no <select>

        lista.push(num) 
    }

    else{

        window.alert('VALOR INVÁLIDO OU JÁ ENCONTRADO NA LISTA!')  

    }
}

function calcular(){

    if(txtn.value.length == 0 || txtn.value < 1 || txtn.value > 100){
        window.alert('DEVE-SE PREENCHER UM NÚMERO DE 1 A 100!')
    }
    else{

        lista.sort()
        
        
        //===== Quantidade de Números cadastrados =======

        /* let res = document.createElement('p') */
        res.innerHTML = `Ao todo, temos ${lista.length} números cadastrados<br><br>`

        //===== Maior número cadastrado =======

        let maiorN = lista.length - 1
        
        res.innerHTML += `O maior valor cadastrado: ${lista[maiorN]}<br><br>`

         //===== Menor número cadastrado =======

         res.innerHTML += `O menor valor cadastrado: ${lista[0]}<br><br>`

         //===== Soma =======

         let s = 0
         for(let x in lista){
            console.log(`Elemento ${x} com o Conteúdo ${lista[x]}<br><br>`)
             s += lista[x]   
         }
         res.innerHTML += `A soma dos valores: ${s}<br><br>`

         //===== Média =======

         let media = s / lista.length

         res.innerHTML += `A média dos valores: ${media}`



    }
    
}
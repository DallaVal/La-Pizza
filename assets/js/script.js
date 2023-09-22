var largura = window.innerWidth
function carregar(){
    if(largura <= 980 ){
        var mostrarmais = document.getElementById('row2')
        mostrarmais.style = 'display: none; margin: 4px;'
        var destaque = document.getElementById('destaque')
        destaque.style = 'margin-top: 520px;'
        var sobre = document.getElementById('sobre')
        sobre.style = 'margin-top: 550px;'
    }
}


function clicar(){
    var mostrarmais = document.getElementById('row2')
    var destaque = document.getElementById('destaque')
    var rows = document.getElementById('row')
    var textmostrarmenos = document.getElementById('mostrarmais')
    var tirarmostrarmenos = document.getElementById('mostrarmenos')
    mostrarmais.style = 'display: flex; margin: 40px;'
    destaque.style = 'margin-top: 187px'
    textmostrarmenos.style = 'display: none'
    tirarmostrarmenos.style = 'display: flex'
    var sectionsobre = document.getElementById('sobre')
    sectionsobre.style = 'margin-top: 260px'
    if(largura <= 1600 && largura > 980){
        var sobre = document.getElementById('sobre')
        sobre.style = 'margin-top: -250px;'
    } else if(largura <= 980){
        var destaque = document.getElementById('destaque')
        destaque.style = 'margin-top: 1300px;'
        var sobre = document.getElementById('sobre')
        sobre.style = 'margin-top: 1300px'
        var row2 =  document.getElementById('row2')
        row2.style = 'margin-top: 20px'
        var pizza2 = document.querySelector('.pizza2')
        pizza2.style = 'margin-top: 60px;'
        var pizza3 = document.querySelector('.pizza3')
        pizza3.style = 'margin-top: 60px;'
        var pizza4 = document.querySelector('.pizza4')
        pizza4.style = 'margin-top: 60px;'
        var pizza5 = document.querySelector('.pizza5')
        pizza5.style = 'margin-top: 60px;'
        var pizza6 = document.querySelector('.pizza6')
        pizza6.style = 'margin-top: 60px;'
        var pizza7 = document.querySelector('.pizza7')
        pizza7.style = 'margin-top: 60px;'
        var pizza8 = document.querySelector('.pizza8')
        pizza8.style = 'margin-top: 60px;'
    }
}


function segundoclick(){
    var mostrarmais = document.getElementById('row2')
    var destaque = document.getElementById('destaque')
    var rows = document.getElementById('row')
    var textmostrarmenos = document.getElementById('mostrarmais')
    var tirarmostrarmenos = document.getElementById('mostrarmenos')
    mostrarmais.style = 'display: none; margin: 4px;'
    destaque.style = 'margin-top: 0px'
    textmostrarmenos.style = 'display: flex'
    tirarmostrarmenos.style = 'display: none'
    var sectionsobre = document.getElementById('sobre')
    sectionsobre.style = 'margin-top: 0px'
    if(largura <= 1600 && largura > 980){
        var sobre = document.getElementById('sobre')
        sobre.style = 'margin-top: -480px;'
    } else if(largura <= 980){
        var destaque = document.getElementById('destaque')
        destaque.style = 'margin-top: 520px;'
        var sobre = document.getElementById('sobre')
        sobre.style = 'margin-top: 550px;'
    }
}
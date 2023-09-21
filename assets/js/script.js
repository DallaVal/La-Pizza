

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
}
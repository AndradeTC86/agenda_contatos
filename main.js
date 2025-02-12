let linhas = ''
const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const inputNomeMateria = document.getElementById('nome-materia')
    const inputNotaMateria = document.getElementById('nota-materia')   

    let linha = '<tr>'
    linha += `<td>${inputNomeMateria.value}</td>`
    linha += `<td>${inputNotaMateria.value}</td>`
    linha += `<td>${inputNotaMateria.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'

    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    inputNomeMateria.value = ''
    inputNotaMateria.value = ''
})
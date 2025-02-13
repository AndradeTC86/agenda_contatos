const form = document.getElementById('form-contato')

let linhas = ''
const telefones = []


form.addEventListener('submit', function (event) {
    event.preventDefault()
    adicionarLinha()
    atualizarTabela()
    atualizarQuantidadeContatos()
})

function adicionarLinha(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('telefone-contato')
    
    if (telefones.includes(inputNumeroContato.value)){
        alert(`O número de telefone ${inputNumeroContato.value} já foi incluído na lista`)
    } else{    
    telefones.push(inputNumeroContato.value)

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`    
    linha += '</tr>'

    linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizarQuantidadeContatos() {
    const quantidadeContatos = document.getElementById('quantidade-contatos');
    quantidadeContatos.textContent = telefones.length;
}

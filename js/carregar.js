const tarefas = JSON.parse (localStorage.getItem("tarefas")) || []

tarefas.forEach( tarefa => card(tarefa) )

function card(tarefa){

    //template literals => ``
    const content = `
    <div class="card" style="width: 300px;">
        <div class="card-divider">
          <h4>${tarefa.titulo}</h4>
        </div>
        <img src="/image/Produtos/brock.png">
        <div>
            <p>${tarefa.descricao}</p>
        </div>
        <div class="card-divider">
            <h5>R$ ${tarefa.pontos}</h5>
          </div>
        <div class="card-section">
            <div>
                <button onclick="carrinho()" class="submit success button">Adicionar carrinho</button>
            </div>
        </div>
    </div>
    `

    const card = document.createElement("div")
    card.innerHTML = content

    document
    .querySelector("#grid-container")
    .appendChild(card)

}

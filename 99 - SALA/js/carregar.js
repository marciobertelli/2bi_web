const tarefas = JSON.parse (localStorage.getItem("tarefas")) || []

tarefas.forEach( tarefa => card(tarefa) )

function card(tarefa){

    //template literals => ``
    const content = `
    <div class="nes-container with-title is-centered">

        <p class="title">${tarefa.titulo}</p>
        <p>${tarefa.descricao}</p>

        <a href="#" class="nes-badge is-icon">
            <span class="is-warning"><i class="nes-icon star is-small"></i></span> <!-- trocar a star por coin para alterar o icone-->
            <span class="is-primary">${tarefa.pontos}</span>
        </a>
        <progress class="nes-progress is-success" value="${tarefa.status}" max="100""></progress>

        <button onclick="dinc('${tarefa.id}')" type="button" class="nes-btn is-primary">-</button>
        <button onclick="apagar('${tarefa.id}')" type="button" class="nes-btn is-error">Delete</button>
        <button onclick="inc('${tarefa.id}')" type="button" class="nes-btn is-primary">+</button>
        
    </div>
    `

    const card = document.createElement("div")
    card.id = tarefa.id
    card.innerHTML = content

    document
    .querySelector("#lista-de-tarefas")
    .appendChild(card)

}

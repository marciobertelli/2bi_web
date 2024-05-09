document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (e) => {
        e.preventDefault()
        console.log("cadastrar...")

        const form = document.querySelector("form")

        const tarefa= {
            id: "id" + new Date().getTime(),
            titulo: form.titulo.value,
            descricao: form.descricao.value,
            pontos: form.pontos.value,
            status:0
        }

        console.log(form.titulo.value)
        console.log(form.descricao.value)
        console.log(form.pontos.value)


        salvar(tarefa)

    })

function salvar(tarefa){
    const tarefas = JSON.parse (localStorage.getItem("tarefas")) || []
    tarefas.push(tarefa)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    window.location = "index.html"

}
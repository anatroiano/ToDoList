const inputTarefa = document.querySelector('#inputTarefa');
const button = document.querySelector('#buttonAdicionar');
const erro = document.querySelector('#erro');
const ul = document.querySelector('.ulTasks');

// Adicionar tarefa
button.addEventListener('click', (e) => {
    e.preventDefault();

    const valueTarefa = inputTarefa.value; 
    // Validacao do formulario
    if(valueTarefa === '') {
        erro.textContent = "Por favor, preencha o campo.";
        erro.classList = "erro";

        setTimeout(() => {
            erro.textContent = "";
            erro.classList = "";
        }, 4000);
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `<i class="fa-regular fa-circle-check"></i> <p>${valueTarefa}</p>`;
    ul.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = `&#215;`;
    li.appendChild(span);

    inputTarefa.value = "";
});

ul.addEventListener("click", function(e) {
    if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove(); // Exclui a tarefa
    } else if(e.target.tagName === "I") {
        if (e.target.classList == "fa-regular fa-circle-check") {
            let li = e.target.parentElement;
            li.classList.toggle('checked'); // Marca a tarefa como realizada
            e.target.classList.replace('fa-regular', 'fa-solid'); // Muda o icone para o preenchido
        } else {
            let li = e.target.parentElement;
            li.classList.remove('checked'); // Marca a tarefa como nao realizada
            e.target.classList.replace('fa-solid', 'fa-regular'); // Muda o icone para o nao preenchido
        }
    }
}, false);
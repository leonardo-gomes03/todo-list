// Declarando
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoBtn = document.getElementById("#btn-submit");
const todoItens = document.querySelector("#todo-itens");
const ul = document.querySelector('ul');






todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = todoInput.value;

    if (value == '') return;

    const li = document.createElement('li');
    li.setAttribute("class", "todo-content");

    const button = document.createElement('button');
    button.setAttribute("class", "delete-item");
    button.textContent = "X";

    const liDiv = document.createElement('div');
    liDiv.setAttribute("class", "action-zone");

    liDiv.innerHTML += `

    <div class="action-zone">
        <input type="checkbox" name="" id="">
        <span>${value}</span>
    </div>
    `


    ul.appendChild(li);

    li.appendChild(liDiv);
    li.appendChild(button);

    todoInput.value = ""
})

ul.addEventListener("click", (e) => {
    if(e.target.classList.contains('delete-item')){
        if(confirm("Deseja deletar esse item?")){
            e.target.parentElement.remove()
        }
    }
})

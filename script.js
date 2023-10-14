let addBtn = document.getElementById('add');

addBtn.addEventListener('click', addToDo);

function addToDo() {
    if (document.querySelector('input').value.length == 0) {
        alert('Please fill the box!')
    } else {


        document.querySelector('#todoLists').innerHTML += `

        <div class= "list-text">
        <p>${document.querySelector('input').value}</p>
        <button class="delete"><i class="fa-regular fa-trash-can"></i>
        </button>
        </div>
        `;



        document.querySelector('input').value = '';

        let deleteBtn = document.querySelectorAll(".delete");
        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].onclick = function () {
                this.parentNode.remove();
            };
        }
    }
}

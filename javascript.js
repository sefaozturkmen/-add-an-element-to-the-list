const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnAdd = document.querySelector('#btnAdd');
const taskList = document.querySelector('#task-list');
const btnDeleteAll = document.querySelector('#btnDeleteAll')
let items;

eventListeners();

function eventListeners() {
    // add item
    form.addEventListener('submit', addNewItem);

    //delete item
    taskList.addEventListener('click', deleteItem)

    //delete all items 
    btnDeleteAll.addEventListener('click', deleteAll)

}

//create items
function createItem(text) {
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(text))


    //create a 
    const btn = document.createElement('btn');
    btn.className = 'btn btn-sm float-right';
    btn.innerHTML = '<i class="fas fa-times"></i>'
    btn.setAttribute = ('href', '#');

    // btn to li
    li.appendChild(btn);

    // li to ul
    taskList.appendChild(li);
}

//delete item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }

    }
}

//delete all items 
function deleteAll(e) {
    if (confirm('are you sure?')) {
        taskList.innerHTML = '';
    }
}
// add New item
function addNewItem(e) {

    if (input.value === '') {
        alert('Add New Message')

    } else {

        e.preventDefault();
        //create item
        createItem(input.value);

        //save to LS
        setItemToLS(input.value);

        //clear input
        input.value = '';
    }
}
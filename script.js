const addTask = document.getElementById('add-task');
const inputTask = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');

addTask.addEventListener('click', function(){

    let task = document.createElement('div');
    task.classList.add('task');
    //taskContainer.appendChild('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '✔️';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '❌';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === ''){
        alert('please enter a task');
    } else{
        taskContainer.appendChild(task);
    }

    inputTask.value ="";

    checkButton.addEventListener('click',function(){
        li.style.textDecoration = 'line-through'; 
    })

    deleteButton.addEventListener('click', function(){
        task.style.display = 'none';
    })


});

//Home

import React from 'react';
import './Home.css';
import Delete from './delete.png';


//Open Modal
const openTaskModal = () => {
    let modal = document.querySelector('.taskModal');
    
    modal.style.display = "flex";  
}

//Close Modal

const closeTaskModal = () => {
    let modal = document.querySelector('.taskModal');

    modal.style.display = "none";
}


window.onload = function () {
    //Selectors
    let addTaskButton = document.getElementById('addButton');   
    let taskContainer = document.getElementById('taskContainer');
    let taskTitle = document.getElementById('title');
    let taskDescription = document.getElementById('description');
    let clearTasksButton = document.getElementById('clearTasks');

    addTaskButton.addEventListener('click', function(){

        //Close modal at clicking Add button
        let modal = document.querySelector('.taskModal');

        modal.style.display = "none";

        //Task Window
        var task = document.createElement('div');
        task.classList.add('task');
        taskContainer.appendChild(task);

        //Task Title
        var title = document.createElement('p');
        title.innerText = taskTitle.value;
        title.classList.add('taskTitle');
        task.appendChild(title);

        if(taskTitle.value === "") {
            alert("You must insert a title!");
        }

        //Task Description
        var description = document.createElement('div');
        description.innerText = taskDescription.value;
        description.classList.add('taskDescription');
        task.appendChild(description);

        //Delete Task Button
        var deleteButton = document.createElement('img');
        deleteButton.src = Delete;
        deleteButton.classList.add('deleteButton');
        task.appendChild(deleteButton);

        deleteButton.addEventListener('click', function(){
            task.remove();
        })

        //Complete Task Checkbox
        var checkTask = document.createElement('input');
        checkTask.type = "checkbox";
        checkTask.classList.add('checkTask');
        checkTask.id = "checkTask";
        task.appendChild(checkTask);

            //Checkbox Label
            var checkTaskLabel = document.createElement('label');
            checkTaskLabel.htmlFor = "checkTask";
            checkTaskLabel.classList.add('checkTaskLabel');
            checkTaskLabel.innerHTML = "Complete";
            task.appendChild(checkTaskLabel);

            clearTasksButton.addEventListener('click', function(){
                if(checkTask.checked === true) {
                    task.remove();
                }
            })

    })


}


const Home = () => {
    return(
        <div className="home" id="home">
            <div id="taskContainer" className="taskContainer">

            </div>

            { /*Task Add Button*/ }
            <div onClick= { openTaskModal } className="taskAddButton">
                <p>+</p>
            </div>

            <button id="clearTasks" className="clearTasks">Clear completed tasks</button>

            { /*Task Modal*/ }
            <div className="taskModal">
                <p>Add Task</p>
                <h1 onClick={ closeTaskModal } className="closeX">X</h1>

                { /*Title*/ }
                <input type="text" id="title" className="modalTitleInput" placeholder="Title" size="30"/>

                { /*Description*/ }
                <textarea id="description" className="modalDescInput" maxLength="200" placeholder="Description" rows="4" cols="50"></textarea>

                <button id="addButton" className="addButton">Add</button>
            </div>


        </div>
    )
}



export default Home;
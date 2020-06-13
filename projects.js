//Define UI variables
const taskList = document.querySelector(".collection");
const taskForm = document.querySelector("#task-form");
const clear= document.querySelector("#clear");
const filter= document.querySelector("#filter");
const taskTitle= document.querySelector("#task-title");
// const clearTasks= document.querySelector(".clear-tasks");
const taskInput= document.querySelector("#task");
// const collection= document.querySelector(".collection-item");


//Load all event listeners
loadEventListeners();

function loadEventListeners(){
//Add event listeners
taskForm.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask)
clear.addEventListener("click", clearTasks);
//Filter tasks event
filter.addEventListener("keyup", filterTasks)

}
// collection.addEventListener("click", clearTask)

//Create task input function
function addTask(e){
    if(taskInput.value === ""){
        console.log("word");
    }else{
        const list= document.createElement("li");
        list.className = "collection-item";

        //Create text node 
        listSub = document.createTextNode(taskInput.value)
        
        //Create new link element to delete

        const link = document.createElement("a");
        link.className = "delete-item secondary content"

        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'

        list.appendChild(link);


        list.appendChild(listSub);
        taskList.appendChild(list);

        //Clear input
        taskInput.value = "";
        e.preventDefault();
    }

  
}

//store tasks in local storage
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem("tasks")=== null){
        tasks =[];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item"))
    {console.log(e.target.parentElement);
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();
            //Remove from local storage

            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//REMOVE FROM LOCAL STORAGE
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem("tasks") === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
}

function clearTasks(){
   
        // taskList.innerHTML = "";

        //Faster 
       while(taskList.firstChild) {
           taskList.removeChild(taskList.firstChild);
       }
    
}

//Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelector(".collection-item").forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
task.style.display = "block"
            }else{
                task.style.display = "none"
            }
        }
    );
    
}
localStorage.setItem("username", "janedoe");

alert("Your username is" + localStorage.getItem("username"));
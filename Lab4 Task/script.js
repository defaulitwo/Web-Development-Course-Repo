class Task
{
    constructor(text)
    {
        this.isActive = true;
        this.text = text;
    }
}

let tasks = [
    // {
    //     "isActive": true,
    //     "text": "Hello world"
    // }
];

const FILTER_ALL = 0;
const FILTER_ACTIVE = 1;
const FILTER_COMPLETED = 2;
let current_filter = FILTER_ALL;

const input_button = document.getElementById("input_button");
const input_textbox = document.getElementById("input_textbox");
const filter_all = document.getElementById("filter_all");
const filter_active = document.getElementById("filter_active");
const filter_completed = document.getElementById("filter_completed");
const task_view = document.getElementById("task_view");

function render()
{
    tasks.sort((a, b) =>  b.isActive - a.isActive)
    task_view.replaceChildren(); // clear tasks
    let filtered_tasks = tasks;
    if (current_filter == FILTER_ACTIVE)
        filtered_tasks = tasks.filter(task => task.isActive);
    else if (current_filter == FILTER_COMPLETED)
        filtered_tasks = tasks.filter(task => !task.isActive);
    for (let index = 0; index < filtered_tasks.length; index++) 
    {
        const element = filtered_tasks[index];
        const newDiv = document.createElement("div");
        task_view.appendChild(newDiv);
        newDiv.className = "task";
        newDiv.textContent = `${element.text}`;
        newDiv.addEventListener("click", task_clicked);
        if (element.isActive) newDiv.style = "background-color: #d0fdb3";
        else newDiv.style = "text-decoration: line-through;";
        element.linkedDiv = newDiv;
    }
}

function add_task()
{
    if (input_textbox.value != "")
    {
        newTask = new Task(input_textbox.value);
        tasks.push(
            newTask
        )
        input_textbox.value = ""
        render();
    }
}

function task_clicked(event)
{
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (event.target === task.linkedDiv)
            task.isActive = !task.isActive;
    }
    render();
}

function filter_all_clicked()
{
    current_filter = FILTER_ALL;
    filter_all.classList.add("filter-button-active");
    filter_active.classList.remove("filter-button-active");
    filter_completed.classList.remove("filter-button-active");
    render();
}

function filter_active_clicked()
{
    current_filter = FILTER_ACTIVE;
    filter_all.classList.remove("filter-button-active");
    filter_active.classList.add("filter-button-active");
    filter_completed.classList.remove("filter-button-active");
    render();
}

function filter_completed_clicked()
{
    current_filter = FILTER_COMPLETED;
    filter_all.classList.remove("filter-button-active");
    filter_active.classList.remove("filter-button-active");
    filter_completed.classList.add("filter-button-active");
    render();
}

input_button.addEventListener("click", add_task);
filter_all.addEventListener("click", filter_all_clicked);
filter_active.addEventListener("click", filter_active_clicked);
filter_completed.addEventListener("click", filter_completed_clicked);
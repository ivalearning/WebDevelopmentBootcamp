let tasks = ["jojo", "dodo", "fr"];
const taskList = document.getElementById("tasks");
const input = document.getElementById("inputTask");
const storageKey = "tasks";

function renderTasks() {
    taskList.innerHTML = null;      /* smaze jiz existujici list  */

    for (const [idx, task] of Object.entries(tasks)) {  /* pro existujici zaznamy v tasks vybere index a value */
        const container = document.createElement("div");  /* vytvori element div  */
        container.style.marginBottom = "10px"           

        const text = document.createElement("p")    /* vytvori element paragraf  */
        text.style.display = "inline";
        text.style.marginRight = "10px"
        text.textContent = task;                    /* preda hodnotu z listu do paragrafu  */

     

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeTask(idx)      /* wrapper syntax - zavola funkci, ktera zavola funkci
                                                    pokud by to bylo jen button.onclick = removeTask(idx), 
                                                    tak by ho bez kliknuti hned smazal  */
    
    
        container.appendChild(text);
        container.appendChild(button);
        taskList.appendChild(container)                  /* prida cele do konstanty container  */    
    }
}

function loadTasks() {
    const oldTasks = localStorage.getItem(storageKey);
    if (oldTasks) tasks = JSON.parse(oldTasks);
    renderTasks();
}

function saveTask() {
    const stringTasks = JSON.stringify(tasks);  /* zmeni list na string - takto je mozne ulozit na lokalnim ulozisti  */
    localStorage.setItem(storageKey,stringTasks)
}

function addTask() {
    const value = input.value;
    if (!value) {
        alert("Cannot add an empty value")
        return              /* naked return - nevrati nic  */
    }
    tasks.push(value);      /* prida task do seznamu  */
    renderTasks();          /* pregeneruje seznam  */
    input.value = ""        /* nastavi praydnout hodnotu v textboxu  */
    saveTask();
}

function removeTask(idx) {
    tasks.splice(idx,1)     /* splice(start,deleteCount) smaze 1 item od pozice idx  */
    renderTasks();
    saveTask();
}

document.addEventListener("DOMContentLoaded", loadTasks)    /* nacte ulozene tasky pri otevreni stranky (html loaded) */

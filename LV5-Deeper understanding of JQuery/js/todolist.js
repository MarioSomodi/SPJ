var taskNum = 0;

function AddTask(){
    taskNum++;
    var ul = $('#toDo');
    var task = $('#taskName');
    ul.append(`<li id="${taskNum}"> <input type="checkbox"> ${task.val()} <button onclick="DeleteTask(${taskNum})"><i class="fas fa-trash"></i></button></li>`);
}

function DeleteTask(numOfTask){
    $(`#toDo #` + numOfTask).remove();
}
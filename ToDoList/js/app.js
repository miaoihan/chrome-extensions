let $ = function(id){
    return document.getElementById(id)
}

/**
 * append公共方法
 * @param {*task content} val 
 */
function appendTodoHtml(val){
    let taskItemHtml = 
        `<div class="task-item">
            <input type="checkbox">
            <span class="task-content" style="font-size: 14px;">${val}</span>
        </div>`
    $('task-list').innerHTML += taskItemHtml
    $('task-input').value = ''
}

function appendDoneHtml(val){
    let taskItemHtml = 
        `<div class="task-item">
            <input type="checkbox">
            <span class="task-content" style="font-size: 14px;">${val}</span>
        </div>`
    $('done-list').innerHTML += taskItemHtml
    $('task-input').value = ''
}

// 监听回车
$('task-input').addEventListener('keyup', function(event) {
    if (event.keyCode == "13") {
        let taskContent = $('task-input').value;
        appendTodoHtml(taskContent)
        // 存储逻辑
        let task = new Task(taskContent,0)
        task.save(task)
    }
});

function updateView(data) {
    for(let task of data){
        if (task.state == 0)
            appendTodoHtml(task.content)
        else if (task.state == 1)
            appendDoneHtml(task.content)
    }
}

chrome.storage.sync.get('taskList', function(res){
    // console.log(res.taskList);
    for(let i of res.taskList){
        appendTodoHtml(i.content)
    }
    
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    alert('changed!')
    // 更新视图

});

// chrome.runtime.sendMessage('fetchData', function(res){
//     // document.getElementById("task-list").innerHTML = "hahaha";
//     alert(res);
// });


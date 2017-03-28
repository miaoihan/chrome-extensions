let $ = function(id){
    return document.getElementById(id)
}

/**
 * append公共方法
 * @param {*task content} val 
 */
function appendHtmlTo(task,id){
    let check
    if (task.isFinish == false) check = ""
    else check = "checked"
    let taskItemHtml = 
        `<div class="task-item">
            <input type="checkbox" id="${task.id}" ${check}>
            <span class="task-content" style="font-size: 14px;">${task.content}</span>
        </div>`
    $(id).innerHTML += taskItemHtml
    // 添加监听
    // document.getElementById(task.id).addEventListener('change',function(e){
    //     alert('changed')
    //     new Task().changeState(task.id)
    // })
    $('task-input').value = ''
}

// 监听回车
$('task-input').addEventListener('keyup', function(event) {
    if (event.keyCode == "13") {
        let taskContent = $('task-input').value;
        // appendTodoHtml(taskContent)
        // 存储逻辑
        let task = new Task(taskContent,false)
        task.save(task)
    }
});

function updateView(data) {
    // 先清空视图
    $('task-list').innerHTML = '';$('done-list').innerHTML = '';
    for(let task of data){
        if (task.isFinish == false)
            appendHtmlTo(task,'task-list')
        else if (task.isFinish == true)
            appendHtmlTo(task,'done-list')
    }
}

// 第一次打开时获取数据
chrome.storage.sync.get('taskList', function(res){
    updateView(res.taskList)
    // 生成box后开始监听
    setInterval(function() {
        let boxes = document.querySelectorAll('input[type=checkbox]');
        for (let box of boxes){
            box.addEventListener('change',function(e){
                // alert('changed')
                new Task().changeState(this.id)
            })
        }
    }, 200);
});

// chrome.storage.sync.remove('taskList', function(res){
//     alert('removed')
// });

chrome.storage.onChanged.addListener(function() {
    // 更新视图remove
    chrome.storage.sync.get('taskList', function(res){
        updateView(res.taskList)
    });
});

    



// chrome.runtime.sendMessage('fetchData', function(res){
//     // document.getElementById("task-list").innerHTML = "hahaha";
//     alert(res);
// });


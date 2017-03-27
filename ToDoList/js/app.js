let $ = function(id){
    return document.getElementById(id)
}



// 监听回车
$('task-input').addEventListener('keyup', function(event) {
    if (event.keyCode == "13") {
        let task = $('task-input').value;
        // alert(task)
        let taskItemHtml = 
            `<div class="task-item">
              <input type="checkbox">
              <span class="task-content" style="font-size: 14px;">${task}</span>
            </div>`
            $('task-list').innerHTML += taskItemHtml
        $('task-input').value = ''
    }
});


chrome.runtime.sendMessage('Hello', function(res){
    // document.getElementById("task-list").innerHTML = "hahaha";
});
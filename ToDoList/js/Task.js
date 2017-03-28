//定义任务类
class Task {
  constructor(content, state, date) {
    this.content = content;
    this.state = state;
    this.date = date;
  }

  save(obj) {
    chrome.storage.sync.get('taskList', function(res) {
        let taskList = res.taskList || []
        taskList.push(obj)
        chrome.storage.sync.set({taskList:taskList}, function(){
            // alert('success!')
        });
    });
  }



  toString() {
    return '(' + this.content + ', ' + this.date + ', ' + this.state + ')';
  }
}


// chrome.storage.StorageArea.get(keys, function(result){
//     console.log(result);
// });
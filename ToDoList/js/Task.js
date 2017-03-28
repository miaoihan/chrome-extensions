/**
 * 任务类
 */
class Task {
  constructor(content, isFinish, date, id) {
    this.content = content;
    this.isFinish = isFinish;
    this.date = date;
    this.id = 'task'+new Date().getTime();
  }

  /**
   * 保存task到本地
   * @param {*} obj 
   */
  save(obj) {
    chrome.storage.sync.get('taskList', function(res) {
        let taskList = res.taskList || []
        taskList.push(obj)
        chrome.storage.sync.set({taskList:taskList});
    });
  }

  /**
   * 改变task完成状态
   * @param {*} id 
   */
  changeState(id) {
    chrome.storage.sync.get('taskList', function(res) {
        let taskList = res.taskList || []
        let task = {}
        for (let i in taskList){
          if (taskList[i].id == id)
            taskList[i].isFinish = !taskList[i].isFinish
        }
        chrome.storage.sync.set({taskList:taskList});
    });
  }

  toString() {
    return '(' + this.content + ', ' + this.date + ', ' + this.isFinish + ')';
  }
}


// chrome.storage.StorageArea.get(keys, function(result){
//     console.log(result);
// });
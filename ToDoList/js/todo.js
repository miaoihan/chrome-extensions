//定义任务类
class Task {
  constructor(title, date, state) {
    this.title = title;
    this.date = date;
    this.stata = stata;
  }
  
  new() {

  }
  
  

  toString() {
    return '(' + this.title + ', ' + this.date + ', ' + this.state + ')';
  }
}

chrome.storage.StorageArea.set(5, function(){
    console.log('success');
});

// chrome.storage.StorageArea.get(keys, function(result){
//     console.log(result);
// });
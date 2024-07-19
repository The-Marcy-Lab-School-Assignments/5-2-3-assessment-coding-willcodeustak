const { getId } = require('./utils');
 class  ToDoItem {
  
  constructor(description,priorityLevel,forFun) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
    this.forFun = forFun
  }
  
  extraToDoItemMethod() {
  };
}

class ToDoList {
  #list = [];
  constructor(name,forFun2,chores,funTasks) {
    this.id = getId();
    this.name = name;
    this.forFun2 = forFun2;
    this.chores = chores
    this.funTasks = funTasks
   
    // this.chores = chores
    // this.funTasks = funTasks;
   
  }
  
  findBy() {
    
  }
  4
  createItem(chores,funTasks){
      const createdItem = new ToDoItem(chores,funTasks)
      this.#list.push(createdItem)
      return createdItem
    }

  getItems(){
    return [...this.#list]
  }
  getCompletedCount(isDone) {
   const completedCount = new ToDoItem(isDone)
 return completedCount
  }
 
}


// const chores = new ToDoItem1 =("This week's tasks")
//     const doDishes = new ToDoItem2 = ('Do the dishes', 1)
module.exports = {
  ToDoItem,
  ToDoList
};
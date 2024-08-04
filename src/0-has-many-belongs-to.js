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
    /** FEEDBACK: The goal for this question is to count how many items have been marked complete from the toDoList.
     * In your code you can start by creating a counter
     * Currently, you are creating a new item, however, we should instead iterate through the items we already have in our array. 
     * If the item has been marked as complete then we can increment the counter and return it. 
     * Alternatively, what higher order method can we use to do something similar?
     */
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
import { Injectable,Output,EventEmitter } from '@angular/core';
import { List } from './list.model';
import * as _ from 'lodash';

@Injectable()
export class ModifyService {
  @Output() counter=new EventEmitter();                         //emit real time count of tasks
  @Output() taskList=new EventEmitter();                        //used for showing stats
  data:List;                                                     //json to push data into tasks
  tasks: Array<List> = [
    { id:0,task:"Get Up.",active: false },
    { id:1,task:"Brush Your Teeth.",active: false },
    { id:2,task:"Do Yoga.",active: false },
  ];
  arr=[];
  emitData:any;                                                 //json to emit real time count of tasks
  activeList;                                                   //variable to hold filtered tasks array
  id=this.tasks.length;                                         // id the new tasks
  taskCount = this.tasks.length;                                // no. of total task
  taskCompleted = _.filter(this.tasks,'active').length;         // no. of completed task
  constructor() {}
  getList() {
    return this.tasks;
  }
  addTask(task) {
    this.data = {id:this.id, task:task, active:false};
    this.tasks.push(this.data);
    this.taskCount = this.tasks.length;
    this.taskCompleted = this.arr.length;
    this.listener(this.taskCompleted,this.taskCount);
    this.id++;
  }
  listener(taskCompleted,taskCount){
    this.emitData = {'taskCompleted':taskCompleted,'taskCount':taskCount};
    this.counter.emit(this.emitData);
  }
  onCheck(index){
    if(this.arr.length==0){
    this.arr.push(index);

    this.tasks[index].active=true;
    } else {
    if(_.indexOf(this.arr, index) != -1){
      this.arr=_.pull(this.arr,index);
      this.tasks[index].active=false;
    } else {
      this.arr.push(index);
      this.tasks[index].active=true;
    }
    } 
      this.taskCompleted = _.filter(this.tasks,'active').length;
      this.listener(this.taskCompleted,this.taskCount);

  }
  onDelete(id) {
    _.pull(this.tasks,id);
    _.pull(this.arr,id.id)
    this.taskCompleted = _.filter(this.tasks,'active').length;
    this.taskCount = this.tasks.length;
    this.listener(this.taskCompleted,this.taskCount);
  }
  onComplete(){
    this.activeList =_.filter(this.tasks,'active');
    this.taskListFunc(this.activeList);
  }
  onRemaining(){
    this.activeList =_.filter(this.tasks,['active',false]);
    this.taskListFunc(this.activeList);
  }  
  onAll(){
    this.taskListFunc(this.tasks);
    console.log(this.tasks);
  }
  taskListFunc(list){
    this.taskList.emit(list);
  }
  getTask(id: number) {
    return this.tasks[id];
  }
}

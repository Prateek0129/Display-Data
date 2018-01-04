import { Injectable,Output,EventEmitter } from '@angular/core';
import { List } from './list.model';
import * as _ from 'lodash';

@Injectable()
export class ModifyService {
  @Output()
  counter=new EventEmitter();
  @Output()
  taskList=new EventEmitter();
  data;
  arr=[];
  emitData;
  activeList;
  id=3;
  count:number = 0;
  tasks: Array<List> = [
    { id:0,task:"Get Up.",active: false },
    { id:1,task:"Brush Your Teeth.",active: false },
    { id:2,task:"Do Yoga.",active: false },
  ];
  taskCount = this.tasks.length; 
  constructor() {}
  addTask(task) {
    this.data = {'id':this.id,'task':task,'active':false};
    this.tasks.push(this.data);
    this.taskCount = this.tasks.length;
    this.listener(this.count,this.taskCount);
    this.id++;
  }
  listener(count,taskCount){
    this.emitData = {'count':count,'taskcount':taskCount};
    this.counter.emit(this.emitData);
  }
  onCheck(id:number){
    if(this.arr.length==0){
    this.arr.push(id);
    this.tasks[id].active=true;
    } else {
    if(_.indexOf(this.arr, id) != -1){
      this.arr=_.pull(this.arr,id);
      this.tasks[id].active=false;
    } else {
      this.arr.push(id);
      this.tasks[id].active=true;
    }
    }
    this.count = this.arr.length;
    this.listener(this.count,this.taskCount);
  }
  onSelect(todo) {
    return todo;
  }
  onDelete(id) {
    this.tasks=_.pull(this.tasks,id);
    this.arr=_.pull(this.arr,id); 
    this.count = this.arr.length;
    this.taskCount = this.tasks.length;
    this.listener(this.count,this.taskCount);
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
}

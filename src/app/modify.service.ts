import { Injectable,Output,EventEmitter } from '@angular/core';
import { List } from './list.model';
import * as _ from 'lodash';

@Injectable()
export class ModifyService {
  @Output()
  counter=new EventEmitter();
  data;
  arr=[];
  emitData;
  count:number = 0;
  tasks: Array<List> = [
    { id:0,task:"Get Up." },
    { id:1,task:"Brush Your Teeth." },
    { id:2,task:"Do Yoga." },
  ];
  taskCount = this.tasks.length; 
  constructor() {}
  addTask(id:number,task:string) {
    this.data = {'id':id,'task':task};
    this.tasks.push(this.data);
    this.taskCount = this.tasks.length;
    this.listener(this.count,this.taskCount);
  }
  listener(count,taskCount){
    this.emitData = {'count':count,'taskcount':taskCount};
    this.counter.emit(this.emitData);
  }
  onCheck(id:number){
    if(this.arr.length==0){
    this.arr.push(id);
    } else {
    if(_.indexOf(this.arr, id) != -1){
      this.arr=_.pull(this.arr,id);
    } else {
      this.arr.push(id);
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
}

import { Injectable,Output,EventEmitter } from '@angular/core';
import { List } from './list.model';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import {} from './../app/'

@Injectable()
export class ModifyService {
 
  @Output() counter=new EventEmitter();                         //emit real time count of tasks
  @Output() taskList=new EventEmitter();                        //used for showing stats
 
  data:List;                                                     //json to push data into tasks
  tasks: Array<List> ;
  // = [
  //   { id:0,task:"Get Up.",active: false },
  //   { id:1,task:"Brush Your Teeth.",active: false },
  //   { id:2,task:"Do Yoga.",active: false },
  // ];
 id = 0;
 taskCount = 0;
 taskCompleted = 0;
  arr=[];                                                       // for stats purpose to fix a bug
  emitData:any;                                                 //json to emit real time count of tasks
  activeList;                                                   //variable to hold filtered tasks array
 
  constructor(private http: HttpClient) {}
  
  fetchData(): Observable<List[]>{
     return this.http.get<List[]>('./assets/mocklist.json')
      
  }
  setList(tasks) {
    this.tasks = tasks;
    this.id=this.tasks.length;                                         // id the new tasks
    this.taskCount = this.tasks.length;                                // no. of total task
    this.taskCompleted = _.filter(this.tasks,'active').length;         // no. of completed task
    this.listener(this.taskCompleted,this.taskCount);
  }
  getList(): Observable<List[]> {                                      // return the list of tasks
    return of (this.tasks);
  }
  
  listener(taskCompleted,taskCount){                           // Emit the Modified stats of the list
    this.emitData = {'taskCompleted':taskCompleted,'taskCount':taskCount};
    this.counter.emit(this.emitData);
  }
  taskListFunc(list){                                        // to emit the list when any of the stats button are clicked
    this.taskList.emit(list);
    console.log(list);
  }
/*********************************** Code to Modify Data ******************************************** */
  addTask(task) {                                              // add new task in the list
    this.data = {id:this.id, task:task, active:false};
    this.tasks.push(this.data);
    console.log(this.tasks);
    this.taskCount = this.tasks.length;
    this.taskCompleted = this.arr.length;
    this.listener(this.taskCompleted,this.taskCount);
    this.id++;
    this.taskListFunc(this.tasks);
  }

  onCheck(index){                                              // to check the no of completed task
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

  onDelete(id) {                                              // to delete the task present in the list
    _.pullAt(this.tasks,id);
    _.pullAt(this.arr,id)
    _.pullAt(this.activeList,id);
    this.taskCompleted = _.filter(this.tasks,'active').length;
    this.taskCount = this.tasks.length;
    this.listener(this.taskCompleted,this.taskCount);
  }
/*********************************** Code to show the stats ***************************************** */
  onComplete(){                                              // to show all the completed task in the list  
    this.activeList =_.filter(this.tasks,'active');
    this.taskListFunc(this.activeList);
    console.log(this.activeList);
  }

  onRemaining(){                                             // to show all the remaining task
    this.activeList =_.filter(this.tasks,['active',false]);
    this.taskListFunc(this.activeList);
    console.log(this.activeList);
  }  
  onAll(){                                                   // to show all the task in the list
    this.taskListFunc(this.tasks);
    console.log(this.tasks);
  }
  getTask(id: number) {                                      // to get the id of the clicked task used for routing purpose
    return this.tasks[id];
  }
}

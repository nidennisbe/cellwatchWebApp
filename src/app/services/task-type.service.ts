import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TaskTypeService {

  constructor(private db: AngularFireDatabase) { }


  create(type){
    // return this.db.list('/taskType').push(type);
    return this.db.database.ref('/taskType').push().child("type").set(type);
  }

  getTaskTypes(){
    return this.db.list('/taskType');
  }

  //view all task types
  getAllTaskTypes() {
    return this.db.list('/taskType/');
  }

  //get task 1 x 1
  getAllTask(typeId){
    return this.db.object('/taskType/' + typeId);
  }

}

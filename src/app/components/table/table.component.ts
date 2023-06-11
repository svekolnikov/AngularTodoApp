import { Component } from '@angular/core';
import {TaskModel} from "../../models/task.model";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tasks: TaskModel[] = [];

  constructor(api:ApiService) {}

  ngOnInit() {
    this.tasks.push({
      number: 1,
      task: 'go to shop',
      description: 'some task'
    },{
      number: 2,
      task: 'go to eat',
      description: 'another task'
    })
  }

  addNew() {
    console.log('Create new')
  }
  editItem(task:TaskModel){
    console.log('Edit item', task)
  }
  removeItem(task: TaskModel) {
    console.log('Remove item', task)
  }
}

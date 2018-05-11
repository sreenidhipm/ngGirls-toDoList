import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  name = 'Sree';
  input = '';
  newToDo = '';
  @Output() todoAdded = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.changeName('Nidhi');
  }
  changeName (name: string) {
  this.name = name;
  }
  addToDo(toDoElement) {
    this.newToDo = toDoElement.value;
    this.todoAdded.emit(this.newToDo);
    toDoElement.value = '';

    console.log('inside the addToDo function');
}
}

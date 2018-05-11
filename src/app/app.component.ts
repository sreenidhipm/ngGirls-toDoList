import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sree';
  toDoList = [];

  onNewToDoAdded(newToDo) {
    this.toDoList.push(newToDo);
    console.log(newToDo);
  }

}


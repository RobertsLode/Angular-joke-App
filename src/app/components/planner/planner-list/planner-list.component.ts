import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JokeObj } from 'src/app/modules/jokeObj.module';

@Component({
  selector: 'app-planner-list',
  templateUrl: './planner-list.component.html',
  styleUrls: ['./planner-list.component.scss'],
})
export class PlannerListComponent {
  @Input() jokes?: JokeObj[];
  @Output() deleteTaskEvent = new EventEmitter<number>();
  deleteTask(index: number): void {
    this.deleteTaskEvent.emit(index);
  }
}

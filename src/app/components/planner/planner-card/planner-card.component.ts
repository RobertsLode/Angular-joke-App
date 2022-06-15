import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JokeObj } from 'src/app/modules/jokeObj.module';

@Component({
  selector: 'app-planner-card',
  templateUrl: './planner-card.component.html',
  styleUrls: ['./planner-card.component.scss'],
})
export class PlannerCardComponent {
  @Input() joke?: JokeObj;
  @Output() deleteTaskEvent = new EventEmitter<null>();

  showPunchline = false;
  
  toggleShowPunchline(): void {
    this.showPunchline = !this.showPunchline;
  }

  deleteTask(): void {
    this.deleteTaskEvent.emit();
  }
}

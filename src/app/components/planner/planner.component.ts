import { Component } from '@angular/core';
import { JokeObj } from 'src/app/modules/jokeObj.module';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  // implements OnInit importee hook, kas tiek izsaukts, kad komponente ir izveidota
  jokes = [
    {
      joke: 'What’s the best thing about Switzerland?',
      punchLine: 'I don’t know, but the flag is a big plus.',
    },
    {
      joke: 'Did you hear about the mathematician who’s afraid of negative numbers?',
      punchLine: 'He’ll stop at nothing to avoid them.',
    },
  ] as JokeObj[];

  addJoke(joke: JokeObj): void {
    //this.tasks.push(task);
    this.jokes = [...this.jokes, joke];
  }
  deleteTask(index: number): void {
    this.jokes = this.jokes.filter((_, i) => i !== index);
  }
}

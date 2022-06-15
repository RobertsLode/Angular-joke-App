import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JokeObj } from 'src/app/modules/jokeObj.module';

@Component({
  selector: 'app-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.scss'],
})
export class PlannerFormComponent implements OnInit, AfterViewInit {
  jokeInput: ElementRef | undefined;

  jokeForm: FormGroup = this.fb.group({});

  @Output() addJokeEvent = new EventEmitter<JokeObj>();

  addJoke() {
    this.jokeForm.markAllAsTouched();
    if (this.jokeForm.valid) {
      this.addJokeEvent.emit(this.jokeForm.value);
      console.log(this.jokeForm.value);
      this.jokeForm.reset();
    }
  }

  ngOnInit(): void {
    this.buildForm();
  }
  preventDef(event: any): void {
    event.preventDefault();
  }

  ngAfterViewInit(): void {
    this.jokeInput?.nativeElement.focus();
  }

  constructor(private fb: FormBuilder) {}

  buildForm(): void {
    this.jokeForm = this.fb.group({
      joke: ['', [Validators.required, Validators.minLength(3)]],
      punchLine: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}

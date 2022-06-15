import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'Angular_example';
  private title = 'Angular_example'; // nevar piekļūt citos failos var ari metodes/ funkcijas
  showTitle = true;

  get privateTitle() {
    // getteris
    console.log(1);
    return this.title;
  }

  toggleTitle(): void {
    this.showTitle = !this.showTitle;
  }

  hiii(): void {
    console.log('yolo');
    this.toggleTitle();
  }
}

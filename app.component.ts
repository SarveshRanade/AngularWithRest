import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('hello123') Hello: any;
  title = 'app3';
  isDisabled = false;

  OnHello(data) {
    alert('1 Click');
    alert(data || 'no data passed');
  }
}

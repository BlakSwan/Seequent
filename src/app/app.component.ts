import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
frontColor = {};
backColor = {};

  frontClick(x) {
    this.frontColor = x;
  }

  backClick(x) {
    this.backColor = x;

  }
}

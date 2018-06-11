import { Component, Output, EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  @Output() front = new EventEmitter();
  @Output() back = new EventEmitter();

  list = [
    {backgroundColor: 'red', color:'black'},
    {backgroundColor: 'orange', color:'black'},
    {backgroundColor: 'yellow', color:'black'},
    {backgroundColor: 'green', color:'white'},
    {backgroundColor: 'blue', color:'white'},
    {backgroundColor: 'purple', color:'white'}
];
  constructor() {}
  @Input() cb: string = "#ffffff";
  @Input() cf: string = "#ffffff";

  frontColor(chip) {
    this.front.emit(chip);
  }

  backColor(chip) {
    this.back.emit(chip);
  }

  customBack() {
    var temp = this.cb;
    var custom = {backgroundColor: temp, color:'black'};
    this.back.emit(custom);
  }

  customFront() {
    var temp = this.cf;
    var custom = {backgroundColor: temp, color:'black'};
    this.front.emit(custom);

  }

}

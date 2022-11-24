import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'action-input',
  templateUrl: './action-input.component.html',
  styleUrls: ['./action-input.component.css']
})
export class ActionInputComponent implements OnInit {

  conditions: string = ""

  constructor() {
  }

  ngOnInit() {
  }

  public setConditions(conditions: string) {
    this.conditions = conditions;
  }
}

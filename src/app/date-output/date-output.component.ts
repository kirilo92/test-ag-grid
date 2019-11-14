import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-output',
  templateUrl: './date-output.component.html',
  styleUrls: ['./date-output.component.scss']
})
export class DateOutputComponent implements OnInit {
  private params: any;

  agInit(params: any): void {
      this.params = params;
  }
  constructor() { }

  ngOnInit() {
  }

}

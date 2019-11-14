import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  private params: any;

  agInit(params: any): void {
      this.params = params;
  }
  
  constructor() { }

  ngOnInit() {
  }

}

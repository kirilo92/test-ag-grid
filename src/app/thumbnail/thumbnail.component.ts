import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  private params: any;

  agInit(params: any): void {
      this.params = params;
  }
  constructor() { }

  ngOnInit() {
  }

}

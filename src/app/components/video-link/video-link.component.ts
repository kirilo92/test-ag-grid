import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-link',
  templateUrl: './video-link.component.html',
  styleUrls: ['./video-link.component.scss']
})
export class VideoLinkComponent implements OnInit {
  private params: any;

  agInit(params: any): void {
      this.params = params;
  }
  constructor() { }

  ngOnInit() {
  }

}

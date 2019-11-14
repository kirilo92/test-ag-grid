import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-select-box-header',
  templateUrl: './select-box-header.component.html',
  styleUrls: ['./select-box-header.component.scss']
})
export class SelectBoxHeaderComponent implements OnInit {

  private params: any;
  theCheckbox = false;

  agInit(params: any): void {
    this.params = params;
  }
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.params.setSelectedCount(this.theCheckbox);
    const rowData = [];
    this.params.api.forEachNode(node => {
      node.data.checkBox = this.theCheckbox;
      rowData.push(node.data);
    });
    this.params.api.setRowData(rowData);
    if (this.theCheckbox) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }
}


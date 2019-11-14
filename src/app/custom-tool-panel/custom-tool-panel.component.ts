import { Component, OnInit } from '@angular/core';
import {IToolPanel, IToolPanelParams} from "@ag-grid-community/all-modules";

@Component({
  selector: 'app-custom-tool-panel',
  templateUrl: './custom-tool-panel.component.html',
  styleUrls: ['./custom-tool-panel.component.scss']
})

export class CustomToolPanelComponent implements IToolPanel{
    refresh(): void {
      throw new Error("Method not implemented.");
    }
    private params: IToolPanelParams;
    private selectionMode = false;

    agInit(params: IToolPanelParams): void {
        this.params = params;
        console.log(params);
        // calculate stats when new rows loaded, i.e. onModelUpdated
        this.params.api.addEventListener('modelUpdated', this.updateTotals.bind(this));
    }

    updateTotals(): void {
        this.params.api.forEachNode(function (rowNode) {
            console.log(rowNode);
        });
    }

    toggleSelectionMode() {
        this.selectionMode = !this.selectionMode;
        var columnToolPanel = this.params.api.getToolPanelInstance("columns");
        console.log(columnToolPanel);
    }
}
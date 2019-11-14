import {Component} from "@angular/core";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import { ApiService } from '../api.service';
import { DateOutputComponent } from "../date-output/date-output.component";
import { ThumbnailComponent } from "../thumbnail/thumbnail.component";
import { VideoLinkComponent } from "../video-link/video-link.component";
import { SelectBoxComponent } from "../select-box/select-box.component";
import { CustomToolPanelComponent } from '../custom-tool-panel/custom-tool-panel.component';
// import { SelectBoxHeaderComponent } from '../select-box-header/select-box-header.component';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html',
    styleUrls: ['./my-grid-application.component.scss']
})
export class MyGridApplicationComponent {
    // // private gridOptions: GridOptions;
    // modules = AllModules;
    private selectionMode = false;
    private totalCount = 0;
    private selectedCount = 0;
    data;
    private gridApi;
    private gridColumnApi;
    public modules = AllModules;

    private columnDefs;
    private defaultColDef;
    private getRowHeight;
    private rowData: [];
    private rowSelection;
    private icons;
    private sideBar;
    private frameworkComponents;
    constructor(private apiService: ApiService) {
      this.columnDefs = [
        {
            headerName: "",
            field: "checkBox",
            width: 50,
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true,
            cellRendererFramework: SelectBoxComponent,
            // headerComponent: SelectBoxHeaderComponent
        },
        {
            headerName: "",
            field: "thumbnails",
            cellRendererFramework: ThumbnailComponent,
            width: 120,
            cellStyle: {padding: 0}
        },
        {
            headerName: "Published on",
            field: "publishedAt",
            cellRendererFramework: DateOutputComponent,
        },
        {
          headerName: "Video Title",
          field: "title",
          cellRendererFramework: VideoLinkComponent,
          cellStyle: {overflow: 'hidden', whiteSpace: 'normal', wordBreak: 'break-word'}
        },
        {
          headerName: "Description",
          field: "description",
          cellStyle: {overflow: 'hidden', whiteSpace: 'normal', wordBreak: 'break-word'}
        }
      ];
      this.getRowHeight = function(params) {
        return 90;
      };

      this.rowSelection = "";
      // this.defaultColDef = { filter: true };
      // this.icons = { "custom-stats": '<span class="ag-icon ag-icon-custom-stats"></span>' };
      // this.sideBar = {
      //   toolPanels: [
      //     {
      //       id: "columns",
      //       labelDefault: "Columns",
      //       labelKey: "columns",
      //       iconKey: "columns",
      //       toolPanel: "agColumnsToolPanel"
      //     },
      //     {
      //       id: "filters",
      //       labelDefault: "Filters",
      //       labelKey: "filters",
      //       iconKey: "filter",
      //       toolPanel: "agFiltersToolPanel"
      //     },
      //     {
      //       id: "customStats",
      //       labelDefault: "Custom Stats",
      //       labelKey: "customStats",
      //       iconKey: "custom-stats",
      //       toolPanel: "customStatsToolPanel",
      //       toolPanelParams: {selectedCount: 45, gridColumnApi: this.gridColumnApi}
      //     }
      //   ],
      //   defaultToolPanel: "customStats"
      // };
      // this.frameworkComponents = { customStatsToolPanel: CustomToolPanelComponent };
    }

    ngOnInit() {
    }

    updateRowData() {
      this.apiService.getData().subscribe((data)=>{
        this.data = data;
        this.rowData = this.data.items.map(item => {
          return {
            checkBox: false,
            thumbnails: item.snippet.thumbnails.default.url,
            publishedAt: item.snippet.publishedAt,
            title: item.id.videoId,
            description: item.snippet.description
          };
        });
        this.totalCount = this.data.items.length;
      });
    }

    getContextMenuItems(params) {
        var result = [
          {
            name: "Open in new tab",
            action: function() {
              window.open("https://www.youtube.com/watch?v=" + params.value, '_blank');
            },
            cssClasses: [params.column.colId !== "title" ? "display-none" : ""]
          },
          "copy",
          "copyWithHeaders",
          "separator",
          "paste"
        ];
        return result;
    }

    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.updateRowData();
      this.gridColumnApi.setColumnVisible('checkBox', false);
    }

    toggleSelectionMode() {
      this.selectionMode = !this.selectionMode;
      this.gridColumnApi.setColumnVisible('checkBox', this.selectionMode);
      if (this.selectionMode === false) {
        this.gridApi.deselectAll();
        this.rowSelection = "";
        this.selectedCount = 0;
      } else {
        this.rowSelection = "multiple";
      }
    }

    onRowSelected(event) {
      this.selectedCount = event.api.getSelectedNodes().length;
    }
  
    onSelectionChanged(event) {
      this.selectedCount = event.api.getSelectedNodes().length;
    }
}
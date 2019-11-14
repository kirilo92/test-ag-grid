import {Component} from '@angular/core';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import { ApiService } from '../service/api.service';
import { DateOutputComponent } from '../components/date-output/date-output.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { VideoLinkComponent } from '../components/video-link/video-link.component';
import { SelectBoxComponent } from '../components/select-box/select-box.component';
import { SelectBoxHeaderComponent } from '../components/select-box-header/select-box-header.component';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html',
    styleUrls: ['./my-grid-application.component.scss']
})
export class MyGridApplicationComponent {
    private selectionMode = false;
    private totalCount = 0;
    private selectedCount = 0;
    data;
    private gridApi;
    private gridColumnApi;
    public modules = AllModules;
    private columnDefs;
    private getRowHeight;
    private rowData;
    private rowSelection;
    constructor(private apiService: ApiService) {
      this.columnDefs = [
        {
            headerName: '',
            field: 'checkBox',
            width: 50,
            cellRendererFramework: SelectBoxComponent,
            headerComponentFramework: SelectBoxHeaderComponent,
            headerComponentParams: {setSelectedCount: (checkBox) => {
              this.setSelectedCount(checkBox);
            }}
        },
        {
            headerName: '',
            field: 'thumbnails',
            cellRendererFramework: ThumbnailComponent,
            width: 120,
            cellStyle: {padding: 0}
        },
        {
            headerName: 'Published on',
            field: 'publishedAt',
            cellRendererFramework: DateOutputComponent,
        },
        {
          headerName: 'Video Title',
          field: 'title',
          cellRendererFramework: VideoLinkComponent,
          cellStyle: {overflow: 'hidden', whiteSpace: 'normal', wordBreak: 'break-word'}
        },
        {
          headerName: 'Description',
          field: 'description',
          cellStyle: {overflow: 'hidden', whiteSpace: 'normal', wordBreak: 'break-word'}
        }
      ];
      this.getRowHeight = () => {
        return 90;
      };
      this.rowSelection = '';
    }

    updateRowData() {
      this.apiService.getData().subscribe( (data) => {
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
        const result = [
          {
            name: 'Open in new tab',
            action() {
              window.open('https://www.youtube.com/watch?v=' + params.value, '_blank');
            },
            cssClasses: [params.column.colId !== 'title' ? 'display-none' : '']
          },
          'copy',
          'copyWithHeaders',
          'separator',
          'paste'
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
        this.rowSelection = '';
        this.selectedCount = 0;
      } else {
        this.rowSelection = 'multiple';
      }
    }

    onRowSelected(event) {
      this.selectedCount = event.api.getSelectedNodes().length;
      this.rowData.map((item, id) => {
        this.rowData[id].checkBox = false;
        console.log(this.rowData[id].checkBox);
      });
      event.api.getSelectedNodes().map(item => {
        this.rowData[item.childIndex].checkBox = true;
      });
      event.api.updateRowData(this.rowData);
    }

    setSelectedCount(checkBox) {
      this.selectedCount = checkBox ? this.totalCount : 0;
    }
}

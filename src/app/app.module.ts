import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import { AgGridModule } from '@ag-grid-community/angular';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from "./app.component";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { DateOutputComponent } from './date-output/date-output.component';
import { VideoLinkComponent } from './video-link/video-link.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { CustomToolPanelComponent } from './custom-tool-panel/custom-tool-panel.component';
// import { SelectBoxHeaderComponent } from './select-box-header/select-box-header.component';

@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        ThumbnailComponent,
        DateOutputComponent,
        VideoLinkComponent,
        SelectBoxComponent,
        CustomToolPanelComponent,
        // SelectBoxHeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AgGridModule.withComponents(
            [
              ThumbnailComponent,
              DateOutputComponent,
              VideoLinkComponent,
              SelectBoxComponent,
              CustomToolPanelComponent,
              // SelectBoxHeaderComponent
            ]
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import {MyGridApplicationComponent} from './my-grid-application/my-grid-application.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { DateOutputComponent } from './components/date-output/date-output.component';
import { VideoLinkComponent } from './components/video-link/video-link.component';
import { SelectBoxHeaderComponent } from './components/select-box-header/select-box-header.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        ThumbnailComponent,
        DateOutputComponent,
        VideoLinkComponent,
        SelectBoxHeaderComponent,
        SelectBoxComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AgGridModule.withComponents(
            [
              ThumbnailComponent,
              DateOutputComponent,
              VideoLinkComponent,
              SelectBoxHeaderComponent,
              SelectBoxComponent
            ]
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

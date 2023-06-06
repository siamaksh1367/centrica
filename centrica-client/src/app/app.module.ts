import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './components/district/district.component';
import { ApiHttpService } from './services/general/api-http.service';
import { Constants } from './config/constant';
import { ApiEndpointsService } from './services/general/api-endpoints.service';
import { TableComponent } from './components/base/table/table.component';
import { TableHeaderComponent } from './components/base/table-header/table-header.component';
import { SorterComponent } from './components/base/sorter/sorter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DistrictComponent,
    TableComponent,
    TableHeaderComponent,
    SorterComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [ApiHttpService, Constants, ApiEndpointsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

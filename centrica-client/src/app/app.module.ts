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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DISTRICT_SERVICE_TOKEN } from './services/district/IDistrictService';
import { DistrictService } from './services/district/district.service';
import { DistrictServiceMoq } from './services/district/district.service.mock';
import { AddButtonComponent } from './components/base/add-button/add-button.component';
import { SortButtonComponent } from './components/base/sort-button/sort-button.component';
import { ExpandButtonComponent } from './components/base/expand-button/expand-button.component';
import { CollapseButtonComponent } from './components/base/collapse-button/collapse-button.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    DistrictComponent,
    TableComponent,
    AddButtonComponent,
    SortButtonComponent,
    ExpandButtonComponent,
    CollapseButtonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [
    { provide: DISTRICT_SERVICE_TOKEN, useClass: DistrictServiceMoq },
    ApiHttpService,
    Constants,
    ApiEndpointsService,
    CommonService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

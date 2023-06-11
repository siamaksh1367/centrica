import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './components/district/district.component';
import { ApiHttpService } from './services/general/api-http.service';
import { Constants } from './config/constant';
import { TableComponent } from './components/base/table/table.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DistrictService } from './services/district/district.service';
import { DistrictServiceMoq } from './services/district/district.service.mock';
import { AddButtonComponent } from './components/base/add-button/add-button.component';
import { SortButtonComponent } from './components/base/sort-button/sort-button.component';
import { CommonService } from './services/common.service';
import { PaginationComponent } from './components/base/pagination/pagination.component';
import { SelectComponent } from './components/base/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistrictNewRowComponent } from './components/district-new-row/district-new-row.component';
import { NavPillComponent } from './components/base/nav-pill/nav-pill.component';

@NgModule({
  declarations: [
    AppComponent,
    DistrictComponent,
    TableComponent,
    AddButtonComponent,
    SortButtonComponent,
    PaginationComponent,
    SelectComponent,
    DistrictNewRowComponent,
    NavPillComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbCollapseModule,
    ReactiveFormsModule,
  ],
  providers: [
    Constants,
    CommonService,
    { provide: DistrictService, useClass: DistrictServiceMoq },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

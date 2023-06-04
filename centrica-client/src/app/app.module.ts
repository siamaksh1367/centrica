import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './components/district/district.component';
import { ApiHttpService } from './services/general/api-http.service';
import { Constants } from './config/constant';
import { ApiEndpointsService } from './services/general/api-endpoints.service';

@NgModule({
  declarations: [AppComponent, DistrictComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ApiHttpService, Constants, ApiEndpointsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

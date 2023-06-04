import { Component } from '@angular/core';
import { ApiEndpointsService } from 'src/app/services/general/api-endpoints.service';
import { ApiHttpService } from 'src/app/services/general/api-http.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css'],
})
export class DistrictComponent {
  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) {}
  ngOnInit() {
    this.apiHttpService
      .get(this.apiEndpointsService.getWeatherForecast())
      .subscribe((x) => console.log(x));
  }
}
